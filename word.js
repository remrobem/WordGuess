let Letter = require('./letter.js');


let Word = function (word) {

    this.wordLetters = Array.from(word).map(letter => new Letter(letter));

    this.display = function () {
        let displayWord = '';
        this.wordLetters.forEach(letter => {
            displayWord += letter.toString();
        });
        return displayWord;
    };

    this.userGuess = function (guessLetter) {
        letterFound = false;
        this.wordLetters.forEach(letter => {
            letter.guess(guessLetter);
        });
        return letterFound;
    };

    // this.setTrue = function () {
    //     this.wordLetters.forEach(letter => {
    //         letter.setTrue();
    //     });
    // };
};

module.exports = Word;

// let test = new Word('banana');
// test.userGuess('p');
// test.display();