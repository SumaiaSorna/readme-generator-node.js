// import inquirer

const inquirer = require("inquirer");

//declare a list of questions
const question = [
  //Define the questions
  //project Name
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
  },
  // Description of the project
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  // Installation Instructions
  {
    type: "input",
    message: "Does your project require any installation?",
    name: "installation",
  },
  // Usage Information
  {
    type: "input",
    message: "How do you use this project?",
    name: "usage",
  },
  // Test Instruction
  {
    type: "input",
    message: "How do you test this project?",
    name: "test",
  },
  // Contribution Guidelines
  {
    type: "input",
    message: "How can people contribute to this project?",
    name: "contribution",
  },
  // License options
  {
    type: "list",
    message: "Choose a license for your project",
    name: "license",
  },
  // Github Username
  {
    type: "input",
    message: "What is your github user name?",
    name: "github",
  },
  // Email Address
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];
