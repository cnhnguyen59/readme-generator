// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs')
const fileName = 'README.md'

// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message: 'What is your Github username?',
    name:'githubUser'
  },
  {
    type: 'input',
    message: 'What is your email address',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is your project name?',
    name: 'projName'
    
  },
  {
    type: 'input',
    message: 'Please provide a short description of your project',
    name: 'projDes'
    
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'projDep'
    
  },
  {
    type: 'input',
    message: 'Please provide instructions/examples for use',
    name: 'usage'
    
  },
  {
    type: '',
    message: 'What kind of license should your project have?',
    name: 'license'
    
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing?',
    name: 'contribute'
    
  },
  {
    type: 'input',
    message: 'Were there any contributors to the project?',
    name: 'credits'
    
  }
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    console.log(data)
    console.log(fileName)

    let content = 
    `#${data.projName}



    `
    console.log(content)
    
    /* fs.writeFile(fileName, content, (error, data) =>
    error ? console.error(error) : console.log(data)) */

}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then(data =>{
            writeToFile(fileName, data)
        })

}

// Function call to initialize app
init();
