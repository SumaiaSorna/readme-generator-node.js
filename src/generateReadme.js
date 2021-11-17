const generateProjectTitle = (answers) => {
  return `# ${answers.title} ![MIT](https://img.shields.io/static/v1?label=${answers.ProjectTitle}message=License&color=green)`;
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
  return `## Installation
    
    Run the following script to install the packages required for the application:
    
    \`\`\`
    ${answers.installation}
    \`\`\``;
};

const generateUsage = (answers) => {
  return `## Usage
    
    To use the application run the following script:
    
    \`\`\`
    ${answers.usage}
    \`\`\``;
};

const generateTests = (answers) => {
  return `## Tests
    
    To use the application run the following script:
    
    \`\`\`
    ${answers.tests}
    \`\`\``;
};

const generateContributing = (answers) => {
  return `## Contributing
  
    $(answers.contribution)
    `;
};

const generateLicense = (answers) => {
  return `## License
  
    ${answers.license}
    `;
};

// generate readme based on answers
const generateReadme = (answers) => {
  return `${generateProjectTitle(answers)}
  
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
