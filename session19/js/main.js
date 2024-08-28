function logStuff(stuff) {
  console.log(`Rezultatul este: ${stuff}.`);
}

logStuff(10);

let sum = 0;

function addToSum(number) {
  return (sum += number);
  // return sum = sum + number;
}

addToSum(3);
logStuff(addToSum(10));

// sum = 13;
let totalSum = addToSum(10);
addToSum(5);
logStuff(totalSum);
logStuff(sum);

// const sumNumbers = function(number1, number2) {
//     return number1 + number2;
// }

const sumNumbersArrow = (number1, number2) => {
  return number1 + number2;
};

let sumTwoNumbersValue = sumNumbersArrow(5, 10);
console.log(sumTwoNumbersValue);
sumTwoNumbersValue = sumNumbersArrow(10, 10);
console.log(sumTwoNumbersValue);

let sumNumbersStoredGlobally;
const sumTwoNumbersAlternative = (num1, num2) => {
  sumNumbersStoredGlobally = num1 + num2;
};
sumTwoNumbersAlternative(3, 4);
logStuff(sumNumbersStoredGlobally);

const verifyEquality = (num1, num2) => {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
};

console.log(verifyEquality(3, 4));
console.log(verifyEquality(3, 3));

const verifyEqualitySimplified = (num1, num2) => {
  return num1 === num2;
};

console.log(verifyEquality(2, 2));
console.log(verifyEqualitySimplified(2, 2));

const doubleValue = (value) => {
  logStuff("Sergiu");
  return value * 2;
  logStuff("Sergiu"); // tot ce este dupa return, nu va fi executat
  return "Sergiu";
};

logStuff(doubleValue(3));

const addEvenValues = (val1, val2) => {
  if (val1 % 2 === 0 && val2 % 2 === 0) {
    return val1 + val2;
  }

  return "Numerele nu sunt pare";
};

logStuff(addEvenValues(4, 6)); // 10
logStuff(addEvenValues(4, 3)); // numerele nu sunt pare

const greet = (name = "John Smith") => {
  console.log(`Salut ${name}`);
};

greet();
greet("Mihai");
greet(" ");
greet("%#@^$&#");
greet(57);
greet(null);
greet(undefined);

// debugger;
// F8 revine la normal, iese din procesul de debug
// F10 sare un pas
// F11 intram intr-o functie

const removeFromBiggest = (num1, num2) => {
  if (num1 < num2) {
    return num2 - num1;
  }

  return num1 - num2;
};

logStuff(removeFromBiggest(5, 7)); // 2
logStuff(removeFromBiggest(15, 7)); // 8
logStuff(removeFromBiggest(-5, -3)); // 2

function verifyNumber(number) {
  if (number > 10 && number <= 50) {
    return "Da";
  } else {
    return "Nu";
  }
}

logStuff(verifyNumber(90)); // Nu
logStuff(verifyNumber(10.0001)); // Da
logStuff(verifyNumber(10)); // Nu
logStuff(verifyNumber(50)); // Da

const puppy = {
  name: "Rex",
  age: 1,
  favouriteToys: ["Duck", "Cat", "Bone"],
  bark: function () {
    console.log("Ham!");
  },
  barkLoud() {
    console.log("HAM!!!");
  },
};

const anotherPuppy = puppy;
anotherPuppy.name = "Azorel";
console.log(puppy);
console.log(anotherPuppy);
puppy.bark();
anotherPuppy.bark();
anotherPuppy.barkLoud();

// Copierea functiilor

function nameDog(name) {
  return `Dog ${name} says hi!`;
}
const rex = nameDog("Rex");
console.log(rex);

const nameDogCopy = nameDog;
console.log(nameDogCopy);
console.log(nameDogCopy("Azorel"));

// Callback functions

function addOne(value) {
  return value + 1;
}

function showValue(value, functieCallback) {
  return functieCallback(value);
}

const totalValueCallback = showValue(5, addOne);
console.log(totalValueCallback);

const menu = {
  burger: "Big Mac",
  juice: "Cola",
  size: "Big",
  price: 35,
  "french-fries": "No salt",
};

console.log(menu.burger);
console.log(menu["french-fries"]);

const num3 = 3;
const letA = "a";
let stringConcat = "x";
stringConcat = stringConcat + num3;
stringConcat += letA;
console.log(stringConcat);

const firstWord = "Primul";
const link = "si";
const secondWord = "al doilea";
const concatenatedString = firstWord + " " + link + " " + secondWord;
console.log(concatenatedString.toUpperCase());
console.log(concatenatedString);

const createString = (array) => {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    string = string + array[i] + " ";
  }

  return string;
};

console.log(createString([3, "5", 7, 2, 1])); //35721
console.log(createString([2, "3425", 17, 22, 1])); //2342517221

const reverseArray = (array) => {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
};

console.log(reverseArray([1, 2, 3, 4]));
console.log([5, 4, 3].reverse());

/**
 * Smart Home App
 */

let lightsValue = false;
let acValue = false;
let curtainsValue = false;
let windowsValue = false;

const toggleLights = () => {
  // if(lightsValue === true) {
  //     lightsValue = false;
  // } else {
  //     lightsValue = true;
  // }

  lightsValue = !lightsValue;

  if (lightsValue) {
    return "Luminile au fost aprinse";
  } else {
    return "Luminile au fost stinse";
  }
};

const toggleAc = () => {
  acValue = !acValue;

  if (acValue) {
    return "Ac-ul a fost pornit";
  } else {
    return "Ac-ul a fost oprit";
  }
};

const toggleCurtains = () => {
  curtainsValue = !curtainsValue;

  if (curtainsValue) {
    return "Draperiile au fost deschise";
  } else {
    return "Draperiile au fost inchise";
  }
};

const toggleWindows = () => {
  windowsValue = !windowsValue;

  if (windowsValue) {
    return "Geamurile au fost deschise";
  } else {
    return "Geamurile au fost inchise";
  }
};

const smoke = () => {
  if (acValue) {
    toggleAc();
  }

  if (!curtainsValue) {
    toggleCurtains();
  }

  if (windowsValue === false) {
    toggleWindows();
  }

  console.log("Smoking...");

  if ("Winter") {
    toggleWindows();
  }
};

console.log(toggleLights());
console.log(smoke());
