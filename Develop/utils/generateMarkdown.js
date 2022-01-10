// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license == 'None'){
    return ''
  } else {
    return `![${license}](https://img.shields.io/badge/License-${license}-green.svg)`
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if(license == 'None'){
    return ''
  } else {
    return '- [License](#license)'
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, author) {

  if(license == 'None'){
    return ''
  } else {
    return `<a name="license"></a>
  ## License
  \n
  Copyright © 2022 ${author}
  This project is ${license} licensed.`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license)
  let licenseLink = renderLicenseLink(data.license)
  let licenseSection = renderLicenseSection(data.license, data.author)


  return `# ${data.projName}

  ${licenseBadge}
  
  ## Description
  
  ${data.projDes}

  - [Installation](#install)
  - [Usage](#usage)
  - [Test](#test)
  - [Contribution Guidelines](#contribute)
  - [Questions](#questions)
  ${licenseLink}
  
  <a name="install"></a>
  ## Installation
  
  Use the packet manager ${data.install} to install ${data.projName}
  \`\`\`bash 
  ${data.install}
  \`\`\`
  
  <a name="usage"></a>
  ## Usage
  
  \`\`\`bash 
  ${data.usage}
  \`\`\`
  
  <a name="test"></a>
  ## Test
  
  \`\`\`bash 
  ${data.test}
  \`\`\`

  <a name="contribute"></a>
  ## Contribution Guidelines

  ${data.contribute}
  
  <a name="questions"></a>
  ## Questions
  
  Github: ${data.githubUser} (https://github.com/${data.githubUser})
  Email: ${data.email}
  ________
  ${licenseSection}
  `;
}

module.exports = generateMarkdown;
