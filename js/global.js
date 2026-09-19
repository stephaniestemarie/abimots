


async function chargerJeu() {
   const Abimot = new Vocabulaire(0);
   await Abimot.chargerListeMots()
   Abimot.faireEcranJeu() 
}

