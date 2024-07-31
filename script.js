//create a variable first and then assign it a function
//use Math.random() * varible.length to extract from different options 
const choices = ["rock", "paper", "scissors"]; 


let humanChoice = window.prompt("Choose rock, paper or scissors!");

function getHumanChoice() {
    if (humanChoice == "rock" ||
        humanChoice == "paper" ||
        humanChoice == "scissors") 
        {
        console.log(humanChoice);
    } else {
        alert("You must choose rock, paper, or scissors!!");
    }
}

getHumanChoice(); 

let computerChoice = getComputerChoice(); 

function getComputerChoice() { 
    const randomChoice = Math.floor(Math.random() * choices.length); 
    const computerChoice = choices[randomChoice]; 
    return console.log(computerChoice); 
}


// round = 0; 

// function playGame() {
//     const humanScore = 0; 
//     const computerScore = 0;  
 
//     function playRound(humanChoice, computerChoice) {
//         humanChoice = getHumanChoice(); 
//         computerChoice = getComputerChoice(); 
        
//         if (humanChoice === computerChoice) {
//             console.log("It's a tie!!");
    
//         } else if (
//             (humanChoice === "rock" && computerChoice === "scissors") || 
//             (humanChoice === "paper" && computerChoice === "rock") || 
//             (humanChoice === "scissors" && computerChoice === "paper")
//         ) {
//             console.log("You win!!");
    
//         } else {
//             computerScore += 1; 
//             console.log("Computer wins!!");
//         }
//     }
//     let round = playRound(5);
// }
 

