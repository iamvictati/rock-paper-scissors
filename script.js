//MAKE SURE TO ALWAYS STATE let WHEN USING A LOOP 
//CALL FUNCTIONS WITHIN LOOP INSTEAD OF FUNCTION ASSIGNED VARIABLES. OTHERWISE ONLY VALUE WILL BE RETURNED.

/* alert("Press [Ctrl + SHIFT + I] to open the Console.");
alert("Reload the page with the console open. Or press enter to proceed.");  */

let humanScore = 0; 
let computerScore = 0; 
/* let roundCounter = 0;  */
let humanChoice = "";
let roundCounter = 0; 

const choices = ["rock", "paper", "scissors"]; 
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn"); 
const scissorsBtn = document.querySelector("#scissorsBtn"); 

rockBtn.addEventListener("click", (evt) => {
    humanChoice = "rock"; 
    console.log("H:", humanChoice); 
    playGame(); 
}); 

paperBtn.addEventListener("click", (evt) => {
    humanChoice = "paper"; 
    console.log("H:", humanChoice); 
    playGame(); 
});

scissorsBtn.addEventListener("click", (evt) => {
    humanChoice = "scissors"; 
    console.log("H:", humanChoice); 
    playGame(); 
});

function playGame() {

    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    playRound(); 
    displayResults();
    displayWinner(); 
}

function displayResults() {
    const resultContainer = document.querySelector("#resultContainer");
    const round = document.createElement("h2"); 
    round.textContent = `Round ${roundCounter}`; 
    resultContainer.appendChild(round);
    const results = document.createElement("h3"); 
    results.textContent = `${humanScore} - ${computerScore}`; 
    resultContainer.appendChild(results); 
}

function displayWinner() {
    const winnerContainer = document.querySelector("#winnerContainer");

    if (humanScore == 5) {
        const winnerText = document.createElement("h1");
        winnerText.textContent = "👾WHO DA WINNER???👾"; 
        winnerContainer.appendChild(winnerText); 
        const humanWinner = document.createElement("h1");
        humanWinner.textContent = `YOU WIN ${humanScore} TO ${computerScore}!!!! YAYYYY!!`; 
        winnerContainer.appendChild(humanWinner);
    } else if (computerScore == 5) {
        const winnerText = document.createElement("h1");
        winnerText.textContent = "👾WHO DA WINNER???👾"; 
        winnerContainer.appendChild(winnerText); 
        const computerWinner = document.createElement("h1");
        computerWinner.textContent = `COMPUTER WINS ${computerScore} TO ${humanScore}.... YOU LOSE!!`; 
        winnerContainer.appendChild(computerWinner);
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    const choices = document.createElement("h2"); 
    choices.textContent = `You: ${humanChoice} | vs | Machine: ${computerChoice}`; 
    resultContainer.appendChild(choices); 

    if (humanChoice == computerChoice) {
        console.log("It's a tie");
        roundCounter++;
        return; 
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("Rock beats Scissors");

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("Scissors beat Paper");
        
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("Paper beats Rock");
         
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("Rock beats Scissors");
        
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("Scissors beat Paper");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("Paper beats Rock");
        
    }
    roundCounter++;
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length); 
    let computerChoice = choices[randomChoice]; 
    console.log("C:", computerChoice);  
    return computerChoice; 
}


