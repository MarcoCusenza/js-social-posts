const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// PROGRAMMA
fillPage(posts);
// END PROGRAMMA


// FUNZIONI
function generatePost(post) {

    const { id, content, media, author, likes, created } = post;

    const date = created;
    document.getElementById("container").innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${author.image}" alt="${getInitials(author.name)}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${timeFrom(date)}, il giorno ${createDate(date).getDay()}/${createDate(date).getMonth()}/${createDate(date).getFullYear()}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="${id}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter" id="likes-counter-${id}">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div>
            </div>
        </div>
    `;
}

function fillPage(posts) {
    for (let i = 0; i < posts.length; i++) {
        generatePost(posts[i]);
    }
    //like cliccabili
    const likeButtons = document.getElementsByClassName(`like-button`);
    const likeCounters = document.getElementsByClassName(`js-likes-counter`);
    for (let i = 0; i < likeButtons.length; i++) {
        likeButtons[i].addEventListener("click", function () {
            if (likeButtons[i].classList.contains("like-button--liked") == false) {
                likeButtons[i].classList.add("like-button--liked");
                likeCounters[i].innerHTML = parseInt(likeCounters[i].innerHTML) + 1;
            } else {
                likeButtons[i].classList.remove("like-button--liked");
                likeCounters[i].innerHTML = parseInt(likeCounters[i].innerHTML) - 1;
            }
        });
    }
}

function timeFrom(date) {
    const today = new Date();
    const targetDate = createDate(date);
    const minutes = Math.ceil(Math.abs(today - targetDate) / (1000 * 60));
    if ((minutes / (60 * 24)) > 365) { //se sono anni
        return `${Math.ceil(Math.abs(minutes / (60 * 24 * 365)))} anni fa`
    } else if (minutes / (60 * 24) > 30) { //se sono mesi
        return `${Math.ceil(Math.abs(minutes / (60 * 24 * 30)))} mesi fa`
    } else if ((minutes / 60) > 24) { //se sono giorni
        return `${Math.ceil(Math.abs(minutes / (60 * 24)))} giorni fa`
    } else if (minutes > 60) { //se sono ore
        return `${Math.ceil(Math.abs(minutes / 60))} ore fa`
    }
    return `${minutes} minuti fa`
}

function getInitials(name) {
    return name.replace(/[a-z]/g, '');
}

function createDate(date) {
    const targetDate = new Date(date);
    return targetDate
}
// END FUNZIONI