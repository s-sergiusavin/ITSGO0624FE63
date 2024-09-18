

document.addEventListener('DOMContentLoaded', function () {
    const descriptionText = `Planzoid is your new go-to tool for organizing tasks, managing deadlines, and boosting productivity. Whether you're juggling personal or professional projects, Planzoid offers a sleek and intuitive interface that helps you plan and prioritize with ease.`
    const descriptionElem = document.getElementById('description');

    let i = 0;
    function typeText() {
        if (i < descriptionText.length) {
            descriptionElem.textContent += descriptionText.charAt(i);
            i++;
            setTimeout(typeText, 50);
        } else {
            descriptionElem.style.borderRight = "none";
        }
    }

    descriptionElem.style.opacity = "1";
    typeText();
})

const toDoInput = document.getElementById('toDoInput');
const addButton = document.getElementsByClassName('addButton')[0];

addButton.addEventListener('click', function () {
    checkWordLength(toDoInput.value) !== '' ? addTask(toDoInput.value) : confirm("Please add a value");
    toDoInput.value = '';
})

toDoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && toDoInput.value !== '') {
        addTask(toDoInput.value);
        toDoInput.value = '';
    } else {
        toDoInput.value = checkWordLength(toDoInput.value);
    }
});

function checkWordLength(word) {
    if (word.length >= 30) {
        confirm("Your task is to long, please make it shorter than 30 chars");
        return word.substring(0, 30);
    }
    return word.substring(0, word.length);
}

let toDoListItems = document.getElementsByClassName('toDoListItems')[0];
let listItems = toDoListItems.querySelectorAll('div');

function addTask(task) {
    if (listItems.length >= 10) {
        confirm("You can add only 10 values");
        return;
    }
    const newListItem = document.createElement('div');
    newListItem.className = 'newListInputItem';

    const newListItemTask = document.createElement('p');
    newListItemTask.innerText = task;
    newListItemTask.className = 'newListInputItemTask';
    newListItem.appendChild(newListItemTask);
    toDoListItems.appendChild(newListItem);

    listItems = toDoListItems.querySelectorAll('div');
    addEvents();
}

function addEvents() {
    listItems.forEach(element => {
        element.addEventListener('mouseenter', function (event) {
            console.log('Called mouse enter')
            const newDoneButton = document.createElement('p');
            newDoneButton.style.cursor = 'pointer';
            newDoneButton.innerText = 'DONE';
            newDoneButton.className = 'newListInputItemDoneButton';
            this.appendChild(newDoneButton);
        });
        element.addEventListener('mouseout', function (event) {

        })
    });
}