//Access to the button which add an event listener
const startGameBtn = document.getElementById('start-game-btn');

const ROCK ='ROCK';
const PAPER ='PAPER';
const SCISSORS ='SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER';
const RESULT_COMPUTER_WINS = 'COMPUTER';

let gameIsOn = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
    if (
        selection !== ROCK && 
        selection !== PAPER &&
        selection !== SCISSORS
        ){
        alert(`Oops, invalid choice so we made a choice for you: ${DEFAULT_USER_CHOICE}`);
        return DEFAULT_USER_CHOICE;
        }
        return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};


const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

const startGame = () => {
    if(gameIsOn) {
        return;
    }
    gameIsOn = true;
    console.log('Going...');
    const playerSelection = getPlayerChoice();
    const boxSelection = getComputerChoice();
    const winner = getWinner(boxSelection, playerSelection);
    let message = `You picked ${playerSelection}, computer picked ${boxSelection}, so you  `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won';
    } else {
        message = message + 'lost';
    }
    alert(message);
    gameIsOn = false;
};

//lets see function as object 
console.dir(startGame);

startGameBtn.addEventListener('click', startGame);

//Anonymous function passed to the addEventListener function
//startGameBtn.addEventListener('click', function() {
   // console.log('Game is starting');
//});

const sumUp = (a, b, ...numbers) => {
    const validateNumber = (number) => {
    };
    console.log(validateNumber);
    
    let sum  = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
};

console.log(sumUp(4, 6, 6, 4));

            // is a function passed to another as an argument 
            const greeting = (name) => {
                alert('Message Here' + name);
            }

            const processGretting = (callback) => {
                const name = prompt('Enter X here');
                callback(name);

            }

            processGretting(greeting);