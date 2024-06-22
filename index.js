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
let teamOneCounter =0;
let teamTwoCounter =0;


//getting the url with saync function
async function randomImage(space) {
    // if(breedSelector.value =="breeds"){
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const jsonData = await response.json()
    let url = jsonData.message
    // console.log(breedSelector.value)
    space.setAttribute('src', url);
    // } else {
    // }
    //I was trying to set up a statement where it would pull the generic random if all breed were selected, and specific breeds if a specific one was selected. 
}

// async function initialLoad() {
//     const response = await fetch("https://dog.ceo/api/breeds/list/all");
//     const jsonData = await response.json();
//     const breedId = jsonData.message;
//     console.log(breedId)
//     for(breed in breedId){
//     console.log(breed)
//     const option = document.createElement('option');
//     option.setAttribute('value', breed);
//     option.textContent= `${breed}`
//     breedSelector.appendChild(option);
//     }
// }
// initialLoad();
//I could get the dropdown to load in different breeds, but I could not get it to pull an image of that specific breed

randomImage(imgOne);
randomImage(imgTwo);

btnOne.addEventListener('click', handleClickOne);
btnTwo.addEventListener('click', handleClickTwo);

function handleClickOne() {
    winMessage.textContent = `First team to 10 Wins!`
    randomImage(imgOne);
    randomImage(imgTwo);
    teamOneCounter = teamOneCounter+1;
    teamOneScore.textContent=`${teamOneCounter}`;
    if(teamOneCounter>=10) {
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
        winMessage.textContent = `Team Two Wins! Try playing again!`
        teamOneCounter=0;
        teamTwoCounter=0;
        teamOneScore.textContent=`${teamOneCounter}`;
        teamTwoScore.textContent=`${teamTwoCounter}`;
    }
}

