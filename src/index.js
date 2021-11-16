// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//declare a list of questions
const questions = [
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
    type: "confirm",
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
    type: "confirm",
    message: "Do you want to test for this project?",
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
    name: "email",
  },
];

const generateProjectTitle = (answers) => {
  return `# Title ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)`;
};

const generateTableOfContent = (answers) => {
  return `
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [License](#license)`;
};

const generateDescription = (answers) => {
  return `## Description

  ADD TEXT HERE`;
};

const generateInstallation = (answers) => {};

const generateUsage = (answers) => {};

const generateTest = (answers) => {};

const generateContribution = (answers) => {
  return `## Contributing

  ADD TEXT HERE
  `;
};

const generateLicense = (answers) => {
  return `## License

  ADD TEXT HERE
  `;
};

// generate readme based on answers
const generateReadme = (answers) => {
  return `${generateProjectTitle(answers)}

  ${generateTableOfContent(answers)}

  ${generateDescription(answers)}

  ## Installation

Run the following script to install the packages required for the application:

\`\`\`
ADD TEXT HERE
\`\`\`

## Usage

To use the application run the following script:

\`\`\`
ADD TEXT HERE
\`\`\`

## Tests

To use the application run the following script:

\`\`\`
ADD TEXT HERE
\`\`\`

  ${generateContribution(answers)}

  ${generateLicense(answers)}

  `;
};

// // write readme
// const writeToFile = (answer) => `
// `;

const start = async () => {
  // prompt the questions using inquirer

  const readmeAnswers = await inquirer.prompt(questions);
  console.log(readmeAnswers);
  // write generated readme to a file
  writeToFile("GENERATED_README.md", readmeAnswers);
};

// call the function to run the application
start();
