// license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
  }
  
  // license link
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `\n* [License](#license)\n`;
    }
    return '';
  }
  
  // returns the license section of README
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
  Project is licensed under ${license} license.`;
    }
    return '';
  }
  
  // generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}  
    
    ## Table of Content
    - [Installation](#installation)
    - [Usage](#usage)
    - [Tests](#tests)
    - [Contributing](#contributing)
    - [Questions](#questions)
    - [License](#license)
    ## Installation
    Install necessary dependencies by entering the below in command line:
    \`\`\`
    ${data.installation}
    \`\`\`
    ## Usage
    ${data.usage}
    ## Tests
    To run a test enter below in command line:
    \`\`\`
    ${data.test}
    \`\`\`
    
    ## Contribute
    ${data.contribute}
    ## Questions
    Please reach me at ${data.email}. 
    Find more of my work at [${data.github}](https://github.com/${
      data.github
    }/).
    ## License
    ${renderLicenseLink(data.license)}
    ${renderLicenseSection(data.license)}
  `;
  }
  
  module.exports = {generateMarkdown};