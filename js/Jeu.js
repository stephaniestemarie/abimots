"use strict";

class Jeu {

    listeMots = new Map([
        [1, "soleil"],
        [2, "auto"],
        [3, "automne"],
        [4, "autobus"],
        [5, "ballon"],
        [6, "serpent"]
    ]);
    quantiteMots = this.listeMots.size;
    num = this.choisirNumero()
    motChoisi = this.choisirMot();
    ecranJeu = document.getElementById("ecranJeu");   

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

    
    faireInput() {

        let inputsBox = `<div class=" w-full h-1/4 p-5 flex justify-center items-center gap-5">`;
        
    
        for (let i = 0; i < this.motChoisi.length ; i++) {
            inputsBox += `  <div class=" h-16 w-16 bg-sky-950"> <input id="input" class="h-full w-full text-4xl text-center" type="text" maxlength="1"></div>`
        }
    
        inputsBox += "</div>`"

       
    
        return inputsBox
    }

    faireEcranJeu() {
           

        let listeInput = this.faireInput(this.motChoisi);   

        
        this.ecranJeu.innerHTML = ` <div class="flex gap-5 items-center justify-center" >
        <button id="audioBtn"><img class="w-[50px] h-[50px] bg-gray-50 p-2 rounded-md cursor-pointer border-2 border-gray-900" src="./image/volume.jpg" alt="" srcset=""></button>
        <audio id="audio" src="./audio/${this.motChoisi}.mp3"></audio>
        <img class="w-[250px] h-[250px] mr-[50px]" src="./image/${this.motChoisi}.jpg" alt="" srcset="">
        </div>            
        `;
        
        this.ecranJeu.innerHTML += `${listeInput}`;        
        this.ecranJeu.innerHTML += `<button id="validerBtn" class="mt-5 pl-10 pr-10 p-2 bg-gray-900 text-white text-xl border border-sky-500 rounded-full">Confirmer</button>`;
        
        document.querySelector("#audioBtn").addEventListener("click", () =>{
            let son = document.getElementById("audio");
            son.play()
        })

        document.querySelector("#validerBtn").addEventListener("click", () =>{

            let inputsArray = [];
    
            document.querySelectorAll("#input").forEach(item => {
                inputsArray.push(item.value)


                
            });

            console.log(inputsArray);

            for (let i = 0; i < this.motChoisi.length ; i++) {

                if (this.motChoisi[i] === inputsArray[i] && i == this.motChoisi.length - 1) {
                    this.ecranJeu.innerHTML = "BRAVO";
                    setTimeout(() => {
                        this.num = this.choisirNumero()
                        this.motChoisi = this.choisirMot()
                        this.faireEcranJeu()
                    }, 2000);
                    
                    

                } else if (this.motChoisi[i] === inputsArray[i]) {
                    console.log("oui")
                }else {
                    
                    this.ecranJeu.innerHTML = "Non";
                    setTimeout(() => {
                        this.faireEcranJeu()
                    }, 2000);
                    break
                }
            }

        })

    }
                
 
}
