function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    switch (randomChoice) {
        case 1:
            return "Rock";
        case 2:
            return "Scissors";
        case 3:
            return "Paper";
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Game TIES!!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
        return "You Won! ";
    } else {
        return "You Lose!";
    }
}

// const buttons = document.querySelector('button');

// buttons.forEach((button) => {
//     button.addEventListener('Click', () => {
//         const playerChoice = button.id;
//         const computerChoice = getComputerChoice();
//         console.log(playRound(playerChoice, computerChoice));
//         if (win > loss) {
//             console.log('user won');
//         }
//         else {
//             console.log('You loss');
//         }
//     }))
// }


function game() {

    let win = 0;
    let loss = 0;
    // for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice;
    // let playerChoice = prompt("Enter your choice (Rock, Paper, Scissors):");

    console.log(playRound(playerChoice, computerChoice));
    let final = playRound(playerChoice, computerChoice);
    if (final == "You Won! ") {
        win++;
    }
    else {
        loss++;
    }
    // }
    if (win > loss) {
        console.log("you are the Final winer..");
    }
    else {
        console.log("Better luck next time..");
    }
}


game();

// function getComputerChoice() {
//     let randomChoice = Math.floor(Math.random() * 3) + 1;

//     switch (randomChoice) {
//         case 1:
//             return "Rock";
//         case 2:
//             return "Scissors";
//         case 3:
//             return "Paper";
//     }
// }

// function playRound(playerChoice, computerChoice) {
//     if (playerChoice === computerChoice) {
//         return "Game TIES!!";
//     } else if (
//         (playerChoice === "Rock" && computerChoice === "Scissors") ||
//         (playerChoice === "Scissors" && computerChoice === "Paper") ||
//         (playerChoice === "Paper" && computerChoice === "Rock")
//     ) {
//         return "You Won! ";
//     } else {
//         return "You Lose!";
//     }
// }

// const buttons = document.querySelectorAll('button');
// let win = 0;
// let loss = 0;

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         const playerChoice = button.id;
//         const computerChoice = getComputerChoice();
//         console.log(playRound(playerChoice, computerChoice));

//         let result = playRound(playerChoice, computerChoice);
//         if (result === "You Won! ") {
//             win++;
//         } else {
//             loss++;
//         }

//         console.log(`Wins: ${win}, Losses: ${loss}`);

//         if (win > loss) {
//             console.log("You are currently winning!");
//         } else if (win < loss) {
//             console.log("You are currently losing!");
//         } else {
//             console.log("The game is currently tied!");
//         }
//     });
// });
