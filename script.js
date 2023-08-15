let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let compResult = Math.floor(Math.random() * choices.length);
    return choices[compResult].toLowerCase();
}


function game() {
    let player_score = 0;
    let comp_score = 0;
    let moves = choices.map(item => item.toLowerCase());

    for (let i = 1; i <= 5; i++) {
        

        let player = prompt('Please enter you choice: ').toLowerCase()
        let compChoice = getComputerChoice()

        do {
            if (!moves.includes(player.toLowerCase())) {
                console.log('Please choose again!')
                player = prompt("Enter a valid choice (rock, paper, scissors); ")
            } else {
                break;
            }
    
        } while (true);
        
        firstGame(player, compChoice)

        function firstGame(player, compChoice) {
        if (player === 'rock') {
            if (compChoice === 'paper') {
                player_score += 1;
                console.log(`Player: ${player}   Computer: ${compChoice}`)
                console.log('You Win!');
            } else if (compChoice === 'rock') {
                console.log(`Player: ${player}   Computer: ${compChoice}`)
                console.log(`It's a Tie!`);
            } else {
                comp_score += 1;
                console.log(`Player: ${player}   Computer: ${compChoice}`)
                console.log(`You Lose!`)
            }
            } else if (player === 'paper') {
            if (compChoice === 'rock') {
                player_score += 1;
                console.log(`Player: ${player}   Computer: ${compChoice}`)
                console.log('You Win!');
            } else if (compChoice === 'paper') {
                console.log(`Player: ${player}   Computer: ${compChoice}`)
                console.log(`It's a Tie!`);
            } else {
                comp_score += 1;
                console.log(`Player: ${player}   Computer: ${compChoice}`)
                console.log(`You Lose!`)
            }
            } else if (player === 'scissors') {
            if (compChoice === 'paper') {
                player_score += 1;
                console.log(`Player: ${player}   Computer: ${compChoice}`)
                console.log('You Win!');
            } else if (compChoice === 'scissors') {
                console.log(`Player: ${player}   Computer: ${compChoice}`)
                console.log(`It's a Tie!`);
            } else {
                comp_score += 1;
                console.log(`Player: ${player}   Computer: ${compChoice}`)
                console.log(`You Lose!`)
            }
            }   
        }
    }

if (player_score > comp_score) {
    console.log(`Player Score: ${player_score}
Computer Score: ${comp_score}
You Won the Series!`)
} else if (player_score < comp_score) {
    console.log(`Player Score: ${player_score}
Computer Score: ${comp_score}
You Lost the Series!`)
} else {
    console.log(`Player Score: ${player_score}
Computer Score: ${comp_score}
The Series is a Tie!`)
}


}


console.log(game())