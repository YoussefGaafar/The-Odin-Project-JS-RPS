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

let playerScore = parseInt(playerScoreSpan.textContent);
let computerScore = parseInt(computerScoreSpan.textContent);
let rounds = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScoreBoard() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
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
    rounds--;
    computerInputField.style.cssText = "display: block;";
    if (playerChoice === computerChoice) {
        console.log("TIED... 🟰");
        console.log("--------------------------------------");
        computerInputField.textContent = computerChoice.toUpperCase();
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("You Lost... 😒, Paper beats Rock");
        console.log("--------------------------------------");
        computerScore++;
        computerInputField.textContent = computerChoice.toUpperCase();
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You Won... 😊, Rock beats Scissors");
        console.log("--------------------------------------");
        playerScore++;
        computerInputField.textContent = computerChoice.toUpperCase();
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("You Won... 😊, Paper beats Rock");
        console.log("--------------------------------------");
        playerScore++;
        computerInputField.textContent = computerChoice.toUpperCase();
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lost... 😒, Scissors beats Paper");
        console.log("--------------------------------------");
        computerScore++;
        computerInputField.textContent = computerChoice.toUpperCase();
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("You Won... 😊, Scissors beats Paper");
        console.log("--------------------------------------");
        playerScore++;
        computerInputField.textContent = computerChoice.toUpperCase();
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lost... 😒, Rock beats Scissors");
        console.log("--------------------------------------");
        computerScore++;
        computerInputField.textContent = computerChoice.toUpperCase();
    }

    updateScoreBoard();

    if (rounds === 0) {
        displayResult();
    }
}


// The Main Program 
function main() {
    roundsButton.addEventListener("click", function () {
        rounds = roundsInput.value;
        // Empty Input Field
        if (rounds === 0) {
            alert("ERROR !! ❌, Empty Input Field...");
            location.reload(); //Reloads the Current Page
        }
        else if (rounds < 1) {
            alert("Invalid Input ❌ Please Enter a Valid Number (Greater than 0)");
            location.reload();
        }
        else {
            roundsInput.disabled = true;
            roundsButton.disabled = true;
            roundsInput.style.cssText = "font-weight: bold; text-align: center;";
            alert(`Game Started With Rounds -> ${rounds}`);
            scoresBox.style.cssText = "display: flex;";
        }
    });

    //Get the User Input and Calculate the Scores.
    inputButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            if (rounds === 0) {
                alert("ERROR !!! ❌, Fill  'number of rounds'  box First...");
                location.reload(); //Reloads the Current Page
            }
            else {
                console.log("Button Clicked: ", e.target.id);
                console.log("Round of -- ", rounds);
                console.log("Human Score Type = ", typeof playerScore, "Value = ", playerScore);
                console.log("Computer Score = ", typeof computerScore, "Value = ", computerScore);
                computerInputField.style.cssText = "display: block;";
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