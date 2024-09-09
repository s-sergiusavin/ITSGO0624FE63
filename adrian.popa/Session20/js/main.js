/**
 * Array methods
 */

const array = [1, 2, 3, '4', 5, 6, 7];
console.log(array.length);
// array[1] = 100;
// array[4] = 500;
// array[7] = 8;
// array[10] = 1000;

console.log(array);

/**
 * Add or remove elements in array
 */

array.push(8); // adaugam un element LA FINALUL ARRAY-ULUI
console.log(array);

array.pop(); // scoatem elementul de la FINALUL ARRAY-ULUI
console.log(array);
console.log(array.unshift('zero')); // adaugam un element LA INCEPUTUL ARRAY-ULUI, returneaza length-ul
console.log(array.shift()); // returneaza elementul scos
console.log(array);

// LIFO Last In First Out
// FIFO First In First Out

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

/**
 * Array iteration methods
 */

// array.forEach(e => console.log(e));

// array.forEach(iterateInArray);
// function iterateInArray(element) {
//     console.log('Element ' + element)
// }

array.forEach(function (element) {
    console.log('E ' + element);
});

// .map() methos => iterates trough an array and RETURNS this array

const newArray = array.map(e => e + 1);

console.log(newArray);

/**
 * Returns the index of an array
 * .indexOf()
 */

console.log(`Indexul elementului 3 este ${array.indexOf(3)}`);

array[2] = 7;
console.log(array);
array[array.indexOf('4')] = 777;
console.log(array);
console.log(array.indexOf(-15)); // daca elementul nu exista, va returna -1 intotdeauna
console.log(array.indexOf(7));

// copy array elements

let myNum = 7;
let anotherNum = myNum;
myNum = 5;

console.log(`myNum ${myNum} anotherNum ${anotherNum}`);

const arrayCopy = array;
array[0] = 'zero';

console.log(array);
console.log(arrayCopy);

/**
 * .slice()
 * Slice method
 * Copy portions of arrays
 */

let newArrayCopy = array.slice(2); // copiaza toate elemenetele incepand cu o pozitie specificata
array[4] = 3;
console.log(`Array dupa slice ${array} si newArrayCopy ${newArrayCopy}`);

newArrayCopy = array.slice(0, 5); // copiaza de la indexul specificat prin primul parametru pana la cel de-al doilea (nu e inclus)
console.log(newArrayCopy);

/**
 * .splice()
 * Splice methods
 * cut portions of an array
 */

console.log("-----------------------");
console.log(array);
// let changedArray = array.splice(2); // decupeaza toate elementele unui array incepand cu pozitia specificata
// console.log(array);
// console.log(changedArray);

let changedArray = array.splice(2, 3); // decupeaza toate elementele unui array incepand cu indexul initial si NUMARUL DE ELEMENTE
console.log(array);
console.log(changedArray);

/**
 * .filter()
 * Filtering array elements
 * Returneaza UN NOU ARRAY cu elementele care indeplinesc o conditie
 * NU MODIFICA array-ul initial
 */

const lessThanThree = array.filter(e => e < 3);
console.log(lessThanThree);

/**
 * Reverse array
 * .reverse()
 * MODIFICA ARRAY-UL INITIAL
 * 
 * .toReversed()
 * NU MODIFICA array-ul initial
 * RETURNEAZA UN NOU ARRAY
 */

// array.reverse();
// console.log(array);

const reversedArray = array.toReversed();
console.log(array);
console.log(reversedArray);

/**
 * .concat()
 * Imbinarea array-urilor
 */

const concatArray = ['add', 'me'];
// const newConcatenatedArray = array.concat(concatArray);
// console.log(newConcatenatedArray);
console.log(array.concat(concatArray));
console.log(concatArray.concat(array));
console.log([1, 2, 3].concat(concatArray));

/**
 * .join()
 * Transform array into string
 */

const redeclaredArray = [1, 2, 3, 4, 5];
const stringFromArray = redeclaredArray.join(' 😀 ');
console.log(stringFromArray);

/**
 * .reduce() !!!
 * Reduce array
 * Ia un array si il transforma intr-o valoare
 */

const reduceArray = [1, 2, 3, 4];
const reducedValue = reduceArray.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(reducedValue);
console.log(reduceArray);

/**
 * .sort()
 * Sorting an array
 * modifica array-ul initial
 * 
 * .toSorted()
 * NU MODIFICA array-ul initial, ci returneaza un array sortat
 */

let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, 'asd', 'aac', 'sum', 'num1007', 'num34', 'num2'];

// console.log(arrayToSort.sort());

// a - b -> sorteaza ascendent
// b - a -> sorteaza descendent
arrayToSort.sort((a, b) => a - b);
console.log(arrayToSort);

/**
 * .find()
 * Returneaza PRIMUL ELEMENT care indeplineste conditia
 * 
 * .findLast()
 * Returneaza ULTIMUL ELEMENT care indeplineste conditia
 */

let arrayToFind = [1, 2, 78, 9, 2, 45];
const value = arrayToFind.find(e => e === 2);
console.log(value);

arrayToFind = [
    { name: 'Adrian', city: 'Hong Kong' },
    { name: 'Liviu', city: 'London' },
    { name: 'Andreea', city: 'Lisbon' },
    { name: 'Alina', city: 'Dubai' },
    { name: 'Abdul', city: 'Riad' },
    { name: 'Adrian', city: 'Bangkok' }
];

const findFirstElem = arrayToFind.find(e => e.name === 'Adrian');
const findLastElem = arrayToFind.findLast(e => e.name === 'Adrian');
console.log(findFirstElem);

// Pentru arrow functions
// Daca avem un singur parametru, parantezele rotunde POT sa lipseasca
// Daca se scrie pe o singura linie si este o singura expresie, parantezele acolade sunt optionale
// iar daca lipsesc, return-ul este implicit

/**
 * .includes()
 * Verificam daca un element exista intr-un array
 */

let includedElem = arrayToSort.includes(201);
console.log(includedElem);

/**
 * Objects
 */

const createPerson = (name, age, gender) => {
    return {
        firstName: name,
        age,
        gender // gender: gender
    };
}

const adrian = createPerson('Adrian', 25, 'M');
const dragos = createPerson('Dragos', 21, 'F');

console.log(adrian);

/**
 * Create objects using OBJECT LITERAL method
 */

const person = {
    name: 'Adrian',
    lastName: 'Popa',
    age: 20,
    address: {
        city: 'Satu Mare',
        zip: 1000
    },
    sayHi: function () {
        console.log(`${this.lastName} says hi`);
    },
    sayHiArrow: () => {
        console.log(`${person.name} says hi`);
    }
};

person.sayHi();
person.sayHiArrow();

/**
 * Create objects using 'new' keyword
 */

const otherPerson = new Object(person);
otherPerson.name = 'Adrian A';

console.log(person);
console.log(otherPerson);

const bicycle = {
    gear: 21,
    setGear: (gear) => bicycle.gear = gear
}

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
        this.maxSpeedKm = maxSpeedKm;
    }
}

const vw = new Car('VW', 150);
const porsche = new Car('Porsche', 350);

vw.maxSpeedKm = 100;
vw.wheels = 100;

console.log(vw);
console.log(porsche);