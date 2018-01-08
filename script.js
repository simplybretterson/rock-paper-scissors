const maxRounds = 5;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let pRound = document.querySelector('#p-round');

function computerPlay() {
  let roll = Math.random()*3;

  if (roll > 2) return 'Rock';
  if (roll > 1) return 'Paper';
  return 'Scissors';
}

function playRound(playerSelection) {

  let computerSelection = computerPlay();
  let output = document.querySelector('#p-results');
  let pPlayerScore = document.querySelector('#player-score');
  let pComputerScore = document.querySelector('#computer-score');

  if (playerSelection === computerSelection) {
    output.textContent = `It's a tie! You both chose ${playerSelection}.`;
  }
  else if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
      playerSelection == 'Scissors' && computerSelection == 'Paper' ||
      playerSelection == 'Paper' && computerSelection == 'Rock')
  {
    playerScore++;
    output.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else {
    computerScore++;
    output.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  pPlayerScore.textContent = `Your score: ${playerScore}`;
  pComputerScore.textContent = `Computer's score: ${computerScore}`;

  if (round == maxRounds) {
    if (playerScore > computerScore) {
      output.textContent += ` You won the game!`;
    }
    else if (computerScore > playerScore) {
      output.textContent += ` You lost the game!`;
    }
    else {
      output.textContent += ` The game is a tie!`;
    }

    gameEnd();
  }
  else {
    round++;
    pRound.textContent = `Round ${round} of ${maxRounds}`;
  }
}

function gameStart() {
  playerScore = 0;
  computerScore = 0;

  round = 1;

  document.querySelector('#button-start').classList.add('hidden');
  document.querySelector('#button-rock').classList.remove('hidden');
  document.querySelector('#button-paper').classList.remove('hidden');
  document.querySelector('#button-scissors').classList.remove('hidden');

  pRound.textContent = `Round ${round} of ${maxRounds}`;

  document.querySelector('#player-score').textContent = `Your score: 0`;
  document.querySelector('#computer-score').textContent = `Computer score: 0`;

  document.querySelector('#p-results').textContent = `A battle is surely brewing...`;
}

function gameEnd() {
  document.querySelector('#button-start').classList.remove('hidden');
  document.querySelector('#button-rock').classList.add('hidden');
  document.querySelector('#button-paper').classList.add('hidden');
  document.querySelector('#button-scissors').classList.add('hidden');

  pRound.textContent = `Press Start for a rematch`;
}

let btnStart = document.querySelector('#button-start');

btnStart.onclick = function() {
  gameStart();
}

let btnRock = document.querySelector('#button-rock');
let btnPaper = document.querySelector('#button-paper');
let btnScissors = document.querySelector('#button-scissors');

btnRock.onclick = function() {
  playRound('Rock');
}

btnPaper.onclick = function() {
  playRound('Paper');
}

btnScissors.onclick = function() {
  playRound('Scissors');
}
