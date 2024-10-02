const accountSettingsButton = document.getElementById('accountSettingsButton');
const logoutButton = document.getElementById('logoutButton');
const accountSettingsList = document.getElementsByClassName('accountSettingsMenu')[0];

accountSettingsButton.addEventListener('click', function () {
    if (accountSettingsList.style.display === 'flex') {
        accountSettingsList.style.display = 'none';
    } else {
        accountSettingsList.style.display = 'flex';
    }
});

accountSettingsButton.addEventListener('blur', function () {
    accountSettingsList.style.display = 'none';
})

logoutButton.addEventListener('click', () => {
    window.open('../index.html', '_self');
})

const noOfLikesElem = document.getElementById('likesNumber');
const noOfSharesElem = document.getElementById('sharesNumber');

function getNumberOfLikes() {
    noOfLikesElem.innerText = noOfLikesElem.innerText || 21;
}

function getNumberOfShares() {
    noOfSharesElem.innerText = noOfSharesElem.innerText || 27;
}

function getData() {
    getNumberOfLikes()
    getNumberOfShares()
}

getData();

let isLiked = false;
let isShared = false;

const likeButton = document.getElementById('likeButton');
const shareButton = document.getElementById('shareButton');
const noOfSharesBadge = document.getElementsByClassName('noOfSharesBadge')[0];
noOfSharesBadge.innerText = 0;

likeButton.addEventListener('click', function () {
    isLiked = !isLiked;

    // if (isLiked) {
    //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1;
    // } else {
    //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1;
    // }

    noOfLikesElem.innerText = isLiked ? Number(noOfLikesElem.innerText) + 1 : Number(noOfLikesElem.innerText) - 1;
    this.classList.toggle('touched');
})

shareButton.addEventListener('click', function () {
    isShared = !isShared;

    noOfSharesElem.innerText = Number(noOfSharesElem.innerText) + 1;
    noOfSharesBadge.innerText = Number(noOfSharesBadge.innerText) + 1;
    this.classList.add('touched');
})

const commentButton = document.getElementById('commentButton');
const commentInput = document.getElementById('commentInput');
const userCommentList = document.getElementsByClassName('userComments')[0];

const commentMessage = document.getElementById('commentMessage');

commentMessage.innerText = localStorage.getItem('comment').replace('"', '').replace('"', '') || commentMessage.innerText;

let showComments = true;

commentButton.addEventListener('click', function () {
    if (showComments) {
        userCommentList.style.display = 'block';
        commentInput.focus();
    } else {
        userCommentList.style.display = 'none';
    }

    showComments = !showComments;
});

function setComment() {
    const newComment = document.createElement('div');

    const newCommentUsername = Date.now();
    const newCommentMessageContent = `<div class="commentContent">
                        <div class="profileUserComment">
                            <a href="">
                                <img src="../assets/profilePicture.png" alt="user profile" class="profileImage">
                            </a>
                            <span>${newCommentUsername}</span>
                        </div>


                        <div class="userCommentText">
                            <span id="commentMessage">
                                ${commentInput.value}
                            </span>
                            <div class="emojiReaction">😂</div>
                            <strong class="removeCommentButton">Remove this comment</strong>
                        </div>

                        <div class="commentReaction">
                            <strong class="commentReactionButton">Like</strong>
                            <strong class="commentReactionButton">Dislike</strong>
                            <strong class="commentReactionButton">Comment</strong>
                        </div>
                    </div>`
    newComment.innerHTML = newCommentMessageContent;
    localStorage.setItem('comment', JSON.stringify(commentInput.value));
    commentInput.value = '';
    userCommentList.insertAdjacentElement('afterbegin', newComment);
    addRemoveCommentListeners();
}



commentInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        setComment();
        this.blur();
    }
});

const commentInputButton = document.getElementsByClassName('insertCommentButton')[0];

commentInputButton.addEventListener('click', setComment);

function addRemoveCommentListeners() {
    const commentTextList = Array.from(document.getElementsByClassName('commentContent'));

    const removeCommentButtons = Array.from(document.getElementsByClassName('removeCommentButton'));

    commentTextList.forEach((commentContent, index) => {

        commentContent.addEventListener('mouseover', function () {
            removeCommentButtons[index].style.display = 'inline-block';
        });

        commentContent.addEventListener('mouseout', function () {
            removeCommentButtons[index].style.display = 'none';
        });

    });

    removeCommentButtons.forEach((removeCommentButton, index) => {
        removeCommentButton.addEventListener('click', function () {
            commentTextList[index].style.display = 'none';
        });
    });
}

addRemoveCommentListeners();

const infoIcon = document.getElementsByClassName('infoIcon')[0];
const infoMessage = document.getElementsByClassName('infoMessage')[0];

let infoIconDisplayTimeount;

infoIcon.addEventListener('mouseover', function () {
    infoIconDisplayTimeount = setTimeout(() => {
        infoMessage.style.display = 'block';
    }, 1000);
});

infoIcon.addEventListener('mouseout', function () {
    clearTimeout(infoIconDisplayTimeount);
    infoMessage.style.display = 'none';
});


infoIcon.addEventListener('click', () => {
    infoMessage.style.display === 'none' ? infoMessage.style.display = 'block' : infoMessage.style.display = 'none';
})

infoIcon.addEventListener('blur', () => {
    infoMessage.style.display = 'none';
});

const profileOptionsDropdown = document.getElementsByClassName('profileOptionsDropdown')[0];
const profileOptionsButton = document.getElementsByClassName('profileOptions')[0];

profileOptionsButton.addEventListener('click', function () {
    profileOptionsDropdown.style.display === 'flex' ? profileOptionsDropdown.style.display = 'none' : profileOptionsDropdown.style.display = 'flex';
});

// profileOptionsButton.addEventListener('blur', (event) => {
//     profileOptionsDropdown.style.display = 'none';
// });

const removePostButton = document.getElementById('removePostButton');

window.addEventListener('click', (event) => {
    if (event.target.id !== 'removePostButton' && event.target.className !== 'bi bi-three-dots') {
        profileOptionsDropdown.style.display = 'none';
    }
});

removePostButton.addEventListener('click', () => {
    document.getElementsByClassName('post')[0].remove();
});

const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('keydown', function (event) {
    // Filtrarea pe FE

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

    // Ne va returna intotdeauna numai rezultatele in care termenul cautat este 100% identic cu valoarea proprietatii
    // setTimeout(() => {
    //     const filtredResults = data.filter( post => post.username === event.target.value);
    //     console.log(filtredResults);
    // });

    setTimeout(() => {
        const filtredResults = data.filter(post => post.username.includes(event.target.value));
        console.log(filtredResults);
    })

    // Filtrare pe BE
    filterData(event.target.value).then(data => {
        // manipularea datelor si afisare
    })
});

async function filterData(params) {
    const filteredPostUrl = `GET_DATA_URL?searchTerm=${params}`
    const response = await fetch(filteredPostUrl);

    return response.json();
}















// de rezolvat cu local storage pentru a afisa corect mesajele salvate