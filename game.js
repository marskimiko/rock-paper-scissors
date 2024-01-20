const choices = ['rock', 'paper', 'scissors']

function game() {
  playRound();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
}

function playerChoice() {
  let input = prompt('Rock, Paper, or Scissors?');
  while(input == null) {
    input = prompt('Rock, Paper, or Scissors?');
  }

  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false){
    input = prompt(
      'Type Rock, Paper, or Scissors. Please make sure your spelling is accurate!'
    );
    while(input == null) {
      input = prompt('Rock, Paper, or Scissors?');
    }
    input = input.toLowerCase()
    check = validateInput(input);
  }
}

function computerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
  return (choices.includes(choice));
}

game();




















































































// function getComputerChoice() {
//   const weapon = ['rock', 'paper', 'scissor'];
//   const random = weapon[(Math.floor(Math.random() * weapon.length))];

//   return random

// }

// function game() {
//   //play the game
//   //play five rounds
//   // console based
// }

// function playRound(playerSelection, computerSelection) {
//   let player = playerSelection.toLowerCase();
//   let computer = computerSelection.toLowerCase();

//   if (player === 'rock' && computer === 'scissor') {
//     console.log('You Win! Rock beats Paper')
//   } else if (player === 'paper' && computer === 'rock') {
//     console.log('You Win! Paper beats Rock')
//   } else if (player === 'scissor' && computer === 'paper') {
//     console.log('You Win! Scissor beats paper')
//   } else if (player === 'rock' && computer === 'paper') {
//     console.log('You Lose! Paper beats rock') 
//   } else if (player === 'paper' && computer === 'scissor') {
//     console.log('You Lose! Scissor beats paper') 
//   } else if (player === 'scissor' && computer === 'rock') {
//     console.log('You Lose! Rock beats scissor')
//   } else if(player === computer) {
//     console.log(`It's a tie!`)
//   }
// }
