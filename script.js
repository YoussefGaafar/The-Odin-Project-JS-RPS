// Getting Computer Input
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
// console.log("Compuer Choice Is:", getComputerChoice());

//Getting Human Input
function getHumanChoice() {
    let humanChoice = prompt("Choose from the following: (Rock, Paper, Scissors) ");
    humanChoice = humanChoice.toLowerCase();
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        humanChoice = prompt("NO 😡.... Choose Again: (Rock, Paper, Scissors)");
        humanChoice = humanChoice.toLowerCase();
    }
    return humanChoice;
}
// console.log("Your Choice Is:", getHumanChoice());

// Main Algorithm
function playRound(hs, cs) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(`Computer Random Selection: ${computerChoice}`);
    console.log(`Your Selection: ${humanChoice}`);
    if (computerChoice === humanChoice) {
        console.log("TIED");
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        cs++;
        console.log("You Lost... 😒, Paper beats Rock");
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        hs++;
        console.log("You Win... 😊, Rock beats Scissors");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        hs++;
        console.log("You Win... 😊, Paper beats Rock");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        cs++;
        console.log("You Lost... 😒, Scissors beats Paper");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        hs++;
        console.log("You Win... 😊, Scissors beats Paper");
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        cs++;
        console.log("You Lost... 😒, Rock beats Scissors");
    }

    console.log(`Human Score = ${hs}, Computer Score = ${cs}`);

    if (hs > cs) {
        console.log("YOU WON!!!... 😉");
    }
    else if (cs > hs) {
        console.log("YOU LOST!!!... 🥺");
    }
    else {
        console.log("TIE !!!");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let n = parseInt(prompt("Enter the Number of Rounds"));
    for (let i = 0; i < n; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(`Computer Random Selection in Round-${i + 1}: ${computerChoice}`);
        console.log(`Your Selection in Round-${i + 1}: ${humanChoice}`);
        if (computerChoice === humanChoice) {
            console.log("TIED");
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            console.log("You Lost... 😒, Paper beats Rock");
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log("You Win... 😊, Rock beats Scissors");
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You Win... 😊, Paper beats Rock");
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log("You Lost... 😒, Scissors beats Paper");
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You Win... 😊, Scissors beats Paper");
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log("You Lost... 😒, Rock beats Scissors");
        }
    }
    if (humanScore > computerScore) {
        console.log("Final State: YOU WON!!!... 😉");
    }
    else if (computerScore > humanScore) {
        console.log("Final State: YOU LOST!!!... 🥺");
    }
    else {
        console.log("Final State: TIE !!!... 👌");
    }
}
console.log(playGame());