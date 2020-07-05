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
];


//This calls the questions
inquirer.prompt(questions)
// function to write README file
.then(function (data) {
        //Taking the title name and giving the document that name
        var readMe = data.name + ".md";
        fs.writeFile(readMe, generateMarkdown(data), function (err) {
            //handle an error if there is one
            if (err) {
                return console.log(err);
            }
            //else return "Sucess!"
            console.log("success");
        });
});





// function to initialize program
function init() {

}

// function call to initialize program
init();
