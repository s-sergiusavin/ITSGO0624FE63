const accountSettingsButton = document.getElementById("accountSettingsButton");
const accountSettingsList = document.getElementsByClassName(
  "accountSettingsMenu"
)[0];
const logoutButton = document.getElementById("logoutButton");

accountSettingsButton.addEventListener("click", function () {
  if (accountSettingsList.style.display !== "flex") {
    accountSettingsList.style.display = "flex";
  } else {
    accountSettingsList.style.display = "none";
  }
});

const noOfLikesElem = document.getElementById("likesNumber");
const noofSharesElem = document.getElementById("sharesNumber");

function getNumberOffLikes() {
  noOfLikesElem.innerText = noOfLikesElem.innerText || 21;
}

function getNumberOfShares() {
  noofSharesElem.innerText = noofSharesElem.innerText || 27;
}

function getData() {
  getNumberOffLikes();
  getNumberOfShares();
}

getData();

const likeButton = document.getElementById("likeButton");
const shareButton = document.getElementById("shareButton");
const numberOfSharesBadge = document.getElementById('noOfSharesBadge')

let isLiked = false;
let isShared = false;

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;

  // if (isLiked) {
  //   noOfLikesElem.innerText = Number("noOfLikesElem.innerText") + 1;
  // } else {
  //   noOfLikesElem.innerText = Number("noOfLikesElem.innerText") - 1;
  // }

  noOfLikesElem.innerText = isLiked
    ? Number("noOfLikesElem.innerText") + 1
    : Number("noOfLikesElem.innerText") - 1;
  this.classList.toggle("touched");
});

shareButton.addEventListener("click", function () {
  isShared = !isShared;

  noofSharesElem.innerText = isShared
    ? Number("noOfShareElem.innerText") + 1;
  this.classList.add("touched");
});

const commentButton = document.getElementById('commentButton');
