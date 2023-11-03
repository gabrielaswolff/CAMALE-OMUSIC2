const songs = [
    {
        src: "./Skyfall.mp3",
        name: "Skyfall",
    },
    {
        src: "./Hard Wave.mp3",
        name: "Hard Wave",
    },
    {
        src: "./Simple Brew.mp3",
        name: "Simple Brew",
    },
    {
        src: "./Pink Party.mp3",
        name: "Pink Party",
    },
   
];

const player = document.querySelector("#player");
const musicName = document.querySelector("#musicName");
const playPauseButton = document.querySelector("#playPauseButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

let index = 0;

playPauseButton.onclick = () => playPause();
prevButton.onclick = () => prevNextMusic("prev");
nextButton.onclick = () => prevNextMusic();

function playPause() {
    if (player.paused) {
        player.play();
        playPauseButton.innerHTML = "<i class='bx bx-pause'></i>";
    } else {
        player.pause();
        playPauseButton.innerHTML = "<i class='bx bx-caret-right'></i>";
    }
}

function prevNextMusic(type = "next") {
    if ((type === "next" && index + 1 === songs.length) || type === "init") {
        index = 0;
    } else if (type === "prev" && index === 0) {
        index = songs.length - 1;
    } else {
        index = type === "prev" ? index - 1 : index + 1;
    }

    player.src = songs[index].src;
    musicName.innerHTML = songs[index].name;

    if (type !== "init") {
        playPause();
    }
}

window.addEventListener("DOMContentLoaded", () => {
    player.src = songs[index].src;
    musicName.innerHTML = songs[index].name;
});
