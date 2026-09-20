const App = new Application();




async function chargerJeu(semaine) {
   const Abimot = new Abimots(semaine);
   await Abimot.chargerListeMots()
   Abimot.faireEcranJeu() 
   
}

