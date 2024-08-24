console.log("test");

logSomething();

/**
 * Numbers
 */
// console.log(myNumber); // Eroare
const myNumber = 5;
const secondNumber = 2;
let result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber * secondNumber;
result = myNumber / secondNumber;
result = myNumber % secondNumber;

/**
 * String
 * siruri de carcatere
 */

let myString = "O'heary";
myString = "O'heary";
// Template literals
// In template literals cu sintaxa ${} executam in interiorul stringului cod savascript

myString = `Rezultatul este ${result}`;
myString = `Adunate 2 + 2 + 1 fac ${2 + 2 + result}`;

console.log(myString);

const name = "Savin";
const firstName = "Sergiu";

console.log(name + " " + firstName);

const antotherNumber = 5;
const anotherStringNumber = "1a";

result = antotherNumber + anotherStringNumber;
result = antotherNumber - anotherStringNumber;

console.log(result);

/**
 * Boolean
 */

let lightsOn = false;

/**
 * Array
 * (liste)
 * (vectori)
 */

const myArray = [5, "4", true, null, [5.3, 1], { name: "Sergiu" }];
console.log(myArray[0]);
// myNumber = 7; // applications breaks, nu se mai executa codul
console.log(myArray[11]); // undefined
console.log(myArray[4][0]);
console.log(myArray[5].name);

/**
 * Objects
 */

const myObj = {
  burger: "Big Tasty",
  juice: "Cola zero",
  "french-fries": "Big Size",
  address: {
    street: "Street",
    number: 1,
  },
  sauce: ["Ketchup", "Mayo"],
};

console.log(myObj.burger);
console.log(myObj.address.street);
console.log(myObj.address.street + " number " + myObj.address.number); // Street number 1

myObj.burger = "McChicken";
myObj.address.number = 5;
myObj.sauce[1] = "Mustard";

console.log(myObj.burger);
console.log(myObj.address.number);
console.log(myObj.sauce[1]);

// myObj = {} // Eroare

let marksOf10lei = 0;
// Expresiile de mai jos fac acelasi lucru

marksOf10lei = marksOf10lei + 1;
marksOf10lei += 1;
marksOf10lei++;
marksOf10lei += 3;

console.log(marksOf10lei);

let total = 20;
marksOf10lei = marksOf10lei + 1;
marksOf10lei = marksOf10lei + 1;
// ...
marksOf10lei = marksOf10lei + 1;

/**
 * Loops (bucle)
 * Structuri iterative
 */

// while loop
while (marksOf10lei < total) {
  marksOf10lei += 1;
}

console.log(`Avem ${marksOf10lei} bancnote de 10 lei`);

let roomTemprature = 26;
const desiredTemperature = 23;
let isAcON = true;

//  while(roomTemprature > desiredTemperature) {
//     roomTemprature--;
//     // roomTemprature -= 1;
//     // roomTemprature = roomTemperature - 1;
//  }
isAcON = false;

// do while loop

//  do {
//     // action
//  } while ()

// for loop

// for (initializare ; conditie ; operatiune la finalul iteratiei) {}
// codul din interiorul parantezelor acolade va fi denumit bloc de executie

let marksOf5lei = 0;
let total5lei = 5;

let index = 7;

for (index = 0; index < total5lei; index++) {
  console.log(index);
  marksOf5lei++;
}

console.log(index, "index");

console.log(`Avem ${marksOf5lei} banconte de 5 lei`);

let countries = ["Romania", "Bulgaria", "Ucraina", "Ungaria", "Turcia"];

// console.log(countries[0]);
// console.log(countries[1]);
// console.log(countries[2]);
// console.log(countries[3]);
// console.log(countries[4]);

// for(let index = 0; index < countries.length; index++) {
//     console.log(countries[index]);
// }

for (let index = countries.length - 1; index >= 0; index--) {
  console.log(countries[index]);
}

// If/else -- conditional structures - blocks
// == verifica egalitatea a doua valori
// === verifica egalitatea si tipulvariabilelor

let val1 = 5;
let val2 = "5";

if (val1 === val2) {
  console.log("Variabile sunt egale");
} else {
  console.log("Variabile nu sunt egale");
}

// Truthy vs Falsy values
// Falsy: 0, '', false, undefined, null

if (val1 !== val2) {
  console.log("Variabilele nu sunt egale (sunt diferite)");
} else {
  console.log("Variabilele sunt egale ");
}

if (" ") {
  console.log("Valoarea din conditie este adevarata");
} else {
  console.log("Valoarea din conditie este falsa");
}

let temperature = 27;
let optimalTemperature = 21;
let maxTemperature = 35;

if (temperature > optimalTemperature) {
  if (temperature < maxTemperature) {
    console.log("Afara este superb");
  } else {
    console.log("Afara este mult prea cald");
  }
} else {
  console.log("Afara este frig si urat");
}

// Logical operators
// ! ==> not
// && - and (si) - daca cel putin o conditie este falsa, totul este fals aka trebuie sa fie toate conditiile adevarate
// || - or (sau) - daca cel putin o conditie este adevarata, totul este adevarat

if (temperature >= optimalTemperature && temperature < maxTemperature) {
  console.log("Afara este superb");
} else {
  console.log("Afara este urat");
}

let pizzaPrice = 47;
let hasGorgonola = true;

if (pizzaPrice <= 40 || (hasGorgonola && pizzaPrice < 50)) {
  console.log("Pizza isi merita banii");
} else {
  console.log("Pizza nu isi merita banii");
}

// Ternary operator - sunt 3 parti
// conditie ? valoarea de adevar : valoare in caz de fals

val1 = 5;
val2 = "5";

val1 === val2 ? console.log("Egale") : console.log("Diferite");

// Expresie identica cu operatorul ternar

if (val1 === val2) {
  console.log("Egale");
} else {
  console.log("Diferite");
}

/**
 * Functions
 */

// Function declaration: function keyword urmat de numele functiei, paranteze rotunde, paranteze acolade

function logSomething() {
  console.log("Functia logSomething() a fost apelata");
}

logSomething();
logSomething();

// Function expression: const + denumirea functiei + = function keyword () {}

// doSomething(); // Eroare
const doSomething = function () {
  console.log("Do something");
};

doSomething();

// Arrow function () => {}

const doArrowFunction = () => {
  console.log("Arrow function");
};

doArrowFunction();

// Functions with params
let number = 800; // variabila number nu se va confunda cu parametrul functiei de mai jos

function addToFive(number) {
    let result = 5 + number;
    console.log(`Rezultatul este ${result}`);
}

addToFive(3);
addToFive(10);
addToFive('5');

const substractFrom100 = (number) => {
    console.log(`Rezultatul este ${100 - number}`);
}

substractFrom100(20);
substractFrom100('Marcel'); // NaN - not a number, modul js-ului de a ne spune ca am facut o operatie
// matematica intre un numar si ceva care nu este numar
substractFrom100();
substractFrom100(5);

console.log(100 + '' + 3);
