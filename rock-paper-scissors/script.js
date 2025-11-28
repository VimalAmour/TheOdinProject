// console.log("Hello World!");

// Step 2: Write the logic to get the computer choice
// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
// Note: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.

function getComputerChoice(){
    
    let rock, paper, scissors, botChoice;

    rock = "Rock";
    paper = "Paper";
    scissors = "Scissors";

    botChoice = Math.floor(Math.random() * 3) + 1;

    if (botChoice == 1){
        return rock;
    } else if (botChoice == 2){
        return paper;
    } else if (botChoice == 3){
        return scissors;
    } else {
        errorMessage = "ERROR: invalid choice"
        return errorMessage;
    }

}

// console.log(getComputerChoice());

// Step 3: Write the logic to get the human choice
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later. For now, just assume the user will always enter a valid choice.
// Test what your function returns by using console.log.

function getHumanChoice(){

    let rock, paper, scissors, humanChoice;

    rock = "Rock";
    paper = "Paper";
    scissors = "Scissors";

    humanChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();

        if (humanChoice == "rock"){
        return rock;
    } else if (humanChoice == "paper"){
        return paper;
    } else if (humanChoice == "scissors"){
        return scissors;
    } else {
        errorMessage = "ERROR: invalid choice"
        return errorMessage;
    }

}

// console.log(getHumanChoice());

// Step 4: Declare the players score variables
// Your game will keep track of the players score. You will write variables to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

let botScore = 0, humanScore = 0;

// Step 5: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

// const humanChoice = getHumanChoice();
// const botChoice = getComputerChoice();

function playRound(humanChoice, botChoice){


    if ((humanChoice === "Rock" && botChoice === "Scissors") || (humanChoice === "Paper" && botChoice === "Rock") || (humanChoice === "Scissors" && botChoice === "Paper")) {

        humanScore += 1;
        console.log(humanChoice + " " + botChoice);
        console.log("MyScore: " + humanScore + " BotScore: " + botScore);
        return "You Win!";
    } else if (humanChoice === botChoice){

        console.log(humanChoice + " " + botChoice);
        console.log("MyScore: " + humanScore + " BotScore: " + botScore);
        return "Draw!";
    } else {

        botScore += 1;
        console.log(humanChoice + " " + botChoice);
        console.log("MyScore: " + humanScore + " BotScore: " + botScore);
        return "You Lose!";
    }

}

// const humanSelection = getHumanChoice();
// const botSelection = getComputerChoice();

// console.log(playRound(humanSelection, botSelection));

// Step 6: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.

function playGame(){

    botScore = 0;
    humanScore = 0;

    for (step = 0; step < 5; step++){
    
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > botScore){
        console.log("You Win!");
    } else if (humanScore === botScore) {
        console.log("Draw!");
    } else {
        console.log("You Lose!");
    }

}

console.log(playGame());