//Snack 1--------------------------------------------------------------------------------------------
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Creare un array di oggetti: 
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
console.log('Snack 1');

const bici = [ //Array di oggetti
{    nome : 'Carlo' ,  peso : 20 },
{    nome : 'Luca' ,   peso : 30 },
{    nome : 'Marco' ,  peso : 50 },
];

console.log(bici);
/*
//Stampare a schermo la bici con peso minore.
let biciLeggera = bici[0];//Imposto bici[0] perchè fisso un paletto al primo oggetto dell'Array in modo da confrontarlo con ogni oggetto all'interno dell'Array


for(let i = 0; i < bici.length; i++) {
    //console.log(bici[i]); 
    
    if(bici[i].peso < biciLeggera.peso) { //Imposto la condizione: trova il peso minore all'interno dell'Array bici 
        biciLeggera = bici[i];
    }
}

console.log(biciLeggera);//Stampa bici leggera
*/
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
//destructuring e template literal
const [pesoOne, pesoTwo, pesoThree] = bici;
console.log(pesoOne, pesoTwo, pesoThree);

//BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera



//Snack 2--------------------------------------------------------------------------------------------
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.