/**
 * Scope
 */

// let testLet = 'let-global';
// const testConst = 'const-global';
// var testVar = 'var-global';

// // !!! let & const variables cannot be redeclared in the same scope
// // let testLet = 3;
// // const testConst = 5;
// // var testVar = 7;

// if (true) {
//     console.log('-------- Primul if ---------');
//     let testLet = 'let-if';
//     const testConst = 'const-if';
//     var testVar = 'var-if';
//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);
//     if (true) {
//         console.log('-------- Al 2-lea if ---------');
//         let testLet = 'let-if2';
//         const testConst = 'const-if2';
//         var testVar = 'var-if2';
//         console.log(testLet);
//         console.log(testConst);
//         console.log(testVar);
//     }
//     if (true) {
//         console.log('-------- Al 3-lea if ---------');
//         testLet = 'let-if3';
//         // testConst = 'const-if3';
//         testVar = 'var-if3';
//     }
// }

// console.log('-------------------- In afara if-ului --------------------');
// console.log(testLet);
// console.log(testConst);
// console.log(testVar);

let outsideVar = 'Outside';
if (true) {
    let outsideVar = 'Inside';
    console.log(outsideVar);
}

console.log(outsideVar);

let globalVariable = 'unchanged';

function addTwo(number) {
    globalVariable = 'changed';
    const total = number + 2;
}

console.log(globalVariable);
// addTwo(5);
// console.log(globalVariable);

let hotOutside = true;
if (hotOutside) {
    addTwo(3);
}

console.log(globalVariable);

showTimisoara(); // pentru functiile declarate cu function keyword, se aplica HOISTING, functia poate fi apelata inainte de declararea ei

function showTimisoara() {
    console.log('Timisoara');
}

showTimisoara();

// showCluj();
const showCluj = () => {
    console.log('Cluj');
}
showCluj();

// showBrasov();
const showBrasov = function () {
    console.log('Brasov');
}
showBrasov();

// console.log(variable);
const variable = 'myVariable';

// const addFive = (number) => {
//     const result = number + 5;
//     return result;
// }

// let resultToAddFive = addFive(3);
// console.log(resultToAddFive);

// Daca am un singur parametru, parantezele rotunde sunt optionale
// Daca avem o singura expresie, parantezele acolade pot sa dispara, iar return-ul este implicit

const addFive = number => number + 5;

console.log(addFive(12));

// Valoarea returnata a unei functii

const changeEur = value => value * 4.9753;

const fiveEur = changeEur(5);
console.log(fiveEur);

/**
 * Functions with default params
 * Parametrii default functioneaza la fel pentru toate tipurile de functii
 */

const makeBurger = (ingredient = 'porc') => {
    if (ingredient === undefined) {
        ingredient = 'vita';
    }
    console.log(`Burgerul meu preferat este cu ${ingredient}`);
}

makeBurger('pui');
makeBurger();
makeBurger('mistret');
makeBurger();

// Ternary operator

let number5 = 5;
let string5 = '5';

number5 === string5 ? console.log('Sunt egale') : console.log('Sunt inegale');

console.log(number5 === string5 ? 'Egale' : 'Inegale');

const rateMovie = (movie) => {
    switch (movie) {
        case 'Peeky Blinders':
            console.log('Filmul este de nota 10');
            break;
        case 'Batman':
            console.log('Filmul este de nota 9');
            break;
        case 'Vikings':
            console.log('Filmul este de nota 8');
            break;
        case 'Deadpool':
            console.log('Filmul este de nota 7');
            break;
        case 'Sweet home':
            console.log('Filmul este de nota 6');
            break;
        case 'Home Alone':
            console.log('Filmul este de nota 5');
            break;
        default: console.log('Filmul nu se afla in lista noastra.');
    }
}

rateMovie('Peeky Blinders');
rateMovie('Batman');
rateMovie('Vikings');
rateMovie('Deadpool');
rateMovie('Sweet home');
rateMovie('Home Alone');
rateMovie();

// Objects with functions as properties

const complexObject = {
    name: 'Adrian',
    address: {
        city: 'Carei',
        zip: 1
    },
    favouriteMovies: ['Vikings', 'That time when I was reincarnated as a slime'],
    hasPassport: false,
    hobbies: ['gaming', 'travel', 'listening music'],
    watchMovie: function (movie = this.favouriteMovies[0]) {
        console.log('Uita-te la ' + movie);
    },
    sleep: (work) => {
        if (!work) {
            console.log(`While work isn't done, you can't sleep ${complexObject.name}`); // this in arrow functions functioneaza diferit
        }
    },
    work() {
        console.log('Back to coding');
    },
    showTimeUntillCanDrive() {
        return 18 - this.age;
    },
    age: 12
}

console.log(complexObject.name);
console.log(complexObject.favouriteMovies[1]);
console.log(complexObject.address.zip);
complexObject.sleep(false);
complexObject.watchMovie('Fast and Furious');
console.log(complexObject.showTimeUntillCanDrive());
complexObject.watchMovie(complexObject.favouriteMovies[0]);

// Flip a coin

let valoriMoneda = ['Cap', 'Stema'];

console.log(valoriMoneda[0]);
console.log(valoriMoneda[1]);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.round(Math.random()));

let randomValue = Math.round(Math.random());

if (valoriMoneda[randomValue] === 'Cap') {
    console.log('A iesit cap');
} else {
    console.log('A iesit stema');
}

console.log(valoriMoneda[randomValue] === 'Cap' ? 'A iesit cap' : 'A iesit stema');

// Palindrome game

const palindrome = [1, 9, 7, 8, 7, 9, 1];

const checkPalindrome = (array) => {
    for (let i = 0; i < array.length / 2; i++) {
        if (array[i] !== array[array.length - i - 1]) {
            return 'Array-ul nu este palindrom';
        }
        return 'Array-ul este palindrom';
    }
}

console.log(checkPalindrome(palindrome));