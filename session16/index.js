console.log("Attila");

// Aceasta este o linie cu cod comentat

/**
 * Multi line comment
 * care nu va fi luat in considerare
 *
 * sdfsdf
 * sdfsd
 *
 * fsdfsdf
 */

/**
 * Data types
 */

// Primitives (primitive): number, string, boolean, undefined, null, symbol, bigInt
// References (referinta): object: array, functions

/**
 * Variable declaration types
 *
 * var - nu se mai foloseste
 * let - variabile dinamice, li se pot schimba valoarea
 * const - variabile statice, nu li se pot schimba valoarea
 */

/**
 * Number
 */

const oneNumber = 11;
const anotherNumber = 5;
let total;

console.log(oneNumber);
console.log(anotherNumber);
console.log(total);

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber % anotherNumber; // modulo operator => restul impartirii 11 = 2 * 5 + 1
total = oneNumber ** anotherNumber; // ridicare la putere

console.log(total);

/**
 * string
 * (siruri de caractere)
 */

const fullName = "Attila Pentek";
const address = "Timisoara, Romania";
const zip = `500395`;

const age = 30;

const message =
  "Salut \n" + fullName + " cu varsta de " + age + " Bine ai venit la curs!";

const anotherMessage = `Salut,
${fullName}, cu varsta de ${age} de ani.
Cum ti s-a parut cursul pana acum?`;

console.log(message);
console.log(anotherMessage);
