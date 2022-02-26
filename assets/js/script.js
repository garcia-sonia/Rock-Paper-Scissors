const computerPicksShow = document.getElementById('computer-picks')
const userPicksShow = document.getElementById('you-pick')
const whoWinsShow = document.getElementById('who-wins')
const differentChoices = document.querySelectorAll('button')

let userPicks

differentChoices.forEach(differentChoice => differentChoice.addEvent.Listener('click', (e) => {
    userPicks = e.target.id
    userPicksShow.innerHTML = userPicks
}))