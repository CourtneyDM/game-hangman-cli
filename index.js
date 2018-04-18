var inquirer = require("inquirer");
var Letter = require("./letter");

var question = [{
    type: "input",
    name: "input",
    message: "Guess a letter!"
}];

inquirer.prompt(question).then(answers => {

    let letter = new Letter(answers.input);
    letter.displayLetter();
});