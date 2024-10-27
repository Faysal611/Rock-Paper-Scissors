let count = 0;
let typed_str;
let humanSpan = document.querySelector(".humanScore");
let cpuSpan = document.querySelector(".cpuScore");
let result = document.querySelector(".result");

let button = document.querySelectorAll(".btn");
button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
       typed_str =  event.target.textContent;
        playRound(getComputerChoice(), getHumanChoice());
       humanSpan.textContent = humanScore;
       cpuSpan.textContent = computerScore;
       count++;

       if(count === 5) {
        if(humanScore > computerScore) {
            result.textContent = "You win the match!";
        }
        else if(humanScore < computerScore) {
            result.textContent = "You lost!";
        }
        else{
            result.textContent = "Draw!"
        }
        button.forEach((btn) => {
            btn.disabled = true;
        })
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
        return "Scissors";
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
    
    else if ((computerChoice === "Paper" && humanChoice === "Rock") || (computerChoice === "Rock" && humanChoice === "Scissors") || (computerChoice === "Scissors" && humanChoice === "Paper")) {
        computerScore++;   
    }

    else if ((computerChoice === "Rock" && humanChoice === "Paper") || (computerChoice === "Scissors" && humanChoice === "Rock") || (computerChoice === "Paper" && humanChoice === "Scissors")) {
        humanScore++;    
    }

    console.log(computerScore + " -- " + humanScore);
}
