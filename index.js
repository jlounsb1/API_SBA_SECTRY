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
const teamOneScore = document.getElementById('teamonescore');
const teamTwoScore = document.getElementById('teamtwoscore');
const winMessage = document.getElementById('winmessage');
const defaultOption = document.getElementById('allbreeds');
const breedSelector = document.getElementById('breedselector');
const imgsOfBreeds = document.querySelector('#imgsofbreeds');
const breedBtn = document.getElementById('breedbtn');
const breedImgClass = document.querySelectorAll('#breedimg')
let teamOneCounter =0;
let teamTwoCounter =0;

const API_KEY = 'live_LehPqhYmFjuCSEDrG4dz6sS7P8WRHwTV4gCi6CC29wFrjFe9uM2obpap4dyvmRng';

randomImage(imgOne);
randomImage(imgTwo);
// breedList();
breedSelectorFunc()

btnOne.addEventListener('click', handleClickOne);
btnTwo.addEventListener('click', handleClickTwo);
breedBtn.addEventListener('click', handleClickThree);

//getting the url with saync function
async function randomImage(space) {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const jsonData = await response.json()
    let url = jsonData.message
    space.setAttribute('src', url);
}

async function breedSelectorFunc() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const jsonData = await response.json();
    const breedName = jsonData.message;
    for(breed in breedName){
    const option = document.createElement('option');
    option.setAttribute('value', breed);
    option.textContent= `${breed}`
    breedSelector.appendChild(option);
    }
    breedList();
}

async function breedList(){
    const response = await fetch(`https://dog.ceo/api/breed/${breedSelector.value}/images/random/5`)
    const jsonData = await response.json();
    const url = jsonData.message;
    for(let i=0;i<url.length; i++){
        if(breedSelector.value == 'none'){
            continue
            }
        const img = document.createElement('img');
        img.setAttribute('src', url[i]);
        img.setAttribute('id', breedSelector.value);
        img.setAttribute('class', 'breedimg')
        imgsOfBreeds.prepend(img);
        imgsOfBreeds.style.display = 'flex'
        imgsOfBreeds.style.flexDirection='column'
        imgsOfBreeds.style.justifyContent='center'
        imgsOfBreeds.style.alignItems='center'
    }
}


function handleClickThree() {
    breedList();
}


function handleClickOne() {
    winMessage.textContent = `First team to 10 Wins!`
    randomImage(imgOne);
    randomImage(imgTwo);
    teamOneCounter = teamOneCounter+1;
    teamOneScore.textContent=`${teamOneCounter}`;
    if(teamOneCounter>=10) {
        alert('Team One Wins! Please play again!')
        winMessage.textContent = `Team One Wins! Try playing again!`
        teamOneCounter=0;
        teamTwoCounter=0;
        teamOneScore.textContent=`${teamOneCounter}`;
        teamTwoScore.textContent=`${teamTwoCounter}`;
    }

}
function handleClickTwo() {
    winMessage.textContent = `First team to 10 Wins!`
    randomImage(imgOne);
    randomImage(imgTwo);
    teamTwoCounter = teamTwoCounter+1;
    teamTwoScore.textContent=`${teamTwoCounter}`;
    if(teamTwoCounter>=10) {
        alert('Team Two Wins! Please play again!')
        winMessage.textContent = `Team Two Wins! Try playing again!`
        teamOneCounter=0;
        teamTwoCounter=0;
        teamOneScore.textContent=`${teamOneCounter}`;
        teamTwoScore.textContent=`${teamTwoCounter}`;
    }
}

