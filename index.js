const inquirer = require("inquirer");
const fs = require("fs");



inquirer
    .prompt([
        {
            type: "input",
            message: "What would you like the Title to be?",
            name: "titleval"
        },
        {
            type: "input",
            message: "What would you like the description content to be?",
            name: "description"
        },
        {
            type: "input",
            message: "What will your table of contents be?",
            name: "toc"
        },
        {
            type: "input",
            message: "What are your installation instructions?",
            name: "install"
        },
        {
            type: "input",
            message: "What is your user usage?",
            name: "description"
        },
        {
            type: "input",
            message: "What is are the contribution guidelines?",
            name: "contrguidelines"
        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "testinstr"
        }
    ])
    .then(function (response) {

        if (response.confirm === response.password) {
            console.log("");
        }
        else {
            console.log();
        }
    });

    console.log();
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
