function getComputerChoice() {
  const weapon = ['rock', 'paper', 'scissor']

  function chooseRandom() {
    console.log(weapon[(Math.floor(Math.random() * weapon.length))])
  }

  chooseRandom()
}

getComputerChoice()