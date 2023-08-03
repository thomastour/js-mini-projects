
let computerMove ='';
let playerMove= '';

// this function will pick a random move for the computer
function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber <= 1/3 ) {
        computerMove = 'rock';

    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper'; 

    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove ='scissors'
}

}

let result ='';

// this function will show the result of the game
function showResult() {
    let computerMoveIcon = '';
    let playerMoveIcon = '';
    if (computerMove === 'rock') {
        computerMoveIcon = '<img src="./img/rock-emoji.png" class="move-icon">';
    } else if (computerMove === 'paper') {
        computerMoveIcon = '<img src="./img/paper-emoji.png" class="move-icon">';
    } else if (computerMove === 'scissors') {
        computerMoveIcon = '<img src="./img/scissors-emoji.png" class="move-icon">';
    }

    // Generating playerMoveIcon based on playerMove using template literals
    if (playerMove === 'rock' || playerMove === 'paper' || playerMove === 'scissors') {
        playerMoveIcon = `<img src="./img/${playerMove}-emoji.png" class="move-icon">`;
    }


    // Generating result based on computerMove and playerMove
    if (computerMove === playerMove) {
        result = 'Tie';
    } else if (
        (computerMove === 'rock' && playerMove === 'scissors') ||
        (computerMove === 'paper' && playerMove === 'rock') ||
        (computerMove === 'scissors' && playerMove === 'paper')
    ) {
        result = 'You lost loser!';
    } else {
        result = 'You won';
    }


    // this function will update the score
    if (result === 'You won') {
        score.wins += 1;
    } else if (result === 'You lost loser!') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    } else {
        console.log('error');
    }

    const resultMessage = document.getElementById('resultMessage');
    resultMessage.innerHTML = `You: ${playerMoveIcon} - ${computerMoveIcon} Result: ${result} <br> Wins: ${score.wins} - Losses: ${score.losses} - Ties: ${score.ties}`;
}


const buttonContainer = document.getElementById('playButton'); 
const buttons = buttonContainer.getElementsByTagName('button'); 

Array.from(buttons).forEach(button => {
button.addEventListener('click', function(){
    pickComputerMove();
    playerMove = this.getAttribute('data-move'); 
    showResult();
   
})
});


const score = {
    wins: 0,
    losses: 0,
    ties: 0
}

// this function will reset the game and the score
function resetGame() {
    computerMove = '';
    result = '';
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = 'Choose Rock, Paper, or Scissors to start the game!';
}


const resetScoreButton = document.getElementById('resetScore');
let isReset = false; // Add a variable to track the reset state

resetScoreButton.addEventListener('click', function() {
    if (!isReset) { // Check if the game is not reset !isReset becomes true because i set isReset = false
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        resetGame();
        
        resetScoreButton.textContent = 'Reset is DONE!'; // Change the button text
        resetScoreButton.style.backgroundColor = 'red'; // Change the button background color to red
        isReset = true; 
    } else { // If the game is reset
        resetScoreButton.textContent = 'Reset Score'; // Restore the original button text
        resetScoreButton.style.backgroundColor = ''; // Reset the button background color to its default
        isReset = false; 
    }
    // Set a timeout to revert the button state after 1 second
    setTimeout(() => {
        resetScoreButton.textContent = 'Reset Score'; // Restore the original button text
        resetScoreButton.style.backgroundColor = '';
        isReset = false; // Reset the button background color to its default
    }, 1000); 
});



