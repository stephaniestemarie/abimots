

class Application {

 
    constructor() {
        this.annee = 0;
        this.semaine = 0;
        this.jeu = "";
        this.listeJeux = [];
        this.score = new Map();
        this.ecranJeu = document.getElementById("accueil");
        this.database = [];
    }


    //set
    // set annee(value) {
    //     this.annee = value;
    // }

    // set matiere(value) {
    //     this.annee = value;
    // }

    //  set jeu(value) {
    //     this.jeu = value;
    // }

    //  set semaine(value) {
    //     this.semaine = value;
    // }

    //get
    // get annee() {
    //     return this.annee;
    // }

    // get matiere() {
    //     return this.matiere;
    // }

    //  get jeu() {
    //     return this.jeu;
    // }

    //  get semaine() {
    //     return this.semaine;
    // }


    // **************************************  FONCTIONS *************************************************

    // Faire écran d'accueil
    faireEcranAccueil() {
        console.log(`je suis dans faireEcranAccueil`)
        this.ecranJeu.innerHTML = `
            <div class="grid h-screen grid-cols-3 grid-rows-3 gap-5 p-4">

                <a class=" col-span-3 bg-red-500 flex items-center justify-center">
                <h1 class="text-center text-3xl font-bold">La fabrique à génie</h1>
                </a>

                <a class="boutonAnnee bg-yellow-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110"  id="1" >
                <h2 class="text-center text-xl ">1ère année </h2>
                </a>
                <a class="boutonAnnee bg-purple-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110"  id="2" >
                <h2 class="text-center text-xl ">2ème année  </h2>
                </a>
                <a class="boutonAnnee bg-pink-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110"  id="3"  >
                <h2 class="text-center text-xl ">3ème année  </h2>
                </a>

                <a class="boutonAnnee bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110"  id="4"  >
                <h2 class="text-center text-xl">4ème année</h2>
                </a>
                <a class="boutonAnnee bg-cyan-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110"  id="5"  >
                <h2 class="text-center text-xl ">5ème année  </h2>
                </a>
                <a class="boutonAnnee bg-lime-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110"  id="6"  >
                <h2 class="text-center text-xl ">6ème année </h2>
                </a>

            </div>
        `

       this.attribuerAnnee()

    }

    //Faire écran semaine
    faireEcranSemaine() {
        console.log(`Faire Écran semaine`)

        let txt =`
            <div class="grid h-[25dvh] grid-cols-6 grid-rows-1 p-4">

                <div class="col-span-5 bg-red-500 flex items-center justify-center">
                <h1 class="text-center text-3xl font-bold">Semaine</h1>
                </div>

                <a class="col-span-1 bg-gray-900 p-5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110" href="../../index.html">
                <h1 class="text-white text-center text-3xl font-bold">Retour</h1>
                </a>
            
            </div>
            
            <div class="grid h-screen grid-cols-6 grid-rows-4 gap-5 p-4">  

        `
        this.database.forEach((semaine, index) => {

            txt += `
                <a
                    class="bg-gray-400 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                    hover:brightness-110  boutonSemaine"  id="${index + 1}"
                >
                    <h2 class="text-center text-xl">
                        Semaine ${index + 1}
                    </h2>
                </a>
            `;

        });

        txt += `</div>`

        this.ecranJeu.innerHTML = txt

        this.attribuerSemaine()

    }

    // Faire écran jeu
    faireEcranJeux() {
        console.log(`Faire Écran Jeux`)
        this.ecranJeu.innerHTML = ``

        let txt =`
           <div class="grid h-[25dvh] grid-cols-6 grid-rows-1 p-4">

                <div class="col-span-5 bg-red-500 flex items-center justify-center">
                <h1 class="text-center text-3xl font-bold">Choisi ton jeu</h1>
                </div>

                <a class="col-span-1 bg-gray-900 p-5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110" href="../../index.html">
                <h1 class="text-white text-center text-3xl font-bold">Retour</h1>
                </a>
            
            </div>
            
            <div class="grid h-screen grid-cols-3 grid-rows-3 gap-5 p-4">  
        `
        this.listeJeux.forEach((jeu) => {

            txt += `
             <a class="bg-gray-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
            hover:brightness-110 boutonJeu"  id="${jeu}">
                 <h2 class="text-center text-xl ">${jeu}</h2>
            </a>
            `;

            

        });

        txt += `</div>`

        this.ecranJeu.innerHTML = txt

        this.attribuerJeu()

    }



    //Télécharger la bonne database en fonction de l'année choisi
    attribuerAnnee() {

        const boutonAnnee = document.querySelectorAll(".boutonAnnee");

        boutonAnnee.forEach((boutonA) => {

            boutonA.addEventListener("click", async (event) => {

                const id = event.currentTarget.id;
                this.annee = id;
                console.log(this.annee);

                switch (Number(this.annee)) {

                    case 1:
                        const dbPremiere = await fetch("./../database/dbPremiere.json");
                        const objetPremiere = await dbPremiere.json();
                        this.database = objetPremiere;
                        console.log(this.database)
                        break;

                    case 2:
                        const dbDeuxieme = await fetch("./../database/dbDeuxieme.json");
                        const objeteuxieme = await dbDeuxieme.json();
                        this.database = objeteuxieme;
                        console.log(this.database)
                        break;

                    case 3:
                        const dbTroisieme = await fetch("./../database/dbTroisieme.json");
                        const objetTroisieme = await dbTroisieme.json();
                        this.database = objetTroisieme;
                        console.log(this.database)
                        break;

                    case 4:
                        const dbQuatrieme = await fetch("./../database/dbQuatrieme.json");
                        const objetQuatrieme = await dbQuatrieme.json();
                        this.database = objetQuatrieme;
                        console.log(this.database)

                        break;

                    case 5:
                        const dbCinquieme = await fetch("./../database/dbCinquieme.json");
                        const objetCinquieme = await dbCinquieme.json();
                        this.database = objetCinquieme;
                        console.log(this.database)
                        break;

                    case 6:
                        const dbSixieme = await fetch("./../database/dbSixieme.json");
                        const objetSixieme = await dbSixieme.json();
                        this.database = objetSixieme;
                        console.log(this.database)
                        break;

                    default:
                        console.log("Choix inconnu");
                }

                this.faireEcranSemaine()

             
            });

        });

    }


    //Choisir la semaine
    attribuerSemaine() {
        console.log(`AttribuerSemaine`)

        const boutonSemaine = document.querySelectorAll(".boutonSemaine");

        boutonSemaine.forEach((boutonSem) => {

            boutonSem.addEventListener("click", async (event) => {

                const id = event.currentTarget.id;
                this.semaine = id;
                console.log(this.semaine);

                const semaineChoisie = this.database.find(
                    element => element.semaineId == this.semaine
                );

                this.listeJeux = semaineChoisie.listeJeux
                console.log(this.listeJeux);

                this.faireEcranJeux()
             
            });

        });

    }

    attribuerJeu() {
        console.log(`Attribuer le jeu`)

        const boutonJeux = document.querySelectorAll(".boutonJeu");

        boutonJeux.forEach((boutonJ) => {

            boutonJ.addEventListener("click", async (event) => {

                this.jeu = event.currentTarget.id;
                console.log(this.jeu);

                
                this.demarerJeu()

             
            });

        });

    }

    demarerJeu() {
        console.log(`Démarrer le jeu`)

        switch (this.jeu) {

                    case "Abimot":
                        window.location.href = "./jeux/vocabulaire.html";
                        break;

                    case "ZachaLire":
                        console.log("Je démarre ZachaLire")
                        break;

                    case "LéléMath":                       
                        console.log("Je démarre LéléMath")
                        break;                    

                    default:
                        console.log("Erreur fonction demarerJeu");
                }


    }

    
    // faire jeu Abimots 
    // async chargerAbimots(semaine) {
    //     const Abimot = new Abimots(semaine);
    //     await Abimot.chargerListeMots()
    //     Abimot.faireEcranJeu() 
        
    // }


}