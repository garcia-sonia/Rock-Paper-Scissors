const computerPicksShow = document.getElementById('computer-picks')
const youPickShow = document.getElementById('you-pick')
const whoWinsShow = document.getElementById('who-wins')
const differentChoices = document.querySelectorAll('button')

let youPick

differentChoices.forEach(differentChoice => differentChoice.addEventListener('click', (e) => {
    youPick = e.target.id
    youPickShow.innerHTML = youPick
}))