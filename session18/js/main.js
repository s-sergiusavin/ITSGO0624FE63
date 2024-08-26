/**
 * Scope
 */

// let testLet = "let-global";
// const testConst = "const-global";
// var testVar = "var-global";

// // !!! let & const variables cannot be redeclared in the same scope
// // let testLet = 3;
// // const testConst = 5;
// // var testVar = 7;

// if (true) {
//   console.log("------Primul if----");
//   let testLet = "let-if";
//   const testConst = "const-if";
//   var testVar = "var-if";
//   console.log(testLet);
//   console.log(testConst);
//   console.log(testVar);
//   if (true) {
//     console.log("------Al doilea if----");
//     let testLet = "let-if2";
//     const testConst = "const-if2";
//     var testVar = "var-if2";
//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);
//   }
//   if(true) {
//     console.log("------Al trilea if----");
//     testLet = 'let-if3';
//     // testConst = 'const-if3';
//     testVar = 'var-if3';
//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);
//   }
// }

// console.log("----------In afara if-ului-------");
// console.log(testLet);
// console.log(testConst);
// console.log(testVar);

let outsideVar = "Outside";
if (true) {
  let outsideVar = "Inside";
  console.log(outsideVar);
}

console.log(outsideVar);

let globalVariable = "unchanged";

function addTwo(number) {
  globalVariable = "changed";
  const total = number + 2;
}

console.log(globalVariable);
// addTwo(5);
// console.log(globalVariable);

let hotOutside = true;
if (hotOutside === true) {
  addTwo(3);
}

console.log(globalVariable);

showTimisoara(); // pt functiile declarate cu function keyword, se aplica HOISTING, functie poate fi apelata
// inainte de declararea ei

function showTimisoara() {
  console.log("Timisoara");
}

showTimisoara();

// showCluj();
const showCluj = () => {
  console.log("Cluj");
};
showCluj();

// showBrasov();
const showBrasov = function () {
  console.log("Brasov");
};
showBrasov();

// console.log(variable);
const variable = "myVariable";

// const addFive = (number) => {
//   const result = number + 5;
//   return result;

//   console.log('Dupa return');

//   return undefined;
// };

// let resultToAddFive = addFive(3);
// console.log(resultToAddFive);

// Daca am un singur parametru, parantezele rotunde sunt optionale
// Daca avem o singura expresie, parantezele acolade pot sa dispara, iar returnul este implicit

const addFive = (number) => number + 5;

console.log(addFive(12));

// Valoarea returnata a unei functii

const changeEur = (value) => {
  const total = value * 4.9753;
  console.log("Acest text este inainte de return, va fi vizibil");
  return total;
  console.log(
    "Orice cod aflat dupa return in interiorul blocului de executie al functiei nu va fi executat"
  );
};

const fiveEur = changeEur(5);
console.log(fiveEur);

/**
 * Functions with default params
 * Parametrii default functioneaza la fel pt toate tipurile de functii
 */
const makeBurger = (ingredient = "vita") => {
  if (ingredient === undefined) {
    ingredient = "porc";
  }
  console.log(`Burgerul meu preferat este cu ${ingredient}`);
};

makeBurger("pui");
makeBurger();
makeBurger("mistret");
makeBurger();

// Ternary operator ===> conditie ? expresie pt adevar : expresie pt fals

let number5 = 5;
let string5 = "5";

number5 === string5 ? console.log("Egale") : console.log("Inegale");
console.log(number5 === string5 ? "Egale" : "Inegale");

// const rateMovie = (movie) => {
//     if (movie === 'Peeky Blinders') {
//         console.log('Filmul e de nota 10');
//     } else if( movie === 'Batman') {
//         console.log('Filmul e de nota 9');
//     } else if(movie === 'Vikings') {
//         console.log('Filmul e de nota 8');
//     } else if(movie === 'Deadpool') {
//         console.log('Filmul e de nota 7');
//     } else if(movie === 'Sweet home') {
//         console.log('Filmul e de nota 6');
//     } else {
//         console.log('Filmul nu a fost eavluat inca');
//     }
// }

const rateMovie = (movie) => {
  switch (movie) {
    case "Peeky Blinders":
      console.log("Filmul e de nota 10");
      break;
    case "Batman":
      console.log("Filmul e de nota 9");
      break;
    case "Vikings":
      console.log("Filmul e de nota 8");
      break;
    case "Deadpool":
      console.log("Filmul e de nota 7");
      break;
    case "Sweet home":
      console.log("Filmul e de nota 6");
      break;
    case "Home Alone":
      console.log("Filmul e de nota 5");
      break;
    default:
        console.log('Filmul nu se afla in lista noastra.');
        break; 
  }
};

rateMovie("Peeky Blinders");
rateMovie("Batman");
rateMovie("Vikings");
rateMovie("Deadpool");
rateMovie("Sweet home");
rateMovie("Ceva random");
rateMovie();

// Objects with functions as properties (methods)

const complexObject = {
    firstName: 'Sergiu',
    address: {
        city: 'Brasov',
        zip: 500
    },
    favouriteMovies: ['Top Gun', 'Home Alone', 'Harry Potter'],
    hasPassport: true,
    hobbies: ['travel', 'fishing', 'eating', 'drinking'],
    watchMovie: function(movie = this.favouriteMovies[1]) {
        console.log('Uita-te la ' + movie);
    },
    sleep: () => {
        console.log('Mergi la culcare!' + this.firstName); // this in arrow functions functioneaza diferit
    },
    work() {
        console.log('Mergi la munca!');
    },
    showTimeUntillCanDrive() {
        return 18 - this.age;
    },
    age: 15
};

console.log(complexObject.firstName)
console.log(complexObject.favouriteMovies[2])
console.log(complexObject.address.zip)
complexObject.sleep()
complexObject.watchMovie('Fast and furious');
complexObject.watchMovie(complexObject.favouriteMovies[0]);
console.log(complexObject.showTimeUntillCanDrive());
complexObject.sleep()
complexObject.watchMovie();

// Flip a coin

let valoriMoneda = ['cap', 'pajura'];

console.log(valoriMoneda[0]);
console.log(valoriMoneda[1]);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.round(Math.random()));

let randomValue = Math.round(Math.random());

if (valoriMoneda[Math.round(Math.random())] === 'cap') {
  console.log('A iesit cap');
} else {
  console.log('A iesit pajura');
}

console.log(valoriMoneda[Math.round(Math.random())] === 'cap' ? 'A iesit cap' : 'A iesit pajura' )
console.log(Math.round(Math.random()) === 0 ? 'A iesit cap' : 'A iesit pajura')

// Palindrome game

const palindrome = [1, 9, 7, 8, 7, 9, 1];

const checkPalindrome = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - i - 1]) {
      return 'Arrayul nu este palindrom';
    }
  }

  return 'Arrayul este palindrom';
}

console.log(checkPalindrome(palindrome));