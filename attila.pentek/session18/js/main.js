/**
 * Scope
 */

// let testLet = "let global";
// const testConst = "const-global";
// var testVar = "var-global";

// // !!! let & conts variables cannot be redeclared in the same scope
// // let testLet =3;

// if (true) {
//   let testLet = "let if";
//   const testConst = "const-if";
//   var testVar = "var - if";
//   console.log(testLet);
//   console.log(testConst);
//   console.log(testVar);
//   if (true) {
//     console.log("-----al doilea if-------");
//     let testLet = "let if";
//     const testConst = "const-if";
//     var testVar = "var - if";
//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);
//   }
//   if (true) {
//     console.log("----------al treilea if----------");
//     testLet = "let-if3";
//     // testConst = "const-if3";
//     testVar = "var-if3";
//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);
//   }
// }

// console.log("---------------------in afara if-ului------------");
// console.log(testLet);
// console.log(testConst);
// console.log(testVar);

let outsideVar = "------------";
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

function showTimisoara() {
  console.log("Timisoara");
}

const showCluj = () => {
  console.log("Cluj");
};
showCluj();

const addFive = (number) => {
  const result = number + 5;
  return result;
};

let resultToAddFive = addFive(3);
console.log(resultToAddFive);

//Daca am un singur parametru, parantezele rotunde sunt optionale
// Daca avem o singura expresie, parantezele acolade pot sa dispara, iar returnul este implicit

console.log(addFive(12));

const changeEur = (value) => {
  const total = value * 4.9753;
  console.log("Acest text este inainte de return, va fi vizibil");
  return total;
  console.log(
    "Orice cod aflat dupa return in interiorul blocului de executie al functiet, nu va fi executat"
  );
};

const fiveEur = changeEur(5);
console.log(fiveEur);

/**
 * Functions with default params
 * Parametrii default functioneaza la fel pt toate tipurile de functii
 */

const makeBurger = (ingridient = "vita") => {
  if (ingridient === undefined) {
    ingridient = "porc";
  }
  console.log(`Burgerul meu preferat este cu ${ingridient}`);
};

makeBurger("pui");
makeBurger();

// Ternary operator ===> conditie ? expresie pt adevar : expresie pt fals

let number5 = 5;
let string5 = "5";

number5 === string5 ? console.log("Egale") : console.log("Inegale");

console.log(number5 === string5 ? "Egale" : "Inegale");

// const rateMovie = (movie) => {
//   if (movie === 'Peeky Blinders') {
//     console.log('Filmul e de nota 10');
//   } else if(movie === 'Batman') {
//     console.log('Filmul e de nota 9');
//   } else if(movie === 'Vikings') {
//     console.log('Filmul e de nota 8');
//   } else if(movie === 'Deadpool') {
//     console.log('Filmul e de nota 7');
//   } else if(movie === 'Sweet home') {
//     console.log('Filmul e de nota 6');
//   } else {
//     console.log('Filmul nu a fost evaluat inca');
//   }
// }

const rateMovie = (movie) => {
  switch (movie) {
    case "Peeky Blinders":
      console.log("Filmul este de nota 10");
      break;
    case "Batman":
      console.log("Filmul este de nota 9");
      break;
    case "Vikings":
      console.log("Filmul este de nota 8");
      break;
    case "Deadpool":
      console.log("Filmul este de nota 7");
      break;
    case "Sweet home":
      console.log("Filmul este de nota 6");
      break;
    case "Home alone":
      console.log("Filmul este de nota 5");
      break;
    default:
      console.log("Filmul nu se afla in lista noastra");
      break;
  }
};

console.log("Peeky Blinders");
console.log("Batman");
console.log("Vikings");
console.log("Deadpool");
console.log("Sweet home");
console.log("Home alone");

// Objects with functions as properties (methods)

const complexObject = {
  firstName: "Sergiu",
  adress: {
    city: "Brasov",
    zip: 500,
  },
  favoriteMovies: ["Top Gun", "Home Alone", "Harry Potter"],
  hasPassport: true,
  hobbies: ["travel", "fishing", "eating", "drinking"],
  watchMovie: function (movie = this.favoriteMovies[1]) {
    console.log("Uita-te la " + movie);
  },
  sleep: () => {
    console.log("Mergi la culcare" + this.firstName); // this in arrow functions functioneaza diferit
  },
  work() {
    console.log("Mergi la munca");
  },
  showTimeUntilCanDrive() {
    return 18 - this.age;
  },
  age: 15,
};

console.log(complexObject.name);
console.log(complexObject.favoriteMovies[2]);
console.log(complexObject.adress.zip);
complexObject.sleep();
complexObject.watchMovie(complexObject.favoriteMovies[0]);
console.log(complexObject.showTimeUntilCanDrive());
complexObject.sleep();
complexObject.watchMovie();

// flip a coin

let valoriMoneda = ["Cap", "pajura"];

console.log(valoriMoneda[0]);
console.log(valoriMoneda[1]);
console.log(Math.random());
console.log(Math.random());

Math.round(Math.random) === 1
  ? console.log(valoriMoneda[1])
  : console.log(valoriMoneda[0]);

//
const palindrome = [1, 9, 7, 8, 7, 9, 1];

const checkPalindrome = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - i - 1]) {
      return "Arrayul nu este palindrom";
    }
  }
  return "Arrayul este palindrom";
};

console.log(checkPalindrome(palindrome));
