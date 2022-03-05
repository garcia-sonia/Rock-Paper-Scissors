const computerPicksShow = document.getElementById('computer-picks')
const youPickShow = document.getElementById('you-pick')
const whoWinsShow = document.getElementById('who-wins')
const differentChoices = document.querySelectorAll('button')

let youPick
let computerPicks

differentChoices.forEach(differentChoice => differentChoice.addEventListener('click', (e) => {
    youPick = e.target.id
    youPickShow.innerHTML = youPick
    generateComputerPicks()
}))

function generateComputerPicks () {
    const anyNumber = Math.floor(Math.random () * differentChoices.length) + 1
    
    if (anyNumber === 1) {
        computerPicks = 'rock'
    }

    if (anyNumber === 2) {
        computerPicks = 'paper'
    }

    if (anyNumber === 3) {
        computerPicks = 'scissors'
    }
    computerPicksShow.innerHTML = computerPicks
}