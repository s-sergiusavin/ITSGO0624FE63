const array = [1, 2, 3, "4", 5, 6, 7];
console.log(array.length);

// array[1] = 100;
// array[4] = 500;
// array[7] =

console.log(array);

array.push(8); //adaugam un element LA FINALUL ARRAYULUI
console.log(array);
array.pop(); // scoatem elementul de la FINALUL arrayului
console.log(array);

console.log(array.unshift("zero")); //adaugam un element la inceputul arrayului, returnareaza lenghtul
console.log(array.shift()); // returneaza elemntul scos
console.log(array);

// LIFO last in first out
// FIFO first in first out

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// array.forEach( function() {});
// array.forEach( () => {});

// array.forEach(iterateInArray);
// function iterateInArray(element) {
//   console.log('Element' + element);
// }

array.forEach(function (element) {
  console.log("E" + element);
});

// .map() methods => iterates trough an array and RETURNS this array

const newArray = array.map((element) => {
  return element + 1;
});

console.log(newArray);

/**
 * Returns the index of an array
 * .indexOf()
 */

console.log(`Indexul elementului 3 este ${array.indexOf(3)}`);

array[2] = 7;
console.log(array);
array[array.indexOf("4")] = 777;

console.log(array);
console.log(array.indexOf(-15)); // daca elementul nu exista va returna -1 intotdeauna

// copy array elements

let myNum = 7;
let anotherNum = myNum;
myNum = 5;

console.log(myNum);
console.log(anotherNum);

const arrayCopy = array;
array[0] = "zero";

console.log(array);
console.log(arrayCopy);

/**
 * .slice()
 * slice  method
 * copy portions of arrays
 */

let newArrayCopy = array.slice(2); //copiaza toate elementele incepand cu o pozitie specificata
console.log(array);
console.log(newArrayCopy);

newArrayCopy = array.slice(0, 5); //copiaza de la indexul specificat prin primul parametru pana la cel de al doilea (nu este inclus)
console.log(newArrayCopy);

/**
 * .splice()
 * Splice method
 * cut portions of an array
 */

console.log("---------------------------");
console.log(array);
// let changedArray = array.splice(2); //decupeaza toate elementele unui array incepand cu pozitia specificata
// console.log(array);
// console.log(changedArray);

let changedArray = array.splice(2, 3); // decupeaza toate elementele unui array incepand cu indexul initial si NUMARUL DE ELEMENTE
console.log(array);
console.log(changedArray);

/**
 * .filter()
 * Filtering array elements
 * Returneaza un NOU ARRAY cu elementele care indeplinesc o conditie
 * NU MODIFICA arrayul initial
 */

const lessThanThree = array.filter((element) => {
  return element < 3;
});
console.log(lessThanThree);

/**
 * .reverse()
 * Reverse array
 * MODIFICA ARRAYUL INITIAL
 *
 * .toReversed()
 * RETURNEAZA un nou array
 * NU MODIFICA arrayul initial
 */

// array.reverse()
// console.log(array)

const revesedArray = array.toReversed();
console.log(array);
console.log(revesedArray);

/**
 * .concat()
 * Imbinarea arrayurilor
 */

const concatArray = ["add", "me"];
const newConcatenatedArray = array.concat(concatArray);
console.log(newConcatenatedArray);
console.log(concatArray.concat(array));
console.log([1, 2, 3].concat(concatArray));

/**
 * .join()
 * Transforma array into string
 */

const redeclaredArray = [1, 2, 3, 4, 5];
const stringFromArray = redeclaredArray.join();
console.log(stringFromArray);

/**
 * .reduce() !!!
 * Reduce un array
 * Ia un array si il transforma intr-o valoare
 */

const reduceArray = [1, 2, 3, 4];
const reducedvalue = reduceArray.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});

console.log(reduceArray);
console.log(reducedvalue);

/**
 * .sort()
 * Sorting an array
 * modifica arrayul initial
 *
 * .toSorted()
 * NU MODIFICA arrayul initial ci returneaza un array sortat
 */

let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, "asd", "aac", "sum"];

console.log(arrayToSort);
// console.log(arrayToSort.sort());

arrayToSort.sort((a, b) => {
  return a - b; //sorteaza ascendent
  //return b - a; sorteaza descendent
});

console.log(arrayToSort);

/**
 * .find()
 * Returneaza primul element care indeplineste conditia
 *
 * .findLast()
 * returneaza ultimul element
 */

let arrayToFind = [1, 2, 78, 9, 2, 45];
const value = arrayToFind.find((element) => {
  return element === 2;
});

console.log(value);

arrayToFind = [
  { name: "Sergiu", city: "Hong Kong" },
  { name: "Liviu", city: "Singapore" },
  { name: "Andreea", city: "Lisabona" },
  { name: "Alina", city: "Dubai" },
  { name: "Abdul", city: "Riad" },
  { name: "Sergiu", city: "Bangkok" },
];

const foundElem = arrayToFind.find((element) => {
  return element.name === "Sergiu";
});

const foundLastElem = arrayToFind.findLast((element) => {
  return element.name === "Sergiu";
});

const foundFirstElem = arrayToFind.find((element) => element.name === "Sergiu");

console.log(foundFirstElem);

// Pentru arrow functions
// Daca avem un singur parametru, parantezele rotunde POT sa lipseasca
// Daca se scrie pe o singura linie si este o singura expresie, parantezele acolade sunt optionale
// iar daca lipsesc, returnul este implicit

/**
 * .includes()
 * Verifica daca un element exista intr-un array
 */

let includeElem = arrayToSort.includes(200);
console.log(includeElem);

/**
 * Objects
 */

const createPerson = (name, age, gender) => {
  return {
    firstName: name,
    age: age,
    gender, //gender : gender
  };
};

const sergiu = createPerson("Sergiu", 23, "male");
const dragos = createPerson("Dragos", 25, "female");
console.log(sergiu);

/**
 * Create objects using OBJECT LITERAL method
 */

const person = {
  name: "Sergiu",
  lastName: "Savin",
  age: 55,
  address: {
    city: "Brasov",
    zip: 500,
  },
  saiHi: function () {
    console.log(`${this.lastName} says hi`);
  },
  sayHiArrow: () => {
    console.log(`${this.lastName} says hi`);
  },
};

person.lastName = "Popescu";
person.saiHi();

/**
 * Create objects using 'new' keyword
 */

const otherPerson = new Object(person);

console.log(person);
console.log(otherPerson);

const bicycle = {
  gear: 21,
  setGear: function (gear) {
    this.gear = gear;
  },
};

bicycle.gear = 14;
console.log(bicycle);
bicycle.setGear(25);
console.log(bicycle);

/**
 * Classes
 */

class Car {
  wheels = 4;

  constructor(model, maxSpeedKm) {
    this.model = model;
    this.maxSpeed = maxSpeedKm;
  }
}

const vw = new Car("vw", 150);
const porsche = new Car("porsche", 350);
console.log(vw);
console.log(porsche);
