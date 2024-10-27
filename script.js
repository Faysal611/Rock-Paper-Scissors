let typed_str;
let humanSpan = document.querySelector(".humanScore");
let cpuSpan = document.querySelector(".cpuScore");

let button = document.querySelectorAll(".btn");
button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
       typed_str =  event.target.textContent;
        playRound(getComputerChoice(), getHumanChoice());
       humanSpan.textContent = humanScore;
       cpuSpan.textContent = computerScore;
       if(humanScore > computerScore) {
        
       }
    })
})

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

    if (typed_str === "Paper" || typed_str === "Rock" || typed_str === "Scissors") {
        
        return typed_str;
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

    

// for (let i = 0; i < 5; i++) {
//     playRound(getComputerChoice(), getHumanChoice());
// }

// if ( humanScore === computerScore) {
//     console.log("It's a draw.");
// }

// else if (humanScore > computerScore) {
//     console.log("You win.");
// }

// else {
//     console.log("You lose.");
// }