const choice = [...document.querySelectorAll('.container-options > div')];
const play = document.querySelector('.play');

const outputWinner = document.querySelector('.winner');
const outputNumberOfGame = document.querySelector('.number-of-game');
const outputWins = document.querySelector('.number-of-wins');
const outputLoses = document.querySelector('.number-of-lose');
const outputDraws = document.querySelector('.number-of-draw');
const outputPlayerChoose = document.querySelector('.player-choice');
const outputComputerChoose = document.querySelector('.computer-choice');

// Variables
let playerChoice = '';
let computerChoice = '';
let WhoWin = '';
let numberOfGame = 0;
let counterWins = 0;
let counterLoses = 0;
let counterDraws = 0;

//Results printing function
const showResult = () => {
    outputPlayerChoose.textContent = playerChoice;
    outputComputerChoose.textContent = computerChoice;
    outputWinner.textContent = WhoWin;
    outputNumberOfGame.textContent = ++numberOfGame;
    outputWins.textContent = counterWins;
    outputLoses.textContent = counterLoses;
    outputDraws.textContent = counterDraws;
}

//Drawing a computer
const ComputerRoll = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return computerChoice = 'rock';
    } else if (randomNumber == 1) {
        return computerChoice = 'paper';
    } else {
        return computerChoice = 'scissor';
    };
};

//Logic games
const WhoIsWinner = (player, computer) => {
    if (player == 'rock' && computer == 'scissor') {
        WhoWin = 'Player WIN';
        ++counterWins;
    } else if (player == 'paper' && computer == 'rock') {
        WhoWin = 'Player WIN';
        ++counterWins;
    } else if (player == 'scissor' && computer == 'paper') {
        WhoWin = 'Player WIN';
        ++counterWins;
    } else if (computer == player) {
        WhoWin = 'DRAW';
        ++counterDraws;
    } else {
        WhoWin = 'Computer WIN';
        ++counterLoses;
    };
    return WhoWin;
};

//Selection of a game element
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", function (e) {
        let target = e.target;
        let divAttr = choice[i].getAttribute('class');
        if (divAttr.includes('active')) {
            choice[i].classList.remove('active');
            playerChoice = '';
        } else {
            choice.forEach(div => div.classList.remove('active'));
            target.classList.add('active');
            playerChoice = target.getAttribute('data-item');
        };
    });
};

//Start of the game
play.addEventListener('click', function () {
    if (playerChoice == '') {
        alert("Please select an item")
    } else {
        WhoIsWinner(playerChoice, ComputerRoll());
        showResult();
        playerChoice = '';
        for (let i = 0; i < choice.length; i++) {
            choice[i].classList.remove('active');
        };
    };
});