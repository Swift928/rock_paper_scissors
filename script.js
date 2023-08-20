let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let compResult = Math.floor(Math.random() * choices.length);
    return choices[compResult].toLowerCase();
}

function playerClick() {
    let btns = document.querySelectorAll('.selection');
    btns.forEach(item => 
        {item.addEventListener('click', () => {
        let choice = item.textContent.toLowerCase();
        console.log(game(choice));
    })})};

let player_score = 0;
let comp_score = 0;

function scoreKeeper() {
    let scorer = document.querySelector('#scoreCounter')
    if (player_score !== 5 && comp_score !== 5) {
        scorer.innerHTML = `Score: <br> User - ${player_score} | Computer - ${comp_score}`
    } else if (player_score == 5) {
        scorer.innerHTML = `You Win! <br> User - ${player_score} | Computer - ${comp_score}`
    } else { scorer.innerHTML = `You Lose! <br> User - ${player_score} | Computer - ${comp_score}` }
}

let answers = document.createElement('div');
let btnContainer = document.querySelector('.button-container')
btnContainer.parentNode.insertBefore(answers, btnContainer)


function gameSelections(player, compChoice) {
    answers.textContent = ''

    playerAnswer = capitalizeFirstLetter(player)
    compAnswer = capitalizeFirstLetter(compChoice)
    answers.innerHTML =`User: ${playerAnswer} | Computer: ${compAnswer}`
};

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


let isGameOver = false;

function game(player) {
    if (!isGameOver) {
    let moves = choices.map(item => item.toLowerCase());
    let compChoice = getComputerChoice()
       
    playGame(player, compChoice)

    gameSelections(player, compChoice)

    scoreKeeper()}

    if (player_score == 5 || comp_score == 5) {
        isGameOver = true;
    }};
    
function playGame(player, compChoice) {
    if (player === 'rock') {
        if (compChoice === 'paper') {
            player_score += 1;
        } else if (compChoice === 'rock') {
            // It's a tie
        } else {
            comp_score += 1;
        }
        } else if (player === 'paper') {
        if (compChoice === 'rock') {
            player_score += 1;
        } else if (compChoice === 'paper') {
            // It's a tie
        } else {
            comp_score += 1;
        }
        } else if (player === 'scissors') {
        if (compChoice === 'paper') {
            player_score += 1;
        } else if (compChoice === 'scissors') {
            // It's a tie
        } else {
            comp_score += 1;
        }}};


playerClick()