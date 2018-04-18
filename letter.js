function Letter(letter) {
    this.letter = letter;

    this.displayLetter = function () {
        console.log(`This letter: ${this.letter}.`);
    }
}

module.exports = Letter;