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

accountSettingsButton.addEventListener('blur', function {
  accountSettingsList.style.display = "none";
})

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

const commentButton = document.getElementById("commentButton");
const commentInput = document.getElementById("commentInput");

const commentMessage = document.getElementById("commentMessage");
const userCommentList = document.getElementsByClassName("userComments")[0];

commentMessage.innerText =
  localStorage.getItem("comment") || commentMessage.innerText;

let showComments = true;

commentButton.addEventListener("click", function () {
  commentInput.focus();
  // commentInput.blur() // reversul functiei focus

  if (showComments) {
    userCommentList.style.display = "block";
    commentInput.focus();
  } else {
    userCommentList.style.display = "none";
  }

  showComments = !showComments;
});

function setComment() {
  const newComment = document.createElement("div");
  const newCommentMessageContent = `
  <div class="commentContent">
              <div class="profileUserComment">
                <a href=""
                  ><img
                    src="../assests/profile.png"
                    alt="user profile"
                    class="profileImage"
                /></a>
                <span>User name</span>
              </div>

              <div class="userCommentText">
                <span id="commentMessage"
                  >${commentInput.value}</span
                >
                <div class="emojiReaction">🥳</div>
                <strong class="removeCommentButton">Remove this comment</strong>
              </div>

              <div class="commentReaction">
                <strong class="commentReactionButton">Like</strong>
                <strong class="commentReactionButton">Dislike</strong>
                <strong class="commentReactionButton">Comment</strong>
              </div>
            </div>`;
  newComment.innerHTML = newCommentMessageContent;
  userCommentList.insertAdjacentElement("afterbegin", newComment);
  localStorage.setItem("comment", JSON.stringify(commentInput.value));
  commentInput.value = "";
  addRemoveCommentListeners();
}

commentInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setComment();
    this.blur();
  }
});

const comentInputButton = document.getElementsByClassName(
  "insertCommentButton"
)[0];

comentInputButton.addEventListener("click", setComment);

function addRemoveCommentListeners() {
  const commentContentList = Array.from(
    document.getElementsByClassName("commentContent")
  );

  const removeCommentButtons = Array.from(
    document.getElementsByClassName("removeCommentButton")
  );

  commentContentList.forEach((commentContent, index) => {
    commentContent.addEventListener("mouseover", function () {
      removeCommentButtons[index].style.display = "inline-block";
    });

    commentContent.addEventListener("mouseout", function () {
      removeCommentButtons[index].style.display = "none";
    });
  });

  removeCommentButtons.forEach((removeCommentButton, index) => {
    removeCommentButton.addEventListener("click", () => {
      commentContentList[index].remove();
    });
  });
}

addRemoveCommentListeners();

// de rezolvat cu local storage pt a afisa corect mesajele salvate

const infoIcon = document.getElementsByClassName("infoIcon")[0];
const infoMessage = document.getElementsByClassName("infoMessage")[0];

let infoIconDisplayTimeout;

infoIcon.addEventListener("mouseover", function () {
  infoIconDisplayTimeout = setTimeout(() => {
    infoMessage.style.display = "block";
  }, 1000);
});

infoIcon.addEventListener("mouseout", function () {
  clearTimeout(infoIconDisplayTimeout);
  infoMessage.style.display = "none";
});

infoIcon.addEventListener("click", () => {
  if (infoMessage.style.display === "block") {
    infoMessage.style.display = "none";
  } else {
    infoMessage.style.display = "block";
  }
});

infoIcon.addEventListener('blur', () => {
  infoMessage.style.display = "none";
})

const profileOptionsDropdown = document.getElementsByClassName('profileOptionsDropdown')[0];
const profileOptionsButton = document.getElementsByClassName('profileOptions')[0];

profileOptionsButton.addEventListener('click', function() {
  if(profileOptionsDropdown.style.display === 'none') {
    profileOptionsDropdown.style.display = 'flex'
  } else {
    profileOptionsDropdown.style.display = 'none';
  }
})