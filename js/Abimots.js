"use strict";

class Abimots {
    listeMots = new Map();
    semaine = 0;
    positionMots = new Array();
    num;
    motChoisi = "soleil";
    ecranJeu = document.getElementById("ecranJeu");   
    bonneLettre = [];

    constructor(semaine) {
        this.semaine = semaine;
        console.log(this.semaine);
    }

    get listeMots() {
        return this.listeMots;
    }

    get motChoisi() {
        return this.motChoisi;
    }

    /**
     * @param {Map} value
     */

    set listeMots(value) {
        this.listeMots = value;
    }

    //Charger la liste de mot de la semaine
     async chargerListeMots() {
        const response = await fetch("./../../database/dbQuatrieme.json");
        const donnees = await response.json();

        console.log(donnees);

        const semaine1 = donnees.find(
            element => element.semaineId === this.semaine
        );

        this.listeMots = new Map(
            semaine1.liste.map(element => [
                element.id,
                element.mot
            ])
        );

        this.positionMots = Array.from({length: this.listeMots.size}, (_, i) => i + 1)
        console.log(this.positionMots);

        this.num = this.choisirNumero()
        this.motChoisi = this.choisirMot()
        console.log(this.num)
        console.log(this.motChoisi)

    }

    // Choisir un nombre au hasard parmis ceux dans la liste de mot 
    choisirNumero(){
       
        let numero = Math.floor(Math.random() * this.positionMots.length - 1) + 1;

        return this.positionMots[numero]
    }

    //Choisir le mot associé au nombre déterminé
    choisirMot() {       
        return this.listeMots.get(this.num);
    }

    //Faire les carré réponse en fonction du mot choisi
    faireInput() {

        
        let inputsBox = `<div class=" w-full h-1/4 p-5 flex justify-center items-center gap-5">`;


        for (let i = 0; i < this.motChoisi.length ; i++) {
            if (this.bonneLettre.includes(i)){
                inputsBox += `  <div class=" h-16 w-16 bg-sky-950"> <input id="input${i}" data-position="${i}" value="${this.motChoisi[i]}" class="input h-full w-full text-4xl text-center" type="text" maxlength="1"></div>`
            } else {
                inputsBox += `  <div class=" h-16 w-16 bg-sky-950"> <input id="input${i}" data-position="${i}" class="input h-full w-full text-4xl text-center" type="text" maxlength="1"></div>`
            }
        }
    
        inputsBox += "</div>`"

        
    
        return inputsBox
    }


    faireEcranJeu() {
           
        let listeInput = this.faireInput();   
        this.bonneLettre.length = 0
        
        this.ecranJeu.innerHTML = ` <div class="flex gap-5 items-center justify-center" >
        <button id="audioBtn"><img class="w-[50px] h-[50px] bg-gray-50 p-2 rounded-md cursor-pointer border-2 border-gray-900" src="../../image/volume.jpg" alt="" srcset=""></button>
        <audio id="audio" src="../../audio/${this.motChoisi}.mp3"></audio>
        <img class="w-[250px] h-[250px] mr-[50px]" src="../../image/${this.motChoisi}.jpg" alt="" srcset="">
        </div>            
        `;
        
        this.ecranJeu.innerHTML += `${listeInput}`;        
        this.ecranJeu.innerHTML += `<button id="validerBtn" class="mt-5 pl-10 pr-10 p-2 bg-gray-900 text-white text-xl border border-sky-500 rounded-full">Confirmer</button>`;
        

        document.querySelectorAll(".input").forEach(item => {
            item.addEventListener("input", () =>{
                let postion = (item.getAttribute("data-position"))
                
                let tab =`input${parseInt(postion) + 1}`;
                if (postion < this.motChoisi.length - 1) {
                    document.getElementById(tab).focus();
                }
            })             
        });
        
        //faire jouer le son en cliquant sur le bouton
        document.querySelector("#audioBtn").addEventListener("click", () =>{
            let son = document.getElementById("audio");
            son.play()
        })

        //vérifier la réponse en cliquant sur valider
        document.querySelector("#validerBtn").addEventListener("click", () =>{

            let inputsArray = [];            
            
    
            document.querySelectorAll(".input").forEach(item => {
                inputsArray.push(item.value)                
            });

            for (let i = 0; i < this.motChoisi.length + 1; i++) {
                //Si la lettre entrée correspond à la lettre du mot
                if (this.motChoisi[i] === inputsArray[i]) {
                    //ajoute dans la liste bonne lettre pour qu'elle reste dans le jeu
                    this.bonneLettre.push(i);
                }
                
                // lorsque toutes les lettre sont bonnes
                if (this.bonneLettre.length == this.motChoisi.length) {
                    this.ecranJeu.innerHTML = `
                    <div class="flex gap-5 items-center justify-center bg-white">
                        <img class="w-[100px] h-[100px]" src="../../image/ballongauche.png" alt="fillette qui écrit" srcset="">
                        <h1>BRAVO!!!</h1>
                        <img class="w-[100px] h-[100px]" src="../../image/ballondroite.png" alt="fillette qui écrit" srcset="">
                    </div>`;
                    
                    
                    
                    //passer au mot suivant lorsque bonne réponse
                    setTimeout(() => {
                        let positionASupprimer = this.positionMots.indexOf(this.num);
                        this.positionMots.splice(positionASupprimer, 1)
                        if (this.positionMots.length === 0) {
                            // Si tous les mots ont été répondus
                                this.ecranJeu.innerHTML = `
                                    <div class="flex gap-5 items-center justify-center bg-white">
                                        <img class="w-[100px] h-[100px]" src="../../image/oups.png" alt="fillette qui écrit" srcset="">
                                        <h1>Bravo! Tu as tout réussi</h1>
                                        <img class="w-[100px] h-[100px]" src="../../image/oups.png" alt="fillette qui écrit" srcset="">
                                    </div>`;
                                    setTimeout(() => {
                                        window.location.href = "../selectionJeux.html";
                                }, 2000);
                            }


                        this.num = this.choisirNumero()
                        this.motChoisi = this.choisirMot()
                        this.bonneLettre.length = 0
                        this.faireEcranJeu()
                    }, 2000);

                    
                    
                }
                
                //Si réponse incorrect
                if (i === this.motChoisi.length - 1 && this.bonneLettre.length !== this.motChoisi.length){
                    
                    //message réponse incorrect 
                    this.ecranJeu.innerHTML = `
                    <div class="flex gap-5 items-center justify-center bg-white">
                        <img class="w-[100px] h-[100px]" src="../../image/oups.png" alt="fillette qui écrit" srcset="">
                        <h1>Essaie encore</h1>
                        <img class="w-[100px] h-[100px]" src="../../image/oups.png" alt="fillette qui écrit" srcset="">
                    </div>`;
                    setTimeout(() => {
                        this.faireEcranJeu()
                    }, 2000);
                    break
                }


            }

            

        })

    }

  

                
 
}
