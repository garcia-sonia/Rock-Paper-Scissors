const computerPicksShow = document.getElementById('computer-picks');
const youPickShow = document.getElementById('you-pick');
const whoWinsShow = document.getElementById('who-wins');
const differentChoices = document.getElementsByClassName('button');

let youPick;
let computerPicks;
let result;

let scoreHTML = document.getElementById('user-score')[0];
let computerHTML = document.getElementById('computer-score')[0];
let userScore = 0;
let computerScore = 0;


Array.from(differentChoices).forEach(differentChoice => differentChoice.addEventListener('click', (e) => {
    youPick = e.target.id;
    youPickShow.innerHTML = youPick;
    generateComputerPicks();
    calculateResult();
}))

function generateComputerPicks() {
    const anyNumber = Math.floor(Math.random() * differentChoices.length) +1;

    const choices = ['rock', 'paper', 'scissors'];
    computerPicks = choices[anyNumber] || 'rock';
    computerPicksShow.innerHTML = computerPicks;
}


function calculateResult() {

    if (computerPicks === youPick) {
        result = 'It\'s a draw! &#128580;'
    }

    if (computerPicks === 'rock' && youPick === 'scissors') {
        result = 'You lose! &#128531;'
        lose(computerHTML);
    }

    if (computerPicks === 'rock' && youPick === 'paper') {
        result = 'You win! &#128515'
        win(scoreHTML);
    }

    if (computerPicks === 'paper' && youPick === 'scissors') {
        result = 'You win! &#128515'
        win(scoreHTML);
    }

    if (computerPicks === 'paper' && youPick === 'rock') {
        result = 'You lose! &#128531;'
        lose(computerHTML);
    }

    if (computerPicks === 'scissors' && youPick === 'rock') {
        result = 'You win! &#128515'
        win(scoreHTML);
    }

    if (computerPicks === 'scissors' && youPick === 'paper') {
        result = 'You lose! &#128531;'
        lose(computerHTML);
    }

    whoWinsShow.innerHTML = result
}

function win() {
    userScoreShow.innerHTML = ++userScore;
    modalWinner();
}

function lose() {
    computerScoreShow.innerHTML = ++computerScore;
    modalWinner();
}



let userScoreShow = document.getElementById('user-score');
let computerScoreShow = document.getElementById('computer-score');
let scoreBoardShow = document.querySelector('counter-display');

/** Announce the winner using a Modal box (When a players scores 3 points the game ends and the winner is declared) */

const endModal = document.getElementsByClassName('modal')[0];
const modalHeader = document.getElementsByClassName('modal-header')[0];
const modalText = document.getElementsByClassName('modal-content')[0];

function modalWinner() {
    if (userScore === 3) {
        endModal.style.display = 'block';
        modalHeader.textContent = 'Shiver me timbers! You\'ve defeated the mighty Redbeard!';
        modalText.textContent = `Your score: ${userScore} / Redbear's Score: ${computerScore}`;
    } else if (computerScore === 3) {
        endModal.style.display = 'block';
        modalHeader.textContent = 'Redbear wins, better luck next time!';
        modalText.textContent = `Your score: ${userScore} / Redbear's Score: ${computerScore}`;
    }
}