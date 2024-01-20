function getComputerChoice() {
  const weapon = ['rock', 'paper', 'scissor'];
  const random = weapon[(Math.floor(Math.random() * weapon.length))];

  console.log(random)

}

getComputerChoice()

