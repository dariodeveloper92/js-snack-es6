//Snack 1-------------------------------------------------------------------------------------------------------------------------------------
console.log('Snack 1 - bici con il peso minore');

//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bici = [ //Array di oggetti
{    nome : 'Carlo' ,  peso : 20 },
{    nome : 'Luca' ,   peso : 30 },
{    nome : 'Marco' ,  peso : 50 },
];

console.log(bici); // Stampo Array bici

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const [pesoOne, pesoTwo, pesoThree] = bici;
//console.log(pesoOne, pesoTwo, pesoThree); //Destructuring

for(let i = 0; i < bici.length; i++) {
   // console.log(pesoOne, pesoTwo, pesoThree);
       
    if(bici[i].peso < bici[0].peso) { //Imposto la condizione: trova il peso minore all'interno dell'Array bici 
        bici[0] = bici[i];
    }
}

console.log(bici[0]);//Stampa bici leggera

//BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera



//Snack 2-------------------------------------------------------------------------------------------------------------------------------------
console.log(' Snack 2 - Squadra Random ');
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadre = [
    { nome: 'milan',    puntiFatti : 0, falliSubiti : 0},
    { nome: 'palermo',  puntiFatti : 0, falliSubiti : 0},
    { nome: 'cagliari', puntiFatti : 0, falliSubiti : 0},
    { nome: 'napoli',   puntiFatti : 0, falliSubiti : 0},

];

//console.log(squadre);
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

let punti = squadre.length; //Numero random nei punti fatti
let falli = squadre.length; //Numero random nei falli subiti

for(let i = 0; i < squadre.length; i++) {   //Ciclo for per tutti gli oggetti all'interno dell'Array squadre
    squadre[i].puntiFatti = (Math.floor(Math.random() * 100) + 1);  //Numero random nei puntiFatti
    squadre[i].falliSubiti = (Math.floor(Math.random() * 100) + 1); //Numero random nei falliSubiti
}

console.log(squadre); //stampo a schermo "punti fatti" e " falli subiti" 

//Snack 2-------------------------------------------------------------------------------------------------------------------------------------
console.log(' Snack 2 - Squadra Destrutturata ');
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const squadreNew = [
    { nome: 'milan',    falliSubiti : 0},
    { nome: 'palermo',  falliSubiti : 0},
    { nome: 'cagliari', falliSubiti : 0},
    { nome: 'napoli',   falliSubiti : 0},
];

let falliNew = squadreNew.length; //Numero random nei falli subiti

for(let i = 0; i < squadreNew.length; i++) {   //Ciclo for per tutti gli oggetti all'interno dell'Array squadreNew
    squadreNew[i].falliSubiti = (Math.floor(Math.random() * 100) + 1); //Numero random nei falliSubiti
}

const [nomeOne, nomeTwo, nomeThree, nomeFour] = squadreNew;
console.log(nomeOne, nomeTwo, nomeThree, nomeFour); //stampo a schermo "nomi" e " falli subiti" 