function getComputerChoice() {

let random_num = Math.random();

if (random_num <= 0.33) {
    return "Rock";
}

else if (random_num > 0.33 && random_num <= 0.66) {
    return "Paper";
}

else {
    return "Scissor";
}

}

function getHumanChoice() {
    let typed_str = prompt("Enter your choice.");

    if (/paper/gi.test(typed_str) || /rock/gi.test(typed_str) || /scissor/gi.test(typed_str)) {
        
        return typed_str.charAt(0).toUpperCase() + typed_str.slice(1);
    }

    else {
        return "Invalid Input";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice || humanChoice === "Invalid Input") {
        console.log(computerScore + " -- " + humanScore);
        return;
    }
    
    else if ((computerChoice === "Paper" && humanChoice === "Rock") || (computerChoice === "Rock" && humanChoice === "Scissor") || (computerChoice === "Scissor" && humanChoice === "Paper")) {
        computerScore++;
        
    }

    else if ((computerChoice === "Rock" && humanChoice === "Paper") || (computerChoice === "Scissor" && humanChoice === "Rock") || (computerChoice === "Paper" && humanChoice === "Scissor")) {
        humanScore++;
        
    }

    console.log(computerScore + " -- " + humanScore);
    
}

for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
}

if ( humanScore === computerScore) {
    console.log("It's a draw.");
}

else if (humanScore > computerScore) {
    console.log("You win.");
}

else {
    console.log("You lose.");
}