// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project name:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license should your project have?',
        choices: ['Apache', 'MIT', 'BSD 2', 'Eclipse'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Install by entering:',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test by entering the below into command line:',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the use of your project:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Want to contribute?',
        default: 'See contact information',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Generating README');
        writeToFile('README.md', generateMarkdown(answers));
    })
}

// Function call to initialize app
init();