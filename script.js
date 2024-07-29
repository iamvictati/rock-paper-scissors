//create a variable first and then assign it a function
//use Math.random() * varible.length to extract from different options 


let computerChoice = getComputerChoice(); 

function getComputerChoice() { 
    const choices = ["rock", "paper", "scissors"]; 
    const randomChoice = Math.floor(Math.random() * choices.length); 
    const computerChoice = choices[randomChoice]; 

    return computerChoice; 
}

console.log(computerChoice); 

let humanChoice = getHumanChoice(); 
function getHumanChoice() {
    return window.prompt("Choose your tool!");
} 

console.log(humanChoice);

function playGame() {
    const humanScore = 0; 
    const computerScore = 0;  

    function playRound(humanChoice, computerChoice) {
        humanChoice === getHumanChoice(); 
        computerChoice === getComputerChoice(); 
        
        if (humanChoice === computerChoice) {
            console.log("It's a tie!!");
    
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore += 1;
            console.log("You win!!");
    
        } else {
            computerScore += 1; 
            console.log("Computer wins!!");
        }
    }
    playRound(humanChoice, computerChoice); 
}
