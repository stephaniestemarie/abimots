"use strict";

class Application {

    annee;
    semaine;
    jeux;
    score;



    constructor() {
    }


    //set
    set annee(value) {
        this.annee = value;
    }

    set matiere(value) {
        this.annee = value;
    }

     set jeu(value) {
        this.jeu = value;
    }

     set semaine(value) {
        this.semaine = value;
    }

    //get
    get annee() {
        return this.annee;
    }

    get matiere() {
        return this.matiere;
    }

     get jeu() {
        return this.jeu;
    }

     get semaine() {
        return this.semaine;
    }


    // **************************************  FONCTIONS *************************************************

    // Faire écran d'accueil
    


    // faire jeu Abimots 
    async chargerAbimots(semaine) {
        const Abimot = new Abimots(semaine);
        await Abimot.chargerListeMots()
        Abimot.faireEcranJeu() 
        
    }


}