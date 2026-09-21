
function demarrerApp() {

   console.log(`je suis dans demarrer app`)
   const App = new Application();
   App.faireEcranAccueil();  

}


// async function rediriger(){



// }



async function chargerAbimots(semaine) {
   const Abimot = new Abimots(semaine);
   await Abimot.chargerListeMots()
   Abimot.faireEcranJeu() 
   
}

