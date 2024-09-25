//MAKE SURE TO ALWAYS STATE let WHEN USING A LOOP 
//CALL FUNCTIONS WITHIN LOOP INSTEAD OF FUNCTION ASSIGNED VARIABLES. OTHERWISE ONLY VALUE WILL BE RETURNED.

/* alert("Press [Ctrl + SHIFT + I] to open the Console.");
alert("Reload the page with the console open. Or press enter to proceed.");  */

let humanScore = 0; 
let computerScore = 0; 

const choices = ["rock", "paper", "scissors"]; 
const humanChoiceBtns = document.querySelector("button");

function playGame() {

    console.log ("💫~~~~~~~SCORES~~~~~~~💫");

    if (humanScore > computerScore) {
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore); 
        console.log(`YOU WIN ${humanScore} TO ${computerScore}!!!!`);
    } else if (computerScore > humanScore) {
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore); 
        console.log(`COMPUTER WINS ${computerScore} TO ${humanScore}....`);
    } else {
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore); 
        console.log("FUNKY TIE!! WANNA REMATCH??"); 
    }
}

//H: rock C:scissors has bug, it skips and doesn't log anything
function playRound() {
        
    humanChoiceBtns.addEventListener('click', getHumanChoice);
    computerChoice = getComputerChoice(); 

    if (humanChoice == computerChoice) {
        console.log("It's a tie");
    } else if (humanChoice == "rock" && computerChoice == "scisssors") {
        console.log("Rock beats Scissors");
        return humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Scissors beat Paper");
        return humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("Paper beats Rock");
        return humanScore++; 
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("Rock beats Scissors");
        return computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Scissors beat Paper");
        return computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("Paper beats Rock");
        return computerScore++;
    }
}

function getHumanChoice() {
    let humanChoice = humanChoiceBtns.textContent;

    if (humanChoice == "rock" || 
        humanChoice == "paper" ||
        humanChoice== "scissors") {
            return humanChoice;  
    } else {
        console.log("You didn't choose rock, paper, or scissors");
        return humanChoice = null;  
    }
} 

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length); 
    let computerChoice = choices[randomChoice]; 
    return computerChoice;    
}
