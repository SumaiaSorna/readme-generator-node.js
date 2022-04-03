const generateTitle = (answers) => {
  return `# ${answers.title} ![${answers.license}](https://img.shields.io/static/v1?label=${answers.license}&message=License&color=critical)`;
};

const getOtherContents = ({ installation, usage, tests }) => {
  const contents = [];

  if (installation) contents.push("- [Installation](#installation)");

  if (usage) contents.push("- [Usage](#usage)");

  if (tests) contents.push("- [Tests](#tests)");

  return contents;
};

const generateTableOfContents = (answers) => {
  const contents = [
    "- [Description](#description)",
    ...getOtherContents(answers),
    "- [Contributing](#contributing)",
    "- [License](#license)",
    "- [Question](#question)",
  ];

  return `## Table of Contents\n
${contents.join("\n")}
`;
};

const generateDescription = (answers) => {
  return `## Description
  ${answers.description}`;
};

const generateInstallation = (answers) => {
  if (answers.installation) {
    return `## Installation
    
  Run the following script to install the packages required for the application:
    
  \`\`\`
  ${answers.installationInformation}
  \`\`\``;
  } else {
    return ``;
  }
};

const generateUsage = (answers) => {
  if (answers.usage) {
    return `## Usage

  To use the application run the following script:
    
  \`\`\`
  ${answers.usageSteps}
  \`\`\``;
  } else {
    return ``;
  }
};

const generateTests = (answers) => {
  if (answers.tests) {
    return `## Tests
    
  To use the application run the following script:
    
  \`\`\`
  ${answers.testSteps}
  \`\`\``;
  } else {
    return ``;
  }
};

const generateContributing = (answers) => {
  return `## Contributing
  ${answers.contribution}
    `;
};

const generateLicense = (answers) => {
  return `## License
  ${answers.license}
    `;
};

const generateQuestion = (answers) => {
  return `## Question

  If you have any questions regarding this project please reach me via my email or my github using the details below:

  Email: ${answers.email}

  GitHub: https://github.com/${answers.github}
    `;
};

// generate readme based on answers
const generateReadme = (answers) => {
  return `${generateTitle(answers)}  
${generateTableOfContents(answers)}    
${generateDescription(answers)}   
${generateInstallation(answers)}   
${generateUsage(answers)}    
${generateTests(answers)}   
${generateContributing(answers)}   
${generateLicense(answers)}
${generateQuestion(answers)}`;
};

module.exports = generateReadme;
