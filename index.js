const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
        name: "userusage"
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
    },
    {
        type: "input",
        name: "userCredits",
        message: "Who would you like to credit?"
    },
    {
        type: "input",
        name: "userLic",
        message: "Which licensing would you like? (ex. Apache, GNU, MIT, ISC)"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    }
];


// function call to initialize program
inquirer.prompt(questions)
// function to write README file
.then(function (data) {
        //Taking the title name and giving the document that name
        var readMe = generateMarkdown(data);
        fs.writeFile("readMe.md", readMe, function (err) {
            //handle an error if there is one
            if (err) {
                return console.log(err);
            }
            //else return "Sucess!"
            console.log("success");
        });
});


