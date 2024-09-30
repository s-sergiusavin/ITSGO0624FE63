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

logoutButton.addEventListener("click", () => {
  window.open("../login.html", "_self");
});

const noOfLikesElem = document.getElementById("likesNumber");
const noOfSharesElem = document.getElementById("sharesNumber");

function getNumberOfLikes() {
  noOfLikesElem.innerText = noOfLikesElem.innerText || 21;
}

function getNumberOfShares() {
  noOfSharesElem.innerText = noOfSharesElem.innerText || 27;
}

function getData() {
  getNumberOfLikes();
  getNumberOfShares();
}

getData();

const likeButton = document.getElementById("likeButton");
const shareButton = document.getElementById("shareButton");
const noOfSharesBadge = document.getElementsByClassName("noOfSharesBadge")[0];
noOfSharesBadge.innerText = 0;

let isLiked = false;
let isShared = false;

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;

  //   if (isLiked) {
  //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1;
  //   } else {
  //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1;
  //   }

  noOfLikesElem.innerText = isLiked
    ? Number(noOfLikesElem.innerText) + 1
    : Number(noOfLikesElem.innerText) - 1;

  this.classList.toggle("touched");
});

shareButton.addEventListener("click", function () {
  noOfSharesElem.innerText = Number(noOfSharesElem.innerText) + 1;
  noOfSharesBadge.innerText = Number(noOfSharesBadge.innerText) + 1;

  this.classList.add("touched");
});

const commentButton = document.getElementById('commentButton')
const commentInput = document.getElementById('commentInput');

const commentMessage = document.getElementById('commentMessage');
const removeCommentButton = document.getElementById('removeCommentButton')

commentMessage.innerText = localStorage.getItem('comment') || commentMessage.innerText;

commentButton.addEventListener('click', function() {
    commentInput.focus()
    // commentInput.blur() // reversul functiei focus
})

function setComment() {
    commentMessage.innerText = commentInput.value;
    localStorage.setItem('comment', JSON.stringify(commentInput.value))
    commentInput.value = '';
}

commentInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        setComment();
        this.blur();
    }
})
