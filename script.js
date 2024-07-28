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

