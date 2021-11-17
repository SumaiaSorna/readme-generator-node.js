const generateTitle = (answers) => {
  return `# ${answers.title} ![${answers.license}](https://img.shields.io/static/v1?label=${answers.title}&message=License&color=critical)`;
};

const generateTableOfContents = (answers) => {
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
    `;
};

module.exports = generateReadme;
