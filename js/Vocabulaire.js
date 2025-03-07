"use strict";

class Vocabulaire {

    listeMots = new Map([
        [1, "soleil"],
        [2, "auto"],
        [3, "automne"],
        [4, "autobus"],
        [5, "ballon"],
        [6, "serpent"],
        [7, "ange"],
        [8, "dragon"],
        [9, "gentil"],
        [10, "gentille"],
        [11, "légume"],
        [12, "magie"],
        [13, "figure"],
        [14, "géant"],
        [15, "gauche"],
        [16, "courage"],
        [17, "grenouille"],
        [18, "danger"],
        [19, "dangereux"],
        [20, "vague"],
        [21, "garage"],
        [22, "grange"],
        [23, "gorge"],

    ]);
    quantiteMots = this.listeMots.size;
    num = this.choisirNumero()
    motChoisi = this.choisirMot();
    ecranJeu = document.getElementById("ecranJeu");   
    bonneLettre = [];

    constructor() {

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


    toString() {

        for (const element of this.listeMots) {
            console.log(element);
        }

    }

    choisirNumero(){
        let numero = Math.floor(Math.random() * this.quantiteMots) + 1;
        return numero
    }

    choisirMot() {       
        return this.listeMots.get(this.num);
    }

    autotab() {

        let current = this.getAttribute("id")
        console.log(current)
        // if (current.getAttribute && current.value.length==current.getAttribute("maxlength")) 
        // {
        //     to.focus() 
        // }
    }

    
    faireInput() {

        let inputsBox = `<div class=" w-full h-1/4 p-5 flex justify-center items-center gap-5">`;
        
    
        for (let i = 0; i < this.motChoisi.length ; i++) {
            inputsBox += `  <div class=" h-16 w-16 bg-sky-950"> <input id="input${i}" data-position="${i}" class="input h-full w-full text-4xl text-center" type="text" maxlength="1"></div>`
        }
    
        inputsBox += "</div>`"

        
    
        return inputsBox
    }

    faireInput(listePosition) {

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
           
        console.log(this.motChoisi)

        let listeInput = this.faireInput(this.motChoisi);   

        
        this.ecranJeu.innerHTML = ` <div class="flex gap-5 items-center justify-center" >
        <button id="audioBtn"><img class="w-[50px] h-[50px] bg-gray-50 p-2 rounded-md cursor-pointer border-2 border-gray-900" src="./image/volume.jpg" alt="" srcset=""></button>
        <audio id="audio" src="./audio/${this.motChoisi}.mp3"></audio>
        <img class="w-[250px] h-[250px] mr-[50px]" src="./image/${this.motChoisi}.jpg" alt="" srcset="">
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
        

        document.querySelector("#audioBtn").addEventListener("click", () =>{
            let son = document.getElementById("audio");
            son.play()
        })

        document.querySelector("#validerBtn").addEventListener("click", () =>{

            let inputsArray = [];
    
            document.querySelectorAll(".input").forEach(item => {
                inputsArray.push(item.value)                
            });

            console.log(inputsArray);

            for (let i = 0; i < this.motChoisi.length ; i++) {

                if (this.motChoisi[i] === inputsArray[i] && i == this.motChoisi.length - 1) {
                    this.ecranJeu.innerHTML = `
                    <div class="flex gap-5 items-center justify-center bg-white">
                        <img class="w-[100px] h-[100px]" src="./image/ballongauche.png" alt="fillette qui écrit" srcset="">
                        <h1>BRAVO!!!</h1>
                        <img class="w-[100px] h-[100px]" src="./image/ballondroite.png" alt="fillette qui écrit" srcset="">
                    </div>`;
                    setTimeout(() => {
                        this.num = this.choisirNumero()
                        this.motChoisi = this.choisirMot()
                        this.bonneLettre.length = 0
                        this.faireEcranJeu()
                    }, 2000);
                    
                    

                } else if (this.motChoisi[i] === inputsArray[i]) {
                    console.log("oui")
                    this.bonneLettre.push(i);
                }else {
                    
                    this.ecranJeu.innerHTML = `
                    <div class="flex gap-5 items-center justify-center bg-white">
                        <img class="w-[100px] h-[100px]" src="./image/oups.png" alt="fillette qui écrit" srcset="">
                        <h1>Essaie encore</h1>
                        <img class="w-[100px] h-[100px]" src="./image/oups.png" alt="fillette qui écrit" srcset="">
                    </div>`;
                    setTimeout(() => {
                        this.faireEcranJeu(this.bonneLettre)
                    }, 2000);
                    break
                }
            }

        })

    }
                
 
}
