
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
let guessWord = '';


let newGame = newGameSetup()
game(newGame);


function newGameSetup() {

    // get a new word and display it using _ for the letters
    let newWord = new Word(wordList[randomNumber()]);
    let display = newWord.display();
    console.log(display);
    wrongGuesses = 0;
    return (newWord);
}

function game(guessWord) {

    //prompt user for input letter
    inquirer.prompt(prompt).then(answers => {

        // check to see if letter was found in the word
        letterFound = guessWord.userGuess(answers.userGuess);
        // display the guess diplay line with guessed letters display
        display = guessWord.display();
        console.log('\n' + display + '\n');

        // check to see if all the letters have been guessed
        openLetters = (display.match(/_/gi) || []).length;

        if (openLetters === 0) {
            console.log('\nYou guessed it! On to the next word!\n');
            guessWord = newGameSetup()

        } else {
            // let player know if letter guessed was corrent or not. 
            // If too many wrong, guesses, diplay the word ans start over with new word
            if (letterFound) {
                console.log('\nCORRECT!\n');
            } else {
                console.log('\nINCORRECT!');
                wrongGuesses += 1;
                if (wrongGuesses >= wrongGuessesAllowed) {
                    guessWord.setTrue();
                    console.log('\nSorry. Too many wrong guesses. Here is the word you could not guess. Starting over with a new word');
                    display = guessWord.display();
                    console.log('\n' + display + '\n');
                    guessWord = newGameSetup()
                } else {
                    console.log('\n' + (wrongGuessesAllowed - wrongGuesses) + ' guesses remaining\n')
                }
            };
        };
        game(guessWord);
    });
};


function randomNumber() {
    return Math.floor(Math.random() * 15);
}