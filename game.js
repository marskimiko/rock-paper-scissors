const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function game() {
  for(let i = 1; i <= 5; i++){
    playRound(i);
  }
  document.querySelector('button').textContent = 'Play new game'
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
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
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
  if(choiceP === choiceC) {
    return 'Tie';
  } else if (
    (choiceP === "rock" && choiceC === 'scissors') || 
    (choiceP === "paper" && choiceC === 'rock') || 
    (choiceP === "scissors" && choiceC === 'paper')
  ) {
    return 'Player';
  } else {
    return 'Computer';
  }
}

function logWins(){
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == 'Tie').length;
  console.log('Results:')
  console.log('Player Wins:', playerWins);
  console.log('Computer Wins:', computerWins);
  console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round){
  console.log('Round:', round)
  console.log('Player Chose:', playerChoice);
  console.log('Computer Chose:', computerChoice);
  console.log(winner, 'Won the Round');
  console.log("---------------------------------")
}




















































































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
