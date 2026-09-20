


async function chargerJeu() {
   const Abimot = new Vocabulaire(2);
   await Abimot.chargerListeMots()
   Abimot.faireEcranJeu() 
}

