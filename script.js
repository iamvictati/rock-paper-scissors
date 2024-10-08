//MAKE SURE TO ALWAYS STATE let WHEN USING A LOOP 
//CALL FUNCTIONS WITHIN LOOP INSTEAD OF FUNCTION ASSIGNED VARIABLES. OTHERWISE ONLY VALUE WILL BE RETURNED.

let humanScore = 0; 
let computerScore = 0; 
let humanChoice = "";
let roundCounter = 1; 

const choices = ["rock", "paper", "scissors"]; 
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn"); 
const scissorsBtn = document.querySelector("#scissorsBtn"); 
const buttons = document.querySelector("button"); 
const resultContainer = document.querySelector("#resultContainer");
const winnerContainer = document.querySelector("#winnerContainer");
const resetGame = document.querySelector("#resetGame"); 

rockBtn.addEventListener("click", (evt) => {
    humanChoice = "rock"; 
    playGame(); 
}); 

paperBtn.addEventListener("click", (evt) => {
    humanChoice = "paper"; 
    playGame(); 
});

scissorsBtn.addEventListener("click", (evt) => {
    humanChoice = "scissors"; 
    playGame(); 
});

function newRound() {
    resultContainer.innerHTML = ""; 
    winnerContainer.innerHTML = "";  
}

function gameReset() {
    humanScore = 0; 
    computerScore = 0; 
    humanChoice = "";
    roundCounter = 1; 

    resultContainer.innerHTML = ""; 
    winnerContainer.innerHTML = ""; 
    resetGame.innerHTML =""; 
}

function playGame() {

    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }
    newRound();
    playRound(); 
    displayResults();
    
    if (humanScore == 5 || computerScore == 5) { 
        displayWinner(); 
    } 
}

function displayResults() {
    const results = document.createElement("h3"); 
    results.textContent = `${humanScore} - ${computerScore}`; 
    resultContainer.appendChild(results); 
}

function displayWinner() {

    if (humanScore == 5) {
        const winnerText = document.createElement("h2");
        winnerText.textContent = "👾WHO DA WINNER?👾"; 
        winnerContainer.appendChild(winnerText); 
        const humanWinner = document.createElement("h1");
        humanWinner.textContent = `YOU WIN ${humanScore} TO ${computerScore}!! YAY!!`; 
        winnerContainer.appendChild(humanWinner);
    } else if (computerScore == 5) {
        const winnerText = document.createElement("h2");
        winnerText.textContent = "👾WHO DA WINNER?👾"; 
        winnerContainer.appendChild(winnerText); 
        const computerWinner = document.createElement("h1");
        computerWinner.textContent = `COMPUTER WINS ${computerScore} TO ${humanScore}... YOU LOSE!!`; 
        winnerContainer.appendChild(computerWinner);
    }

    const resetButton = document.createElement("button"); 
    resetButton.textContent = "RESET GAME!"; 
    resetGame.appendChild(resetButton);
    resetButton.addEventListener("click", (evt) => {
        gameReset(); 
    })
}

function playRound() {
    let computerChoice = getComputerChoice();

    const round = document.createElement("h2"); 
    round.textContent = `Round ${roundCounter}`; 
    resultContainer.appendChild(round);
    const choices = document.createElement("h3"); 
    choices.textContent = `You: ${humanChoice} || Machine: ${computerChoice}`; 
    resultContainer.appendChild(choices); 

    if (humanChoice == computerChoice) {
        const tie = document.createElement("h3");
        tie.textContent = "It's a tie";
        resultContainer.appendChild(tie); 
        roundCounter++;
        return; 
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        const rockScis = document.createElement("h3");
        rockScis.textContent = "Rock beats Scissors";
        resultContainer.appendChild(rockScis); 
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        const scisPaper = document.createElement("h3");
        scisPaper.textContent = "Scissors beat Paper";
        resultContainer.appendChild(scisPaper);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        const papRock = document.createElement("h3");
        papRock.textContent = "Paper beats Rock";
        resultContainer.appendChild(papRock);
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        const rockScis = document.createElement("h3");
        rockScis.textContent = "Rock beats Scissors";
        resultContainer.appendChild(rockScis); 
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        const scisPaper = document.createElement("h3");
        scisPaper.textContent = "Scissors beat Paper";
        resultContainer.appendChild(scisPaper);
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        const papRock = document.createElement("h3");
        papRock.textContent = "Paper beats Rock";
        resultContainer.appendChild(papRock);
        computerScore++;
    }
    roundCounter++;
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length); 
    let computerChoice = choices[randomChoice];  
    return computerChoice; 
}


