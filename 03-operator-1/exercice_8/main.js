

const salaireMensuel = 500;
const loyer = salaireMensuel * 0.3;
let nourriture = salaireMensuel * 0.2;
let autresDepenses = 50;
autresDepenses += 25;
let transport = salaireMensuel * 0.1;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;
let loisirs = salaireMensuel * 0.15;
totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses

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

const augmentation = salaireMensuel * 0.1;
salaireMensuel = augmentation + salaireMensuel;
loyer = salaireMensuel * 0.3;
nourriture = salaireMensuel * 0.2;
autresDepenses = 75;
transport = salaireMensuel * 0.1;
loisirs = salaireMensuel * 0.15;
totalDepenses = loyer + nourriture + autresDepenses + transport + loisirs;
reste = salaireMensuel - totalDepenses;

if(totalDepenses > salaireMensuel * 0.9){
  console.log("Dépenses trop élevées, réduisez vos charges");
}



