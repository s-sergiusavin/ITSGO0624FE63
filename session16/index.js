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

/**
 * Boolean
 */

let lightsOn = false;
lightsOn = true;

/**
 * Undefine vs null
 */

let dogName;
dogName = null;

/**
 * Array
 * (liste)
 */
const random = [1, "doi", null, true, "false", [3, "patru"]];
console.log(random);
console.log(random.length);
console.log(random[0]);
console.log(random[4]);
console.log(random[random.length - 1][1]);

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", 4];

console.log(daysOfWeek);
console.log(daysOfWeek.length);
const index = daysOfWeek.length;
console.log(daysOfWeek[index - 1]);

daysOfWeek[3] = "Thursday";
console.log(daysOfWeek);

/**
 * Objects
 */

const person = {
  fullName: "Pentek Attila",
  age: 25,
  lovesSumer: true,
  address: {
    city: "Timisoara",
    zip: "500550",
  },
  residencePermit: false,
  "residence-permit": true,
  hobbies: ["sky", "travel"],
};

// Erori pentru redeclarare

// person = {
//   fullName: "Tom Cruise" // !!! Error assignment to constant variable
// };

// let person = {
//   fullName: "Pentek Attila",
// };

console.log(person.fullName);
console.log(person.age);
console.log(person.address.city);
console.log(person.hobbies[1]);
console.log(person["residencePermit"]);
console.log(person["residence-permit"]);
console.log(person);

const travelPlan = {
  firstTrip: {
    firstLocation: {
      name: "Asia",
      user: "Pentek Attila",
      countries: ["India", "China"],
      papers: {
        hasPassport: true,
        visa: true,
        currency: "$",
      },
    },
    secondLocation: {
      name: "Europe",
      user: "Pentek Attila",
      countries: ["France", "Italy"],
    },
  },
  secondTrip: {},
};

console.log(travelPlan.firstTrip.firstLocation.papers.currency);

/**
 * Functions
 */

function logSomething() {
  console.log("Functia logSomething() a fost invocata/apelata (called)");
}

console.log(console);

logSomething();
logSomething();
