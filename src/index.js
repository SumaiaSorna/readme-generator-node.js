// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = require("./generateReadme.js");

//declare a list of questions
const questions = [
  //Define the questions
  //project Name
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  // Description of the project
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  // Installation Instructions
  {
    type: "confirm",
    message: "Does your project require any installation?",
    name: "installation",
  },
  //installation steps
  {
    type: "input",
    message: "Please add the necessary installation information.",
    name: "installationInformation",
    when: (answers) => {
      return answers.installation;
    },
  },
  // Usage Information
  {
    type: "input",
    message: "How do you use this project?",
    name: "usage",
  },
  // Usages steps
  {
    type: "input",
    message: "Please input the usages steps:",
    name: "usageSteps",
    when: (answers) => {
      return answers.usage;
    },
  },
  // Test Instruction
  {
    type: "confirm",
    message: "Are there any tests for this project?",
    name: "test",
  },
  // test steps
  {
    type: "input",
    message: "Please provide the test steps:",
    name: "testSteps",
    when: (answers) => {
      return answers.test;
    },
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
    choices: ["MIT", "Apache", "Mozilla-Public", "Eclipse-Public"],
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
  // Questions
  {
    type: "input",
    message: "Do you have any questions about this project?",
    name: "questions",
  },
];

// Create a function to write README file
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

// Create a function to start the application
const start = async () => {
  // prompt the questions using inquirer and get the answers
  const answers = await inquirer.prompt(questions);
  const readme = generateReadme(answers);

  console.log(answers);
  // write generated readme to a file
  writeToFile("GENERATED_README.md", readme);
};

// call the function to run the application
start();
