const demoBoxElem = document.getElementById('testBox');
console.dir(demoBoxElem);

demoBoxElem.className = 'red';
demoBoxElem.className = 'red blue green';
demoBoxElem.className = '';

demoBoxElem.classList.add('blue');
demoBoxElem.classList.add('red');
demoBoxElem.classList.remove('blue');
demoBoxElem.classList.toggle('blue');
demoBoxElem.classList.toggle('blue');
demoBoxElem.classList.toggle('blue');

demoBoxElem.className = 'red dasf asdf';

/**
 * Get or Set attributes
 */

const demoImageElem = document.getElementById('demoImage');
const newImageElem = document.getElementById('newImage');

const imgSrc = demoImageElem.getAttribute('src');
console.log(imgSrc);
newImageElem.setAttribute('src', imgSrc);
newImageElem.setAttribute('src', 'https://wallpapers.com/images/high/adorable-puppy-pictures-1000-x-1500-z9xz3uqzcnjvkqmm.webp');

const ulElem = document.getElementsByTagName('ul')[0];
// ulElem.addEventListener('click', () => {
//     ulElem.classList.toggle('blue');
// });

const listItemsElements = document.querySelectorAll('li');
console.dir(listItemsElements)

listItemsElements.forEach( (listItem) => {
    // listItem.addEventListener('mouseover', function() {
    //     this.classList.add('red');
    // });

    // listItem.addEventListener('mouseout', function() {
    //     this.classList.remove('red');
    // });

    listItem.addEventListener('click', toggleListItems);
});

function toggleListItems() {
    const toggleValue = this.classList.toggle('red');
    console.log(toggleValue);
    if(toggleValue) {
        const span = document.createElement('span');
        span.innerText = 'x';
        this.appendChild(span);
    } else {
        this.getElementsByTagName('span')[0].remove();
        console.dir(this)
        console.dir(document)
    }
}

const clickMeElement = document.getElementById('clickMe');
clickMeElement.style.cursor = 'pointer';

const demoInputElement = document.getElementById('demoInput');

demoInputElement.addEventListener('keypress', function(event) {
    console.log(event)
    if(event.key === 'Enter' && demoInputElement.value.length > 3) {
        demoInputElement.style.background = 'lightgreen';
    }
})

const ulElement = document.getElementsByTagName('ul')[0]

clickMeElement.addEventListener('click', function() {
    const newLiElem = document.createElement('li');
    ulElement.appendChild(newLiElem);
    const liElements = document.getElementsByTagName('li');

    if (demoInputElement.value) {
        newLiElem.innerText = demoInputElement.value;
        demoInputElement.value = '';
    } else {
        newLiElem.innerText = 'Elem ' + liElements.length;
    } 
});

const toDoInputElement = document.getElementById('toDoInput');
const addButtonElement = document.getElementsByClassName('addButton')[0];
const toDoListElement = document.getElementsByClassName('toDoListItems')[0];

function checkPlan() {
    // returneaza o valoare booleana (adevarat || fals)
    const newListItemsNumber = document.getElementsByClassName('newListItems').length;
    return newListItemsNumber < 3;
    // if (newListItemsNumber < 3) {
    //     return true ;
    // } else {
    //     return false;
    // }
}

function addItemsInTheList() {
    const canAdd = checkPlan();
    if (canAdd) {
        if(toDoInputElement.value !== '') {
            const newListItemElement = document.createElement('li');
            newListItemElement.className = 'newListItems';
    
            toDoListElement.appendChild(newListItemElement);
            newListItemElement.innerText = toDoInputElement.value;
            toDoInputElement.value = '';
        } else {
            // alert('Te rugam sa introduci o valoare mai intai');
            console.log('Cod dupa alerta');
            // prompt('Te rugam sa introduci o valoare mai intai');
            confirm('Te rugam sa introduci o valoare mai intai');
            toDoInputElement.classList.toggle('blue');
        }
    } else {
        alert("Te rugam sa treci la un plan superior");
        toDoInputElement.value = "";
        console.log('Mesaj dupa alert')
    } 
}

addButtonElement.addEventListener('click', addItemsInTheList);
toDoInputElement.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        addItemsInTheList();
    }
});

/**
 * RegExp - Regular expressions
 * tipare care cauta anumite combinatii de caractere
 * https://regexr.com/
 * https://regex101.com/
 */

let string = 'abcdef';
let pattern = /abcc/;

console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

const myFormElement = document.getElementById('myForm');

myFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event)

    const emailAddressValue = event.target[0].value;
    console.log(emailAddressValue);

    if (regexEmailPattern.test(emailAddressValue)) {
        alert('Este email');
    } else {
        alert('Nu este email')
    }
})

