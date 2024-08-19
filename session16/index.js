console.log("sergiu");
// Aceasta este o linie cu cod comentat

/**
 * Multi line comment
 * care nu va fi luat in considerare
 *
 * asdfasdf
 * sadfasdf
 *
 * sdafsfad
 */

/**
 * Data types
 */

// Primitives (primitive): number, string, boolean, undefined, null, symbol, bigInt
// Refereces (referinta): objects: array, functions

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
 * String
 * (siruri de caractere)
 */

const fullName = "Sergiu Savin";
const address = "Brasov, Romania";
const zip = `500500`; // backticks

// fullName = "Bradd Pitt";

const age = 30;

const message =
  "Salut \n" + fullName + " cu varsta de " + age + "Bine ai venit la curs!";

const anotherMessage = `Salut,
 ${fullName}, cu varsta de ${age + 3} de ani.
 Cum ti s-a parut cursul pana acum?`;

console.log(message);
console.log(anotherMessage);

/**
 * Boolean
 */

let lightsOn = false;
lightsOn = true;

/**
 * Undefined vs null
 */

let dogName;
dogName = null;

console.log(dogName);

/**
 * Array
 * (liste)
 */

const random = [1, "doi", null, true, "false", [3, "patru"]];
console.log(random);
console.log(random.length);
console.log(random[0]);
console.log(random[4]);
console.log(random[5]);
console.log(random[5][1]);
console.log(random[random.length - 1][1]);

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", 4];

console.log(daysOfWeek);
console.log(daysOfWeek.length);
const index = daysOfWeek.length;
console.log(daysOfWeek[index - 1]);

daysOfWeek[3] = "Thursday";

// daysOfWeek = ['Friday']; // assignment to constant variable error, am schimbat referinta

console.log(daysOfWeek);

/**
 * Objects
 */

const person = {
  fullName: "Sergiu Savin",
  age: 25,
  lovesSummer: true,
  address: {
    city: "Brasov",
    zip: "500500",
  },
  residencePermit: false,
  "residence-permit": true,
  hobbies: ["sky", "travel"],
};

// !!! Erori pt redeclarare

// person = {
//     fullName: 'Sergiu Savin' // !!! Error, assignment to constant variable
// }

// let person = {
//     fullName: 'Sergiu Savin'
// }

// let oneNumber;

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
      user: "Sergiu Savin",
      countries: ["India", "China"],
      papers: {
        hasPassport: true,
        visa: true,
        currency: '$'
      }
    },
    secondLocation: {
      name: "Europe",
      user: "Sergiu Savin",
      countries: ["France", "Italy"],
    },
  },
  secondTrip: {},
};

console.log(travelPlan.firstTrip.firstLocation.papers.currency)

/**
 * Functions
 */

function logSomething() {
    console.log('Functia logSomething() a fost invocata/apelata (called)');
}

console.log(console)

logSomething();
logSomething();
