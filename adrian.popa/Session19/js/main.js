function logStuff(stuff) {
    console.log(`Rezultatul este: ${stuff}.`);
}

logStuff(10);

let sum = 0;

function addToSum(number) {
    // let sum = 0;
    return sum += number;
}

addToSum(3);
logStuff(addToSum(10));

let totalSum = addToSum(10);
addToSum(5);
logStuff(totalSum);
logStuff(sum);

// const sumNumbers = function(number1, number2) {
//     return number1 + number2;
// }

const sumNumbersArrow = (number1, number2) => number1 + number2;

let sumTwoNumbersValue = sumNumbersArrow(5, 10);
console.log(sumTwoNumbersValue);
sumTwoNumbersValue = sumNumbersArrow(10, 10);
console.log(sumTwoNumbersValue);

let sumNumbersStoredGlobally;
const sumTwoNumbersAlternative = (num1, num2) => sumNumbersStoredGlobally = num1 + num2;

sumTwoNumbersAlternative(3, 4);
logStuff(sumNumbersStoredGlobally);

const verifyEquality = (num1, num2) => num1 === num2;
console.log(verifyEquality(3, 4));

const doubleValue = value => {
    logStuff(`Adrian`);
    return value * 2;
}
logStuff(doubleValue(3));

const addEvenValues = (value1, value2) => {
    if (value1 % 2 === 0 && value2 % 2 === 0) {
        return value1 + value2;
    }
    return 'Numerele nu sunt pare';
}

logStuff(addEvenValues(4, 6));
logStuff(addEvenValues(4, 3));

const greet = (name = 'John Smith') => console.log(`Salut ${name}`);

greet();
greet('Mihai');
greet(' ');
greet('%ESHD@^');
greet(57);
greet(null);

// const removeFromBiggest = (num1, num2) => {
//     Math.max(num1, num2) - Math.min(num1, num2);
// }

// debugger
// F8 revine la normal, iese din procesul de debug
// F10 sare un pas
// F11 intram in profunzie

const removeFromBiggest = (num1, num2) => {
    if (num1 < num2) {
        return num2 - num1;
    }

    return num1 - num2;
}

logStuff(removeFromBiggest(5, 7));
logStuff(removeFromBiggest(15, 7));
logStuff(removeFromBiggest(-5, -3));

function verifyNumber(number) {
    if (number > 10 && number <= 50) {
        return 'Da';
    }
    return 'Nu';
}

logStuff(verifyNumber(90)); // Nu
logStuff(verifyNumber(10.0001)); //Da
logStuff(verifyNumber(10)); //Nu
logStuff(verifyNumber(10)); //Da

const puppy = {
    name: 'Rex',
    age: 1,
    favouriteToys: ['Duck', 'Cat', 'Bone'],
    bark: function () {
        console.log('Ham!');
    },
    barkLouder() {
        console.log('HAM!!!');
    },
};

const anotherPuppy = puppy;
anotherPuppy.name = 'Azorel';
console.log(puppy);
console.log(anotherPuppy);
puppy.bark();
anotherPuppy.bark();
anotherPuppy.barkLouder();

// Copierea functiilor

function nameDog(name) {
    return `Dog ${name} says hi!`;
}

const rex = nameDog('Rex');
console.log(rex);

const nameDogCopy = nameDog;
console.log(nameDogCopy);
console.log(nameDogCopy('Azorel'));

// Callback functions

function addOne(value) {
    return value + 1;
}

function showValue(value, functieCallBack) {
    return functieCallBack(value);
}

const totalValueCallBack = showValue(5, addOne);
console.log(totalValueCallBack);

const menu = {
    burger: 'Big Mac',
    juice: 'Cola',
    size: 'Big',
    price: 35,
    'french-fries': 'No salt'
}

console.log(menu.burger);
console.log(menu["french-fries"]);

const num3 = 3;
const letA = 'A';
let stringConcat = 'x';
stringConcat = stringConcat + num3;
stringConcat += letA;
console.log(stringConcat);

const firstWord = 'Primul';
const link = 'si';
const secondWord = 'al doilea';
const concatenatedString = `${firstWord} ${link} ${secondWord}`;
console.log(concatenatedString.toUpperCase());

const createString = (array) => {
    let string = '';
    for (let i = 0; i < array.length; i++) {
        string += array[i] + " ";
    }
    return string;
}

console.log(createString([3, '5', 7, 2, 1]));
console.log(createString([2, '3425', 17, 22, 1]));

const reverseArray = array => {
    const newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log([5, 4, 3].reverse());

/**
 * Smart Home App
 */

let lightsValue = false;
const toggleLights = () => {
    lightsValue = !lightsValue;

    return lightsValue ? 'Luminile au fost aprinse' : 'Luminile au fost stinse';
}

let acValue = false;
const toggleAc = () => {
    acValue = !acValue;

    return acValue ? 'Aerul conditionat a fost pornit' : 'Aerul conditionat a fost oprit';
}

let curtainsValue = true;
const toggleCurtains = () => {
    curtainsValue = !curtainsValue;

    return curtainsValue ? 'Draperiile au fost deschise' : 'Draperiile au fost inchise';
}

let windowsValue = false;
const toggleWindows = () => {
    windowsValue = !windowsValue;

    return windowsValue ? 'Geamurile au fost deschise' : 'Geamurile au fost inchise';
}

const smoke = () => {
    if (acValue) {
        toggleAc();
    }
    if (!curtainsValue) {
        toggleCurtains();
    }
    if (!windowsValue) {
        toggleWindows();
    }

    console.log('Smoking...');
}

console.log(toggleLights());
console.log(smoke());
