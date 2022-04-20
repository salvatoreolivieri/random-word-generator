
// function pariDispari(number) {

//   if (number % 2) {
//     result = "dispari";
//   } else{
//     result = "pari";
//   }

//   return result;
// }

// console.log(pariDispari(4));

// const tipologiaNumero = pariDispari(5);

// document.querySelector("h1").innerHTML = `${tipologiaNumero}`


// Il programma stampa una frase di x parole. Ogni parola è composta da un minimo di 1 e un massimo di 10 lettere casuali

/* Cosa ci serve:
  1. Array con lettere
  2. Funzione che genera numeri random
  3. Funzione che genera le parole
  4. Funzione che genera la frase
*/

console.log(getRandomWord());
console.log(getRandomPhrase(5));

// 2. Funzione che genera numeri random
function getRandomNumber(max, min) {

  return Math.floor(Math.random() * (max - min) ) + min;

}


// 3. Funzione che genera le parole

function getRandomWord() {

  // 1. Array con lettere
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  let word = ""; //La variabile che conterrà la parola

  // Qui generiamo una parola
  const wordLength = getRandomNumber(10,1); //La lunghezza della parola da generare

  for (let x = 0; x < wordLength; x++) {
    word += letters[getRandomNumber(letters.length - 1, 0)]
  }

  return word;
}




// 4. Funzione che genera la frase

function getRandomPhrase(phraseLength) {

  let phrase = "";

  for (let z = 0; z < phraseLength; z++) {
    phrase += getRandomWord() + " ";
  }

  return phrase;
}


// document.querySelector("h1").innerHTML = ``