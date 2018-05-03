let Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;

    this.toString = function () {
        if (this.guessed === true) {
            return (' ' + this.letter);
        } else {
            return(' ' + '_');
        }
    };

    this.guess = function (char) {
        if (char === this.letter) {
            this.guessed = true;
        };
    };
};

module.exports = Letter;

// let test = new Letter('a');
// test.guess('z');
// console.log(test + '');