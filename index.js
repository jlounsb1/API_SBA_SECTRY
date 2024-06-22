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
let teamOneCounter =0;
let teamTwoCounter =0;


//getting the url with saync function
async function randomImage(space) {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json()
    let url = jsonData.message
    space.setAttribute('src', url);
}

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

