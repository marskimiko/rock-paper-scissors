function getComputerChoice() {
  const weapon = ['rock', 'paper', 'scissor'];
  const random = weapon[(Math.floor(Math.random() * weapon.length))];

  return random

}

function playRound(playerSelection, computerSelection) {
  const player
  const player = playerSelection.toLowerCase()
  const computer = computerSelection.toLowerCase()
  if (player === 'rock' && computer === 'scissor') {
    console.log('You Win! Rock beats Paper')
  } else if (player === 'paper' && computer === 'rock') {
    console.log('You Win! Paper beats Rock')
  } else if (player === 'scissor' && computer === 'paper') {
    console.log('You Win! Scissor beats paper')
  } else if (player === 'rock' && computer === 'paper') {
    console.log('You Lose! Paper beats rock') 
  } else if (player === 'paper' && computer === 'scissor') {
    console.log('You Lose! Scissor beats paper') 
  } else if (player === 'scissor' && computer === 'rock') {
    console.log('You Lose! Rock beats scissor')
  } else if(player === computer) {
    console.log(`It's a tie!`)
  }
}

