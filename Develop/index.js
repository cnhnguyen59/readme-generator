// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs')
/* const MarkdownIt = require('markdown-it'); */
const generateMarkdown = require('./utils/generateMarkdown');
/* md = new MarkdownIt() */
const fileName = 'README.md'

// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message: 'Author name:',
    name:'author'
  },
  {
    type:'input',
    message: 'Github username:',
    name:'githubUser'
  },
  {
    type: 'input',
    message: 'Email address:',
    name: 'email'
  },
  {
    type: 'input',
    message: 'Project name:',
    name: 'projName'
    
  },
  {
    type: 'input',
    message: 'Please provide a short description of the project:',
    name: 'projDes'
    
  },
  {
    type: 'input',
    message: 'Command should be run to install dependencies:',
    name: 'install'
    
  },
  {
    type: 'input',
    message: 'Instructions/examples for use:',
    name: 'usage'
    
  },
  {
    type: 'input',
    message: 'Test instructions for the project:',
    name: 'test',
    
  },
  {
    type: 'list',
    message: 'Project license:',
    name: 'license',
    choices: ['MIT','ISC','BSD','Apache_2.0', 'None']
    
  },
  {
    type: 'input',
    message: 'Contribution guidelines:',
    name: 'contribute'
    
  }
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  
    fs.writeFile(fileName, data, error =>
        error ? console.error(error) : console.log("README.md created"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => generateMarkdown(data))
        .then(data => writeToFile(fileName, data))
}

// Function call to initialize app
init();
