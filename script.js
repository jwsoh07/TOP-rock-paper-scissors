function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return 'tie';
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You Win! Rock beats Scissors';
        }
        return 'You Lose! Paper beats Rock';
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock';
        }
        return 'You Lose! Scissors beats Paper';
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You Win! Scissors beats Paper';
        }
        return 'You Lose! Rock beats Scissors';
    }
}

function displayCurrentRoundInfo(round, playerSelection, computerSelection, result) {
    console.log('==================================');
    console.log('Round: ' + round);
    console.log('Player Choice: ' + playerSelection);
    console.log('Computer Choice: ' + computerSelection);
    console.log('Current round result: ' + result);
    console.log('==================================');
}

function displayWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log('Player Wins!');
    } else if (playerScore < computerScore) {
        console.log('Computer Wins!');
    } else {
        console.log('It\'s a tie!');
    }
}

function isValidPlayerInput(x) {
    return ['rock', 'paper', 'scissors'].includes(x.toLowerCase());
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    
    while (round <= 5) {
        let playerSelection = null;
        while (true) {
            playerSelection = prompt('Enter your choice!');
            if (isValidPlayerInput(playerSelection)) break;
            console.log('Invalid Selection!');
        }
        const computerSelection = getComputerChoice();
        const result = playSingleRound(playerSelection, computerSelection);
        displayCurrentRoundInfo(round, playerSelection, computerSelection, result);
        
        if (result.includes('You Win')) playerScore++;
        if (result.includes('You Lose')) computerScore++;
    
        round++;      
    }
    displayWinner(playerScore, computerScore);
}

game();
