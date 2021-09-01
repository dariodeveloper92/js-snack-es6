//Snack 1-------------------------------------------------------------------------------------------------------------------------------------
console.log('Snack 1 - bici con il peso minore');

//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bici = [ //Array di oggetti
{    nome : 'Carlo' ,  peso : 20 },
{    nome : 'Luca' ,   peso : 30 },
{    nome : 'Marco' ,  peso : 50 },
];

console.log(bici); // Stampo Array bici


let biciLeggera = bici[0]; //variabile d'appoggio

for(let i = 0; i < bici.length; i++) {
   // console.log(pesoOne, pesoTwo, pesoThree);
       
    if(bici[i].peso < biciLeggera.peso) { //Imposto la condizione: trova il peso minore all'interno dell'Array bici 
        biciLeggera = bici[i];
    }
}

console.log(biciLeggera);//Stampa bici leggera

//Stampare utilizzando destructuring e template literal
const { peso, nome } = biciLeggera; //destructuring in maniera generica con gli Oggetti

console.log(peso, nome);

//Per stamparlo in HTML + template literal
document.getElementById('container').innerHTML =
`               
<ul>                        
    <li>Nome: ${nome}</li>
    <li>Peso: ${peso}</li>
<ul>
`
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
//Metodo Generico
const squadreNew = [];

for(let i = 0; i < squadre.length; i++) {  
    
    const { nome, falliSubiti} = squadre[i];
    squadreNew.push(nome, falliSubiti); 
}

console.log(squadreNew);

//Snack 3-------------------------------------------------------------------------------------------------------------------------------------
console.log(' Snack 3 ');
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
let a = prompt('Inserisci un numero tra 1 e 5');
let b = prompt('Inserisci un numero tra 6 e 10');
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo FILTER:
//Arrow Functions - senza valore di return
const myFunction = (array, a, b) => { 
    console.log(array, a, b);

    const arrayNew = array.filter((numero, index, arr) => {     //numero = elemento/ index = indice/ arr = array
    if (numero < b && numero > a ) {                            //se il 'numero > a' e 'numero < b'
            return true;
        }
        return false;
    });

    return arrayNew; //Richiamo Array new

} ;
//const resultFuction = myFunction();

myFunction(array, a, b);

let arrayFinale = myFunction(array, a, b); //Variabile di appoggio

console.log(arrayFinale); //Stampo a schermo la Variabile di appoggio
