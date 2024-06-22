//getting all the elements of my Dom
const appContainer = document.getElementById('appcontainer');
const header = document.getElementById('header');
const centerPiece = document.getElementById('centerpiece');
const teamOne = document.getElementById('teamone');
const teamTwo = document.getElementById('teamtwo');


async function randomImage() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json()
    const url = jsonData.message
    console.log(url)
}

randomImage()