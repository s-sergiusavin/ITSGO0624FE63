/**
 * RegExp
 * tipare care cauta combinatii de caractere
 */

let string = 'abcdefce';
let pattern = /cde/;

console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

const loginBtn = document.getElementById('login');
const emailElem = document.getElementById('email');
const passwordElem = document.getElementById('password');
const error = document.querySelector('#error');

function showError(message) {
    error.style.display = 'block';
    error.innerText = message;
    error.style.color = 'red';
}

const checkAndReset = () => {
    if (error.style.display === 'block') {
        error.style.display = 'none';
    }
}

const validateEmail = (value) => {
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;
    return regexEmailPattern.test(value);
}

const validatePassword = (value) => value === 'password';

const clearInput = () => {
    emailElem.value = '';
    passwordElem.value = '';
}

loginBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const emailValue = emailElem.value;
    const passwordValue = passwordElem.value;

    if (emailValue === '' || passwordValue === '') {
        showError('All fields are required and must contain a value');
        return;
    }

    checkAndReset();

    if (validatePassword(passwordValue) && validateEmail(emailValue)) {
        alert('Logged in');
        clearInput();
    } else {
        showError('Incorrect email or password');
        clearInput();
    }
});

const loginTitleElem = document.querySelector('.loginTitle');
const toggleLoginBtn = document.querySelector('.toggleLogin');

let isLoginPage = true;

toggleLoginBtn.addEventListener('click', function (event) {
    if (isLoginPage) {
        loginTitleElem.innerText = 'Create an account';
        toggleLoginBtn.textContent = 'Switch to log in';
        loginBtn.value = 'Sign up';
    } else {
        loginTitleElem.innerText = 'Login';
        toggleLoginBtn.textContent = 'Switch to signup';
        loginBtn.value = 'Login';
    }
    isLoginPage = !isLoginPage;
})

const firstNameElement = document.getElementById('firstName');
const lastNameElement = document.getElementById('lastName');
const ageElement = document.getElementById('age');

const firstName = 'Dua';
const lastName = 'Lipa';
const age = 25;

// firstNameElement.value = firstName;
// lastNameElement.value = lastName;
// ageElement.value = age;

/**
 * Built in functions
 */

/**
 * setTimeout()
 * Executa o functie pe care o primeste ca argument PENTRU O SINGURA DATA, dupa o anumita perioada de timp
 * Perioada de timp este exprimata in ms
 * Daca perioada de timp nu este mentionata, functia se va executa la 0 secunde DUPA CE S-A EXECUTAT TOT CODUL DIN PAGINA
 */

// setTimeout(() => {
//     firstNameElement.value = firstName;
//     lastNameElement.value = lastName;
//     ageElement.value = age;
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

setTimeout(() => console.log(4));

/**
 * setInterval()
 * apeleaza o functie cu frecventa mentionata in intervalul specificat
 */

let start = 1;

const intervalulMeu = setInterval(() => {
    console.log(start)
    start++;

    if (start === 10) {
        clearInterval(intervalulMeu);
        setFields();
    }
}, 2000);

console.log('Intervalul meu: ' + intervalulMeu);

/**
 * Objects recap
 */

const person = {
    firstName: 'Adrian',
    age: 25,
    somethingUnique: 'def',
    address: {
        street: 'Street',
        country: 'Ro'
    },
    sayHi: function () {
        console.log(`${this.firstName} says hi!`);
    }
}

console.log(person.firstName);
person.sayHi();
person.firstName = 'Alex';
person.sayHi();

function logStuff() {
    console.log(this);
}

logStuff();

function addToFive(number) {
    console.log('addToFive ' + (number + 5));
}

addToFive(10);

const addToFiveCopy = addToFive;
addToFiveCopy(100);

const sayHiCopy = person.sayHi;
sayHiCopy();

const newPerson = person;
newPerson.firstName = 'Rares';
// console.log(person);
// console.log(newPerson);

/**
 * Destructuring
 * Spread and Rest operators - ...
 */

// Spread operator
const anotherPerson = { ...person, address: { ...person.address } };
console.log('-----------------Another Person-----------------');
anotherPerson.age = 15;
anotherPerson.firstName = 'Nume nou';
anotherPerson.address.street = 'O strada noua';

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
    first: 'first',
    second: 'second',
    third: 'third',
    second: 'de doua ori'
}

console.log(simpleObject);

const newArr = [...myArray];
newArr[0] = -14;
console.log(myArray);
console.log(newArr);
