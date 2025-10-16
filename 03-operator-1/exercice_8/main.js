const salaireMensuel = 500;
const loyer = salaireMensuel * 0.3;
let nourriture = salaireMensuel * 0.2;
let autresDepenses = 50;
autresDepenses += 25;
let transport = salaireMensuel * 0.1;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;
let loisirs = salaireMensuel * 0.15;
let totalDepensesAvecLoisirs = loyer + nourriture + transport + autresDepenses + loisirs;
let resteAvecLoisirs = salaireMensuel - totalDepensesAvecLoisirs;

let pourcentageLoyer =  loyer / salaireMensuel * 100;
console.log("le pourcentage du loyer est de : " + pourcentageLoyer + "%");
let pourcentageNourriture = nourriture / salaireMensuel * 100;
console.log("le pourcentsge de la nourriture est de : " + pourcentageNourriture + "%");
let pourcentageTransport = transport / salaireMensuel * 100;
console.log("le pourcentage du transport est de : " + pourcentageTransport + "%");
let pourcentageLoisirs = loisirs / salaireMensuel * 100;
console.log("le pourcentage du loisir est de : " + pourcentageLoisirs + "%")
let pourcentageAutresDepenses = autresDepenses / salaireMensuel * 100;
console.log("le pourcentage pour autres depenses est de : " + pourcentageAutresDepenses + "%");

if(reste >= 100){
  console.log("Budget bien géré");
}else{
  console.log("Attention, budget serré");
}

//Augentation de 10%
let augmentation = salaireMensuel * 0.1;
let nouveauSalaire = augmentation + salaireMensuel;
let nouveauLoyer = nouveauSalaire * 0.3;
let nouvelleNourriture = nouveauSalaire * 0.2;
let nouvelleAutresDepenses = 75;
let nouveauTransport = nouveauSalaire * 0.1;
let nouveauxLoisirs = nouveauSalaire * 0.15;
let nouveauTotalDepenses = nouveauLoyer + nouvelleNourriture + nouveauTransport + nouveauxLoisirs + nouvelleAutresDepenses;
let nouveauReste = nouveauSalaire - nouveauTotalDepenses;

if(nouveauTotalDepenses > nouveauSalaire * 0.9){
  console.log("Dépenses trop élevées, réduisez vos charges");
}
module.exports = { salaireMensuel, loyer, totalDepenses, nourriture, transport, autresDepenses, reste, augmentation, nouveauSalaire, nouveauTotalDepenses, nouveauReste };


