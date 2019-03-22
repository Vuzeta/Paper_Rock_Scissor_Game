const GameElements = {
    choice: [...document.querySelectorAll('.container-options > div')],
    play: document.querySelector('.play'),
    outputWinner: document.querySelector('.winner'),
    outputNumberOfGame: document.querySelector('.number-of-game'),
    outputWins: document.querySelector('.number-of-wins'),
    outputLoses: document.querySelector('.number-of-lose'),
    outputDraws: document.querySelector('.number-of-draw'),
    outputPlayerChoose: document.querySelector('.player-choice'),
    outputComputerChoose: document.querySelector('.computer-choice')
}

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
    GameElements.outputPlayerChoose.textContent = playerChoice;
    GameElements.outputComputerChoose.textContent = computerChoice;
    GameElements.outputWinner.textContent = WhoWin;
    GameElements.outputNumberOfGame.textContent = ++numberOfGame;
    GameElements.outputWins.textContent = counterWins;
    GameElements.outputLoses.textContent = counterLoses;
    GameElements.outputDraws.textContent = counterDraws;
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
for (let i = 0; i < GameElements.choice.length; i++) {
    GameElements.choice[i].addEventListener("click", function (e) {
        let target = e.target;
        let divAttr = GameElements.choice[i].getAttribute('class');
        if (divAttr.includes('active')) {
            GameElements.choice[i].classList.remove('active');
            playerChoice = '';
        } else {
            GameElements.choice.forEach(div => div.classList.remove('active'));
            target.classList.add('active');
            playerChoice = target.getAttribute('data-item');
        };
    });
};

//Start of the game
GameElements.play.addEventListener('click', function () {
    if (playerChoice == '') {
        alert("Please select an item")
    } else {
        WhoIsWinner(playerChoice, ComputerRoll());
        showResult();
        playerChoice = '';
        for (let i = 0; i < GameElements.choice.length; i++) {
            GameElements.choice[i].classList.remove('active');
        };
    };
});