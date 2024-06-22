//getting all the elements of my Dom
const appContainer = document.getElementById('appcontainer');
const header = document.getElementById('header');
const centerPiece = document.getElementById('centerpiece');
const teamOne = document.getElementById('teamone');
const teamTwo = document.getElementById('teamtwo');
const btnOne = document.getElementById('btnone');
const btnTwo = document.getElementById('btntwo')
const imgOne = document.getElementById('imgone');
const imgTwo = document.getElementById('imgtwo');

async function randomImage(space) {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json()
    const url = jsonData.message
    console.log(url)
    space.setAttribute('src', url);
    
}

randomImage(imgOne);
randomImage(imgTwo);

btnOne.addEventListener('click', handleClickOne);
btnTwo.addEventListener('click', handleClickTwo);

function handleClickOne() {
    randomImage(imgOne);
    randomImage(imgTwo);
}
function handleClickTwo() {
    randomImage(imgOne);
    randomImage(imgTwo);
}