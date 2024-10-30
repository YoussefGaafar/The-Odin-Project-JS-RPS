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
const roundsStatus = document.querySelector(".inputs .rounds-status");

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

function updateRoundsStatus(playerChoice, computerChoice, currentRoundStatus) {
    const newRoundStatus = document.createElement("h4");
    newRoundStatus.textContent = `Round-${currentRoundNumber}:`;
    const playerChoiceSpan = document.createElement('span');
    playerChoiceSpan.classList.add('player-choice');
    playerChoiceSpan.textContent = playerChoice.toUpperCase();

    // Create the computer choice span
    const computerChoiceSpan = document.createElement('span');
    computerChoiceSpan.classList.add('computer-choice');
    computerChoiceSpan.textContent = computerChoice.toUpperCase();

    //Checks the winner of the current round
    if (currentRoundStatus === 0) { //Tie
        newRoundStatus.appendChild(document.createTextNode(" TIE, "));
        newRoundStatus.appendChild(playerChoiceSpan);
        newRoundStatus.appendChild(document.createTextNode(" 🟰 "));
        newRoundStatus.appendChild(computerChoiceSpan);
    }
    else if (currentRoundStatus === 1) { // Player Won
        newRoundStatus.appendChild(document.createTextNode(" WIN✅,  "));
        newRoundStatus.appendChild(playerChoiceSpan);
        newRoundStatus.appendChild(document.createTextNode(" beats "));
        newRoundStatus.appendChild(computerChoiceSpan);
    }
    else { // Computer Won
        newRoundStatus.appendChild(document.createTextNode(" Lost❌,  "));
        newRoundStatus.appendChild(computerChoiceSpan);
        newRoundStatus.appendChild(document.createTextNode(" beats "));
        newRoundStatus.appendChild(playerChoiceSpan);
    }
    roundsStatus.appendChild(newRoundStatus);
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
        winnerPhrase.textContent = "YOU WON !!! 🙂‍↔, Press reset button to play again."
    }
    else if (playerScore == computerScore) {
        winnerPhrase.textContent = "T I E 🟰, Press reset button to play again."
    }
    else {
        winnerPhrase.textContent = "You Lost !!! 😒, Press reset button to play again."
    }
}

function playRound(playerChoice, computerChoice) {
    totalRounds--;
    currentRound.textContent = `Current Round: ${++currentRoundNumber}`;
    if (playerChoice === computerChoice) {
        console.log("TIED... 🟰");
        console.log("--------------------------------------");
        replaceTextAndAnimate(computerChoice.toUpperCase());
        const message = `Round: ${currentRoundNumber} -> TIED... 🟰, (${playerChoice.toUpperCase()} 🟰 ${computerChoice.toUpperCase()})`;
        updateRoundsStatus(playerChoice, computerChoice, 0);
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("You Lost... 😒, Paper beats Rock");
        console.log("--------------------------------------");
        computerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
        const message = `Round: ${currentRoundNumber} -> LOST... ❌, (${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()})`;
        updateRoundsStatus(playerChoice, computerChoice), -1;
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You Won... 😊, Rock beats Scissors");
        console.log("--------------------------------------");
        playerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
        const message = `Round: ${currentRoundNumber} -> WIN... ✅, (${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()})`;
        updateRoundsStatus(playerChoice, computerChoice, 1);
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("You Won... 😊, Paper beats Rock");
        console.log("--------------------------------------");
        playerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
        const message = `Round: ${currentRoundNumber} -> WIN... ✅, (${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()})`;
        updateRoundsStatus(playerChoice, computerChoice), 1;
    }
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lost... 😒, Scissors beats Paper");
        console.log("--------------------------------------");
        computerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
        const message = `Round: ${currentRoundNumber} -> LOST... ❌, (${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()})`;
        updateRoundsStatus(playerChoice, computerChoice, -1);
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("You Won... 😊, Scissors beats Paper");
        console.log("--------------------------------------");
        playerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
        const message = `Round: ${currentRoundNumber} -> WIN... ✅, (${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()})`;
        updateRoundsStatus(playerChoice, computerChoice, 1);
    }
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lost... 😒, Rock beats Scissors");
        console.log("--------------------------------------");
        computerScore++;
        replaceTextAndAnimate(computerChoice.toUpperCase());
        const message = `Round: ${currentRoundNumber} -> LOST... ❌, (${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()})`;
        updateRoundsStatus(playerChoice, computerChoice, -1);
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
            roundsStatus.style.cssText = "display: flex;";
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