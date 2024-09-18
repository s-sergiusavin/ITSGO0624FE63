const addButtonElement = document.getElementsByClassName("addButton")[0];
const containerElement = document.getElementsByClassName("container")[0];
const removeButtonElement = document.getElementById("button");

function addBoxElement() {
  const newBoxElement = document.createElement("div");
  newBoxElement.className = "box";
  containerElement.appendChild(newBoxElement);
}

function removeBoxElement() {
  const newBoxElement = document.getElementsByClassName("box")[0];
  if (containerElement.length === 0) {
    alert("There is nothing to remove!");
  } else {
    containerElement.removeChild(newBoxElement);
  }
}

// addButtonElement.addEventListener("click", addBoxElement);
// addButtonElement.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     addBoxElement();
//   }
// });

addButtonElement.addEventListener("click", function () {
  addBoxElement();
});

removeButtonElement.addEventListener("click", function () {
  removeBoxElement();
});
