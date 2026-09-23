"use strict";

class Abimots {
    listeMots = new Map();
    semaine = 0;
    positionMots = new Array();
    num;
    motChoisi = "soleil";
    ecranJeu = document.getElementById("accueil");  
    bonneLettre = [];

    constructor(semaine, mapMots) {
        this.semaine = semaine;
        this.listeMots = mapMots
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
    //  async chargerListeMots() {
    //     const response = await fetch("./../../database/dbQuatrieme.json");
    //     const donnees = await response.json();

    //     console.log(donnees);

    //     const semaine1 = donnees.find(
    //         element => element.semaineId === this.semaine
    //     );

    //     this.listeMots = new Map(
    //         semaine1.liste.map(element => [
    //             element.id,
    //             element.mot
    //         ])
    //     );

        // this.positionMots = Array.from({length: this.listeMots.size}, (_, i) => i + 1)
        // console.log(this.positionMots);

        // this.num = this.choisirNumero()
        // this.motChoisi = this.choisirMot()
        // console.log(this.num)
        // console.log(this.motChoisi)

    // }


    initialiser(){
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

    faireBarreAccueil(){
        this.ecranJeu.innerHTML = `
              <nav class="bg-gray-900 shadow-lg shadow-blue-300">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        <!--
                        Icon when menu is closed.
            
                        Menu open: "hidden", Menu closed: "block"
                        -->
                        <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <!--
                        Icon when menu is open.
            
                        Menu open: "block", Menu closed: "hidden"
                        -->
                        <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex shrink-0 items-center">
                        <a href="../../index.html"><img class="h-8 w-auto" src="./../../image/soleil.jpg" alt="Retour" ></a>
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                        <a href="../selectionJeux.html" class="rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-700" aria-current="page">Retour</a>
                        </div>
                    </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                    </div>
                    </div>
                </div>
                </div>
            
                <!-- Mobile menu, show/hide based on menu state. -->
                <div class="hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Vocabulaire</a>
                </div>
                </div>
            </nav>

            <div class="container flex w-full h-[90dvh] mx-auto bg">
                <div class="w-1/3 ">
                    <img class="p-10 mt-20 ml-20 " src="../../image/fillette.png" alt="fillette qui écrit" srcset="">
                </div>
                <div  class="w-2/3 flex flex-col items-center">
                    <div class="w-auto bg-sky-950 h-min p-5 mt-10 ">
                        <h1 class="text-white text-5xl ">Comment ça s'écrit?</h1>
                    </div>
                    <div id="ecranMiniJeu" class="p-10 items-center justify-center text-center">

                    </div>
            
                    
                </div>
                
            </div>
        `
    }

    demarrerJeu() {
        this.initialiser()
        this.faireBarreAccueil()
        this.faireEcranJeu()
    }

    faireEcranJeu() {


        const ecranMiniJeu = document.getElementById("ecranMiniJeu");
        let listeInput = this.faireInput();   
        this.bonneLettre.length = 0
        
        let txt = ` <div class="flex gap-5 items-center justify-center" >
        <button id="audioBtn"><img class="w-[50px] h-[50px] bg-gray-50 p-2 rounded-md cursor-pointer border-2 border-gray-900" src="../../image/volume.jpg" alt="" srcset=""></button>
        <audio id="audio" src="../../audio/${this.motChoisi}.mp3"></audio>
        <img class="w-[250px] h-[250px] mr-[50px]" src="../../image/${this.motChoisi}.jpg" alt="" srcset="">
        </div>            
        `;
        
        txt += `${listeInput}`;        
        txt += `<button id="validerBtn" class="mt-5 pl-10 pr-10 p-2 bg-gray-900 text-white text-xl border border-sky-500 rounded-full">Confirmer</button>`;
        ecranMiniJeu.innerHTML = txt

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
                    ecranMiniJeu.innerHTML = `
                    <div class="flex gap-5 items-center justify-center bg-white">
                        <img class="w-[100px] h-[100px]" src="../../image/ballongauche.png" alt="ballon" srcset="">
                        <h1>BRAVO!!!</h1>
                        <img class="w-[100px] h-[100px]" src="../../image/ballondroite.png" alt="ballon" srcset="">
                    </div>`;
                    
                    
                    
                    //passer au mot suivant lorsque bonne réponse
                    setTimeout(() => {
                        let positionASupprimer = this.positionMots.indexOf(this.num);
                        this.positionMots.splice(positionASupprimer, 1)
                        if (this.positionMots.length === 0) {
                            // Si tous les mots ont été répondus
                                ecranMiniJeu.innerHTML = `
                                    <div class="flex gap-5 items-center justify-center bg-white">
                                        <img class="w-[100px] h-[100px]" src="../../image/oups.png" alt="oups" srcset="">
                                        <h1>Bravo! Tu as tout réussi</h1>
                                        <img class="w-[100px] h-[100px]" src="../../image/oups.png" alt="oups" srcset="">
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
                    ecranMiniJeu.innerHTML = `
                    <div class="flex gap-5 items-center justify-center bg-white">
                        <img class="w-[100px] h-[100px]" src="../../image/oups.png" alt="essaie encore" srcset="">
                        <h1>Essaie encore</h1>
                        <img class="w-[100px] h-[100px]" src="../../image/oups.png" alt="essaie encore
                        " srcset="">
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
