//create a variable first and then assign it a function
//use Math.random() * varible.length to extract from different options 
const choices = ["rock", "paper", "scissors"]; 

const humanChoice = window.prompt("Choose rock, paper or scissors!");
function getHumanChoice() {

    if (humanChoice.toLowerCase() == "rock" ||
        humanChoice.toLowerCase() == "paper" ||
        humanChoice.toLowerCase() == "scissors") 
    {
        return humanChoice.toLowerCase(); 

    } else { 
        alert("You must choose rock, paper or scissors! Reload the page...");
        humanChoice = null; 
    }
}

const computerChoice = getComputerChoice(); 

function getComputerChoice() { 
    const randomChoice = Math.floor(Math.random() * choices.length); 
    const computerChoice = choices[randomChoice]; 
    return computerChoice; 
}

function playGame() { 

    let humanScore = 0;
    let computerScore = 0; 

    for (let i = 1; i <= 5; i++) {

        if (!humanChoice) {
            break; 
        }

        const winner = playRound(humanChoice, computerChoice);

        if (winner === "computer") {
            console.log(humanChoice);
            console.log(computerChoice);
            computerScore++;
        } else if (winner === "human") {
            console.log(humanChoice);
            console.log(computerChoice);
            humanScore++;
        }

        getHumanChoice(); 
        getComputerChoice(); 
    }

    function playRound(humanChoice, computerChoice) { 

        if (humanChoice == computerChoice) {
            console.log("It's a tie my friend!!");
        } else if (humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "scissors" && computerChoice == "rock" ||
            humanChoice == "paper" && computerChoice == "scissors") {
            console.log("Looooooser!!!"); 
            return "computer"; 
        } else if (humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win!!! Yay!:))"); 
            return "human"; 
        } else {
            console.log("You didn't choose a valid tool... ");
        }
    }

    console.log("Final scores:");
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}
playGame(); 
