let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();

        if (!playGame) return;

        const guess = parseInt(userInput.value);

        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number within the range of 1 to 100");
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it absolutely right!");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("The number is TOO low");

        if (numGuess === 10) {
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        }
    } else {
        displayMessage("The number is TOO high");

        if (numGuess === 10) {
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        }
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");

    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

    startOver.appendChild(p);

    playGame = false;

    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");

    newGameButton.addEventListener("click", function () {
        randomNumber = Math.floor(Math.random() * 100) + 1;

        prevGuess = [];
        numGuess = 0;

        guessSlot.innerHTML = "";
        remaining.innerHTML = "10";
        lowOrHi.innerHTML = "";

        userInput.removeAttribute("disabled");

        startOver.removeChild(p);

        playGame = true;
    });
}