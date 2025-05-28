let humanScore =0;
let computerScore = 0;

const humanScoreEl = document.getElementById("human-score");
const computerScoreEl = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const roundText = document.getElementById("round-text");
const restartBtn = document.getElementById("restart");

const choices = document.querySelectorAll(".choices button");

choices.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.dataset.choice, getComputerChoice());
    });

});

restartBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  updateScores();
  resultText.textContent = "Make your move!";
  roundText.textContent = "";
});

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
function playRound(humanChoice, computerChoice) {
  let result = "";

  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
  } else {
    computerScore++;
    result = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
  }

  updateScores();
  resultText.textContent = result;
  roundText.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}.`;
}

function updateScores() {
    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
}
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

