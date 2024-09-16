/**
 * Test object demo
 */

const example = {
    title: 'Example object',
    sayHi() {
        console.log('Hi');
    }
}

console.log(example.title);
example.sayHi();
console.log(example);
console.dir(example);

console.log(document);
console.dir(document);

/**
 * Methods to get html elements by any selector
 * querrySelector/querrySelectorAll
 */

// returneaza PRIMUL element pe care il gaseste

const redSquare = document.querySelector('.redSquare');
console.log(redSquare);
console.dir(redSquare);

redSquare.style.backgroundColor = 'green';

// css background-color => backgroundColor
// css padding-left => paddingLeft

const blueSquares = document.querySelectorAll('.blueSquare'); //cauta dupa clasa
// const blueSquares = document.querySelectorAll('#blueSquare'); //cauta dupa id
// const blueSquares = document.querySelectorAll('div'); //cauta dupa numele tag-ului
console.dir(blueSquares);

blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';

blueSquares.forEach(e => e.style.backgroundColor = 'orange');

/**
 * Method to get element by id
 * getElementById
 */

const changedListElem = document.getElementById('changedList');
console.dir(changedListElem);
changedListElem.style.border = '1px solid black';
changedListElem.style.backgroundColor = 'lightBlue';

/**
 * Method to get elements by tag name
 */

const paragraphElem = document.getElementsByTagName('p');
console.dir(paragraphElem);

paragraphElem[1].innerText = 'This text was added later with JS';
paragraphElem[2].style.textTransform = 'uppercase';

/**
 * Method to get elements by class name
 * getElementsByClassName
 */

const styledMessages = document.getElementsByClassName('styledMessages');
console.dir(styledMessages);

// styledMessages.forEach(e => );

for (let i = 0; i < styledMessages.length; i++) {
    const tagName = styledMessages[i].tagName;
    styledMessages[i].innerText = `This message was a ${tagName} and was styled with JS`;
}

const greenSquare = document.querySelector('.greenSquare');

function changeGreenSquare() {
    greenSquare.style.backgroundColor = 'lightGreen';
    greenSquare.style.border = ''; // was a bug before adding these lines :))))
    greenSquare.innerText = '';
}

function mouseEnter() {
    greenSquare.style.backgroundColor = 'purple';
    greenSquare.style.border = '';
    greenSquare.innerText = '';
}

function mouseLeave() {
    greenSquare.style.backgroundColor = 'white';
    greenSquare.style.border = '3px solid black';
    greenSquare.innerText = 'black';
}

const focusInput = () => {
    greenSquare.style.backgroundColor = 'red';
    document.getElementsByTagName('label')[0].innerText = 'Changed after focus event';
}

const blurInput = () => {
    greenSquare.style.backgroundColor = 'black';
}

console.log(window);

const onKeyDown = () => {
    greenSquare.style.backgroundColor = 'teal';
    console.log('on key down');
}

const demoKeyTextElem = document.getElementById('demoKeyTest');

const onKeyUp = () => {
    greenSquare.style.backgroundColor = 'pink';
    demoKeyTextElem.innerHTML = document.getElementById('demoKey').value;
    console.dir(document.getElementById('demoKey'));
}

const doSomething = () => {
    greenSquare.style.backgroundColor = 'green';
    greenSquare.style.border = '';
    greenSquare.innerHTML = '';
}

const readInput = () => {
    const readValueInputElem = document.getElementById('readInputValue');
    document.getElementById('textFromReadInput').innerHTML = readValueInputElem.value;
}

const changeThisContent = () => {
    document.getElementsByClassName('innerHtmlMessage')[0].innerHTML = 'This text was <strong>changed</strong> by <u>js</u>';
}

const oznParent = document.getElementsByClassName("ozn");
const oznChildrens = oznParent[0].children;

let maxWidth = 0;
for (let i = 0; i < oznChildrens.length; i++) {
    if (oznChildrens[i].offsetWidth > maxWidth) {
        maxWidth = oznChildrens[i].offsetWidth;
    }
}

oznParent[0].style.maxWidth = maxWidth + "px";

let oznMove = false;

const moveOZN = () => {
    if (oznMove) {
        return;
    }
    oznMove = true;
    oznParent[0].style.animation = 'moveFromLeftToCenter 5s forwards';
}

const oznAnimationEnd = () => {
    oznParent[0].onanimationend = downRay();
}

const oznDownRay = document.getElementsByClassName("oznRay");

const downRay = () => {
    oznDownRay[0].style.animation = 'downRay 5s forwards';
}

const textOZN = document.getElementsByClassName("oznText");

const shrinkText = () => {
    textOZN[0].style.animation = 'shrinkText 1s forwards';
    setTimeout(changeText, 2000);
}

const changeText = () => {
    textOZN[0].innerText = `Hello ITSchool, I'm watching you for a long time`;
    textOZN[0].style.animation = 'growText 1s forwards';
    setTimeOut(upRay, 2000);
}

const upRay = () => {
    oznDownRay[0].style.animation = 'upRay 5s forwards';
}

const moveOZNRight = () => {

}