import getGooglePhotos from "./google_photos.js"

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

const friends = {
    'Donald_Trump': {
        name: 'Donald Trump',
        friends_number: '5 friends',
        photo: '../assets/friends/donald.jpg',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #d10011 75%, #5170ed 85%, #2e58ff 100%)',
        background: 'https://i.ebayimg.com/images/g/6WQAAOSwRQFgmDnB/s-l1600.webp',
    },
    'Brad_Pitt': {
        name: 'Brad Pitt',
        friends_number: '∞',
        photo: '../assets/friends/brad.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #000000 75%, #c7101f 85%, #fa0014 100%)',
        background: 'https://images3.alphacoders.com/135/1350860.png',
    },
    'Jenna_Ortega': {
        name: 'Jenna Ortega',
        friends_number: '4998',
        photo: '../assets/friends/jenna_ortega.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #00d154 75%, #02c93e 85%, #6a00c7 100%)',
        background: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/jenna-ortega-beetlejuice.jpg',
    },
    'Joe_Biden': {
        name: 'Joe Biden',
        friends_number: 'null?',
        photo: '../assets/friends/joe.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #d10011 75%, #5170ed 85%, #2e58ff 100%)',
        background: 'https://i.ebayimg.com/images/g/6WQAAOSwRQFgmDnB/s-l1600.webp',
    },
    'Michael_Jackson': {
        name: 'Michael Jackson',
        friends_number: '1Milion',
        photo: '../assets/friends/michael.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #b164e8 75%, #5a1b87 85%, #36005c 100%)',
        background: 'https://cdn.media.amplience.net/i/naras/MichaelJackson-88701714.webp',
    },
    'Proxima_Centauri_Visitor': {
        name: 'Proxima Centauri Visitor',
        friends_number: '%Error%: %DataLost1LightYearAgo%',
        photo: '../assets/friends/unknown-friend.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #cccaca 75%, #6e6d6d 85%, #4d4d4d 100%)',
        background: 'https://cdn.mos.cms.futurecdn.net/36EFXMS9FEXVykNP8cFix7.jpg'
    },
    'Emma_Roberts': {
        name: 'Emma Roberts',
        friends_number: '3004',
        photo: '../assets/friends/emma_roberts.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #00b8e6 75%, #d92121 85%, #ff0000 100%)',
        background: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/05/Emma-Roberts-Getty-H-2023-2.jpg?w=1440&h=810&crop=1'
    },
    'Robert_De_Niro': {
        name: 'Robert De Niro',
        friends_number: '100',
        photo: '../assets/friends/robert_de_niro.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #012275 75%, #093ab8 85%, #0048ff 100%)',
        background: 'https://ew.com/thmb/X7LujF8yV7tLXfvW0slZUzh48zg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ROBERT-DE-NIRO_Goodfellas-ec9c2711908a47549ee4f94391e39ba0.jpg'
    },
    'Dwayne_Johnson': {
        name: 'Dwayne Johnson',
        friends_number: 'FAMILY',
        photo: '../assets/friends/dwayne_johnson.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #f7ab39 75%, #ffc061 85%, #ffcc80 100%)',
        background: 'https://www.investopedia.com/thmb/k8gYtYXc9dmzC9ovnoQQmMhausw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/INV_DwayneJohnson_GettyImages-2066801583-6476348964de431893b992034a3fb2e4.jpg'
    },
    'Chris_Evans': {
        name: 'Chris Evans',
        friends_number: '1k+ maybe more?',
        photo: '../assets/friends/chris_evans.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #008700 75%, #1ca61c 85%, #56d656 100%)',
        background: 'https://m.media-amazon.com/images/M/MV5BMDZlM2ZmNDAtNDI5Ny00NTdkLTlmYjctMzNhMDc1YmRiNDVmXkEyXkFqcGc@._V1_.jpg'
    },
    'Leonardo_Dicaprio': {
        name: 'Leonardo Dicaprio',
        friends_number: 'Fanbase memes',
        photo: '../assets/friends/leonardo_dicaprio.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #ff8c00 75%, #b5af00 85%, #fc9b23 100%)',
        background: 'https://masterpiecer-images.s3.yandex.net/56df5aaea7f611ee835c7e9c088801a1:upscaled'
    },
    'Arón_Piper': {
        name: 'Arón Piper',
        friends_number: 'Elite?',
        photo: '../assets/friends/aron_piper.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #fff9f2 75%, #f7ede1 85%, #e3d6c5 100%)',
        background: 'https://img2.rtve.es/i/?w=1600&i=1685007615194.jpg'
    },
    'André_Lamoglia': {
        name: 'André Lamoglia',
        friends_number: 'Elite?',
        photo: '../assets/friends/andre_lamoglia.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #fff9f2 75%, #f7ede1 85%, #e3d6c5 100%)',
        background: 'https://assets.capitalfm.com/2022/14/andr-lamoglia-and-manu-rios-are-close-friends-in-real-life-1649263272-view-0.jpg'
    },
    'Valentina_Zenere': {
        name: 'Valentina Zenere',
        friends_number: 'Elite?',
        photo: '../assets/friends/valentina_zenere.png',
        linear_gradient: 'linear-gradient(0deg, #2b2b2b 0%, #2b2b2b 50%, #fff9f2 75%, #f7ede1 85%, #e3d6c5 100%)',
        background: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/valentinazenere.jpg'
    },
    default: {
        name: 'Adrian Popa',
        friends_number: '5001 friends',
        photo: '../assets/profilePicture.png',
        background: '../assets/profile/background.jpg'
    }

}

const changeInfo = (id) => {
    const backgroundImg = document.querySelector('.bg-image');
    const profilePicture = document.querySelector('.profilePicture');
    const name = document.querySelector('.name');
    const friendsNumber = document.querySelector('.friend');
    const backgroundGradient = document.querySelector('.mainNav');
    backgroundImg.setAttribute('src', friends[id].background);
    profilePicture.setAttribute('src', friends[id].photo);
    name.innerText = friends[id].name;
    friendsNumber.innerText = friends[id].friends_number;
    backgroundGradient.style.background = friends[id].linear_gradient;
}

const hideInfo = () => {
    const editBtn = document.querySelector('.edit');
    const changeImgBtn = document.querySelector('.changeImage');
    const storyBtn = document.querySelector('.storyButton');
    const changeBtn = document.querySelector('.editButton');

    editBtn.style.display = 'none';
    changeImgBtn.style.display = 'none';
    storyBtn.innerHTML = '<span class="storyButton"><i class="bi bi-person-fill-add"></i> Add friend</span>';
    changeBtn.innerHTML = '<span class="editButton"><i class="bi bi-envelope-plus"></i> Send a message</span>';
}

const loadProfile = () => {
    const id = getQueryParams();
    const friend = friends[id] || friends['default'];
    if (friend !== friends.default) {
        document.title = document.title.replace('My Profile', friend.name);
        hideInfo();
        changeInfo(id);
        loadImages(id);
        // loadPosts(id); // abandoned, not sync with the server
    }
}

async function loadImages(searchTerm) {
    const friend = searchTerm.replace(" ", "_");
    const friendData = friends[friend];

    getGooglePhotos(searchTerm, 9).then(data => {
        Array.from(data).forEach(elem => {
            createMarkup(elem, searchTerm);
        })
    })
}

const createMarkup = (elem, name) => {
    const parent = document.querySelectorAll(".imgWrapper")[1];
    const img = document.createElement("img");
    img.setAttribute("src", elem);
    img.setAttribute("alt", name);
    img.classList.add('image');
    parent.appendChild(img);
}

window.onload = loadProfile();