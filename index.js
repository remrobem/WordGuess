// **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses


let Word = require('./word.js');
let inquirer = require('inquirer');

let wordList = [
    'begonia',
    'bluebell',
    'buttercup',
    'daisy',
    'daffodil',
    'gardenia',
    'geranium',
    'jasmine',
    'lilac',
    'lily',
    'poppy',
    'rose',
    'snapdragon',
    'tulip',
    'violet'
]

let prompt = [{
    type: 'input',
    name: 'userGuess',
    message: 'Guess a letter!'
}];

let letterFound = false;
let wrongGuessesAllowed = 10;
let wrongGuesses = 0;
let openLetters = 0;
let prevOpenLetters = 0;
// let guessWord = '';

let guessWord = new Word(wordList[randomNumber()]);
let display = guessWord.display();
console.log(display);
wrongGuesses = 0;
game();


function newGameSetup() {
    let guessWord = new Word(wordList[randomNumber()]);
    let display = guessWord.display();
    console.log(display);
    wrongGuesses = 0;
}

function game() {


    inquirer.prompt(prompt).then(answers => {
        let letterFound = guessWord.userGuess(answers.userGuess);

        let display = guessWord.display();
        console.log(display);

        openLetters = (display.match(/_/gi) || []).length;

        if (openLetters === 0) {
            console.log('You guessed it! On to the next word!');
            guessWord = new Word(wordList[randomNumber()]);
            display = guessWord.display();
            console.log(display);
            wrongGuesses = 0;
        } else {
            if (letterFound) {
                console.log('CORRECT!');
            } else {
                console.log('INCORRECT!');
                wrongGuesses += 1;
                if (wrongGuesses >= wrongGuessesAllowed) {
                    console.log('Sorry. Too many wrong guesses. Starting over with a new word');
                    guessWord = new Word(wordList[randomNumber()]);
                    display = guessWord.display();
                    console.log(display);
                    wrongGuesses = 0;
                    // guessWord.setTrue();
                    // display = guessWord.display();
                    // console.log('Sorry. Too many wrong guesses for:');
                    // console.log(display);
                    // console.log('Starting over with a new word');
                } else {
                    console.log((wrongGuessesAllowed - wrongGuesses) + ' guesses remaining')
                }
            };
        };

        game();
    });
};


function randomNumber() {
    return Math.floor(Math.random() * 15);
}