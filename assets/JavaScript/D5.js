/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let index = 0; index < pets.length; index++) {
  console.log("Esercizio 1:", pets[index]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

console.log("Esercizio 2:", pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const reversed = pets.reverse();

console.log("esercizio 3:", reversed);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let first = pets.shift();
let last = pets.pop();

pets.push(first);
pets.unshift(last);

console.log("Esercizio 4:", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let index = 0; index < cars.length; index++) {
  cars[index].licensePlate = "B+B1";
}

console.log("Esercizio 5:", cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newcar = {
  brand: "Ford",
  model: "Kuga",
  color: "grey",
  trims: ["titanium", "st-linex", "sport"],
  licensePlate: "B+B1",
};

cars.push(newcar);

for (let index = 0; index < cars.length; index++) {
  cars[index].trims.pop();
}

console.log("Esercizio 6:", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let index = 0; index < cars.length; index++) {
  justTrims.push(cars[index].trims[0]);
}

console.log("Esercizio 7:", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let index = 0; index < cars.length; index++) {
  if (cars[index].color.charAt(0) === "b") {
    console.log("Esercizio 8: FIZZ");
  } else {
    console.log("Esercizio 8: BUZZ");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let ciclo = 0;

while (ciclo < numericArray.length) {
  console.log("Esercizio 9:", numericArray[ciclo]);
  if (numericArray[ciclo] === 32) break;
  ciclo++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const ordineNumerico = [];
let aggiungi = 0;

for (let index = 0; index < charactersArray.length; index++) {
  switch (charactersArray[index]) {
    case "g":
      aggiungi = 7;
      break;
    case "n":
      aggiungi = 11;
      break;
    case "u":
      aggiungi = 19;
      break;
    case "z":
      aggiungi = 21;
      break;
    case "d":
      aggiungi = 4;
      break;
  }
  ordineNumerico.push(aggiungi);
}

console.log("Esercizio 10:", ordineNumerico);
