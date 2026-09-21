

class Application {

    // annee = 0;
    // semaine = 0;
    // jeux = [];
    // score = new Map()
    


    constructor() {

    }


    // //set
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

    // //get
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
        let ecranJeu = document.getElementById("accueil"); 
        ecranJeu.innerHTML = `
            <div class="grid h-screen grid-cols-3 grid-rows-3 gap-5 p-4">

                <a class="col-span-3 bg-red-500 flex items-center justify-center">
                <h1 class="text-center text-3xl font-bold">La fabrique à génie</h1>
                </a>

                <a class="bg-yellow-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110" href="./page/jeux/semaine.html" annee="1">
                <h2 class="text-center text-xl ">1ère année </h2>
                </a>
                <a class="bg-purple-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110" href="./page/jeux/semaine.html" annee="2">
                <h2 class="text-center text-xl ">2ème année  </h2>
                </a>
                <a class="bg-pink-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110" href="./page/jeux/semaine.html" annee="3">
                <h2 class="text-center text-xl ">3ème année  </h2>
                </a>

                <a class="bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110" href="./page/jeux/semaine.html" annee="4">
                <h2 class="text-center text-xl">4ème année</h2>
                </a>
                <a class="bg-cyan-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110" href="./page/jeux/semaine.html" annee="5">
                <h2 class="text-center text-xl ">5ème année  </h2>
                </a>
                <a class="bg-lime-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:brightness-110" href="./page/jeux/semaine.html" annee="6">
                <h2 class="text-center text-xl ">6ème année  </h2>
                </a>

            </div>
        `
    }

    // faire jeu Abimots 
    // async chargerAbimots(semaine) {
    //     const Abimot = new Abimots(semaine);
    //     await Abimot.chargerListeMots()
    //     Abimot.faireEcranJeu() 
        
    // }


}