const roundsButton = document.getElementById("rounds-button");
const roundsInput = document.getElementById("rounds-input");
const inputButtons = document.querySelectorAll(".player-buttons button");
const scoresBox = document.querySelector(".scores");
const playerScoreSpan = document.querySelector(".player-score span");
const computerScoreSpan = document.querySelector(".computer-score span");
const computerInputField = document.querySelector(".computer-input h2");
const choices = ["rock", "paper", "scissors"];
const winnerBox = document.querySelector(".winner");
const winnerPhrase = document.querySelector(".winner h2");
const resetButton = document.querySelector(".winner button");
const currentRound = document.querySelector(".rounds .current-round");

let playerScore = parseInt(playerScoreSpan.textContent);
let computerScore = parseInt(computerScoreSpan.textContent);
let totalRounds = 0;
let currentRoundNumber = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScoreBoard() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

function replaceTextAndAnimate(newText) {
    computerInputField.textContent = newText; // Replace text
    computerInputField.style.animation = 'none'; // Reset animation
    computerInputField.offsetHeight; // Trigger reflow
    computerInputField.style.animation = 'appear 0.8s ease-in-out 1'; // Reapply animation
}

function displayResult() {
    console.log("The END...");
    winnerBox.style.cssText = "display: block;";
    inputButtons.forEach(button => button.disabled = true)
    if (playerScore > computerScore) {
        winnerPhrase.textContent = "YOU WON !!! 🙂‍↔, Press Reset Button to Play Again."
    }
    else if (playerScore == computerScore) {
        winnerPhrase.textContent = "T I E 🟰, Press Reset Button to Play Again."
    }
    else {
        winnerPhrase.textContent = "You Lost !!! 😒, Press Reset Button to Play Again."
    }
}

function playRound(playerChoice, computerChoice) {
    totalRounds--;
    currentRound.textContent = `Current Round: ${++currentRoundNumber}`;
    if (playerChoice === computerChoice) {
        console.log("TIED... 🟰");
        console.log("--------------------------------------");
        replaceTextAndAnimate(computerChoice.toUpperCase());
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("You Lost... 😒, Paper beats Rock");
        console.log("--------------------------------------");
        computerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You Won... 😊, Rock beats Scissors");
        console.log("--------------------------------------");
        playerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("You Won... 😊, Paper beats Rock");
        console.log("--------------------------------------");
        playerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lost... 😒, Scissors beats Paper");
        console.log("--------------------------------------");
        computerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("You Won... 😊, Scissors beats Paper");
        console.log("--------------------------------------");
        playerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lost... 😒, Rock beats Scissors");
        console.log("--------------------------------------");
        computerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
    }

    updateScoreBoard();

    if (totalRounds === 0) {
        displayResult();
    }
}


// The Main Program 
function main() {
    roundsButton.addEventListener("click", function () {
        totalRounds = roundsInput.value;
        // Empty Input Field
        if (totalRounds === 0) {
            alert("ERROR !! ❌, Empty Input Field...");
            location.reload(); //Reloads the Current Page
        }
        else if (totalRounds < 1) {
            alert("Invalid Input ❌ Please Enter a Valid Number (Greater than 0)");
            location.reload();
        }
        else {
            roundsInput.disabled = true;
            roundsButton.disabled = true;
            roundsInput.style.cssText = "font-weight: bold; text-align: center;";
            alert(`Game Started With Rounds -> ${totalRounds}`);
            scoresBox.style.cssText = "display: flex;";
            currentRound.textContent = `Current Round: ${currentRoundNumber}`;
            currentRound.style.cssText = "display: block;";
        }
    });

    //Get the User Input and Calculate the Scores.
    inputButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            if (totalRounds === 0) {
                alert("ERROR !!! ❌, Fill  'number of rounds'  box First...");
                location.reload(); //Reloads the Current Page
            }
            else {
                console.log("Button Clicked: ", e.target.id);
                console.log("Round of -- ", totalRounds);
                console.log("Human Score Type = ", typeof playerScore, "Value = ", playerScore);
                console.log("Computer Score = ", typeof computerScore, "Value = ", computerScore);
                // computerInputField.style.cssText = "opacity: 0; transition: opacity 1s ease -in -out;";
                playRound(e.target.id, getComputerChoice());
            }
        });
    })

    //Resets
    resetButton.addEventListener("click", function () {
        location.reload(); //Reloads the Current Page
    });
}

main();