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

accountSettingsButton.addEventListener("blur", function () {
  accountSettingsList.style.display = "none";
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

const commentButton = document.getElementById("commentButton");
const commentInput = document.getElementById("commentInput");

const commentMessage = document.getElementById("commentMessage");
const userCommentList = document.getElementsByClassName("userComments")[0];

commentMessage.innerText =
  localStorage.getItem("comment") || commentMessage.innerText;

let showComments = true;

commentButton.addEventListener("click", function () {
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

  const newCommentUsername = Date.now();
  const newCommentMessageContent = `
  <div class="commentContent">
              <div class="profileUserComment">
                <a href=""
                  ><img
                    src="../assests/profile.png"
                    alt="user profile"
                    class="profileImage"
                /></a>
                <span>${newCommentUsername}</span>
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

infoIcon.addEventListener("blur", () => {
  infoMessage.style.display = "none";
});

const profileOptionsDropdown = document.getElementsByClassName('profileOptionsDropdown')[0];
const profileOptionsButton = document.getElementsByClassName('profileOptions')[0];

profileOptionsButton.addEventListener('click', function() {
  if (profileOptionsDropdown.style.display === 'flex') {
    profileOptionsDropdown.style.display = 'none'
  } else {
    profileOptionsDropdown.style.display = 'flex'
  }
})

window.addEventListener('click', (event) => {
  if (event.target.id !== "removePostButton" && event.target.className !== 'bi bi-three-dots') {
    profileOptionsDropdown.style.display = 'none'
  }
})

// profileOptionsButton.addEventListener('blur', (event) => {
//   console.dir(document.activeElement)
//   profileOptionsDropdown.style.display = 'none'
// })

const removePostButton = document.getElementById('removePostButton');

removePostButton.addEventListener('click', () => {
  document.getElementsByClassName('post')[0].remove();
})

const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('keydown', function(event) {
  // Filtrare pe FE

  const data = [
    {
      username: 'Username 1',
      date: '32 JUL 2024',
      likes: 10,
      shares: 15,
      comments: [],
      title: 'Ceva',
      description: 'Altceva'
    },
    {
      username: 'Username 2',
      date: '32 JUL 2024',
      likes: 20,
      shares: 25,
      comments: [],
      title: 'Titlu 2',
      description: 'Description 2'
    }
  ]

  // Ne va returna numai rezultatele in care termenul cautat este 100% identic cu valoarea proprietatii
  // setTimeout( () => {
  //   const filtredResults = data.filter( post => post.username === event.target.value)
  //   console.log(filtredResults)
  // })

  setTimeout(() => {
    const filtredResults = data.filter(post => post.username.includes(event.target.value))
    console.log(filtredResults)
  })

  // Filtrare pe BE
  filterData(event.target.value).then( data => {
    // manipularea datelor si afisarea
  })
})

async function  filterData(searchTerm) {
  const filteredPostUrl = `GET_DATA_URL?searchTerm=${searchTerm}`
  const response = await fetch(filteredPostUrl)

  return response.json()
}



