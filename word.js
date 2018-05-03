

let Letter = require('./letter.js');


let Word = function (word) {
   
    this.wordLetters = Array.from(word).map(letter => new Letter(letter));

    this.display = function() {
        let displayWord = '';
        this.wordLetters.forEach((letter) => {
            displayWord += letter.toString();
        });
        console.log(displayWord);
    };

    this.userGuess = function(guessLetter) {        
        this.wordLetters.forEach((letter) => {
            letter.guess(guessLetter);
        });
    };
};

module.exports = Word;

// let test = new Word('banana');
// test.userGuess('p');
// test.display();
