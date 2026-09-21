const App = new Application();


async function rediriger(){

   

}



async function chargerAbimots(semaine) {
   const Abimot = new Abimots(semaine);
   await Abimot.chargerListeMots()
   Abimot.faireEcranJeu() 
   
}

