/**
 * Regular expressions
 * tipare care cauta combinatii de caractere
 */

let string = "abcdefce";
let pattern = /cde/;

console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

const loginBtn = document.getElementById("login");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const error = document.querySelector("#error");

function showError(message) {
  error.style.display = "block";
  error.innerText = message;
  error.style.color = "red";
}

const checkAndResetError = () => {
  if (error.style.display === "block") {
    error.style.display = "none";
  }
};

const validateEmail = (value, regex) => {
  console.log(value.match(regex));
  console.log(!!value.match(regex));

  return !!value.match(regex);
};

const validatePassword = (value) => {
  // if (value === 'password') {
  //   return true;
  // } else {
  //   return false;
  // }
  return value === "password";
};

const clearInput = () => {
  emailField.value = "";
  passwordField.value = "";
};

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);

  const emailValue = emailField.value;
  const passwordValue = passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  if (emailValue === "" || passwordValue === "") {
    showError("All fields are required and must contain a value!");
  } else {
    checkAndResetError();
  }

  // if (validateEmail()=== true && validatePassword() === true)
  if (
    validateEmail(emailValue, regexEmailPattern) &&
    validatePassword(passwordValue)
  ) {
    alert("Logged in");
    clearInput();
  } else {
    alert("Try again");
    showError("Incorrect email or password!");
    clearInput();
  }
});

const loginTitleElem = document.querySelector(".loginTitle");
const toggleLoginBtn = document.querySelector(".toggleLogin");

let isLoginPage = true;

toggleLoginBtn.addEventListener("click", function () {
  if (isLoginPage) {
    loginTitleElem.innerText = "Create an account";
    toggleLoginBtn.textContent = "Switch to log in";
    loginBtn.value = "Sign up";
  } else {
    loginTitleElem.innerText = "Login";
    toggleLoginBtn.textContent = "Switch to sign up";
    loginBtn.value = "Login";
  }

  isLoginPage = !isLoginPage;
});

const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const ageElement = document.getElementById("age");

const firstName = "Dua";
const lastName = "Lipa";
const age = 25;

/**
 * Built in functions
 */

/**
 * setTimeout()
 * Executa o functie pe care o primeste ca argument PENTRU O SINGURA DATA, dupa o anumita perioada de timp
 * Perioada de timp este exprimata in milisecunde
 * Daca perioada de timp nu este mentionata, functia se executa la 0 secunde DUPA CE S-A EXECUTAT TOT CODUL DIN PAGINA
 */

// setTimeout(() => {
// firstNameElement.value = firstName;
// lastNameElement.value = lastName;
// ageElement.value = age;
// }, 5000);

function setFields() {
  firstNameElement.value = firstName;
  lastNameElement.value = lastName;
  ageElement.value = age;
}

// setTimeout(setFields, 5000);

console.log(1);
function setTwo() {
  console.log(2);
}
console.log(3);
setTwo();

setTimeout(() => {
  console.log(4);
});

/**
 * setInterval()
 * apeleaza o functie cu frecventa mentionata in intervalul specificat
 */

// let start = 1;
// const intervalulMeu = setInterval(() => {
//   console.log(start);
//   start += 1;
//   if (start === 10) {
//     clearInterval(intervalulMeu);
//     setFields();
//   }
// }, 2000);

// console.log("Intervalul meu: " + intervalulMeu);

/**
 * Objects recap
 */

const person = {
  firstName: "Sergiu",
  age: 20,
  somethingUnique: "asd",
  address: {
    street: "street",
    country: "ro",
  },
  sayHi: function () {
    console.log(`${this.firstName} says Hi`);
  },
};

person.sayHi();
person.firstName = "Alex";
person.sayHi();

function logStuff() {
  console.log(this);
}

logStuff();

function addToFive(number) {
  console.log("addToFive " + (number + 5));
}

addToFive(10);

const addToFiveCopy = addToFive;
addToFiveCopy(100);

const sayHiCopy = person.sayHi;
sayHiCopy();

const newPerson = person;
newPerson.firstName = "Rares";
console.log(person);
console.log(newPerson);

/**
 * Destructuring
 * Spred and Rest operators = ...
 */

const anotherPerson = { ...person, address: { ...person.address } };
console.log(anotherPerson);

anotherPerson.age = 15;
anotherPerson.firstName = "Nume NOu";
anotherPerson.address.street = "O strada noua";

console.log(person);
console.log(anotherPerson);

/**
 * Destructuring and rest operator
 */

const { somethingUnique, ...restObject } = person;
console.log(somethingUnique);
console.log(restObject);

const myArray = [111, 222, 333, 4];
const [first, second, third, ...restOperator] = myArray;

console.log(first);
console.log(second);
console.log(third);
console.log(restOperator);

const simpleObject = {
  first: "first",
  second: "second",
  third: "third",
  second: "de doua ori",
};
console.log(simpleObject);

const newArr = [...myArray];
newArr[0] = -14;
console.log(myArray);
console.log(newArr);
