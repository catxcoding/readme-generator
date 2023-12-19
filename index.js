// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user input
const questions = [
    {
      type: 'input',
      message:'What is the name of your project?',
      name: 'projectName',
    },
    {
      type: 'input',
      message:'Give a brief description of your app.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the directions to install your application?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'How about your project usage? How do you use your application?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Any guidelines for user contributions?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Any guidelines for testing your application?',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'What license are you using for your application?',
      name: 'license',
      choices: ['MIT', 'GNU GPLv3', 'Apache-2.0', 'Creative Commons', 'BSD 3-Clause License']
    },
    {
      type: 'input',
      message: 'What is your GitHub profile link?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ];
  

// Function to write README file
function writeToFile(response) {
  let markdown = generateMarkdown(response);

  // Check if the directory exists, if not, create it
  if (!fs.existsSync('./responses')){
      fs.mkdirSync('./responses');
  }

  fs.writeFile(`./responses/README.md`, markdown, (err) => {
      if (err) {
          console.error('Error writing file:', err);
      } else {
          console.log('Success! README.md file created.');
      }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
      console.log('Generating README...');
      writeToFile(response);
  });
}

// Function call to initialize app
init();
