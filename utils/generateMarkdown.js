// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.titleval}
  ![badge](https://img.shields.io/badge/License-${data.userLic}-red)
  
${data.description}


> ## Installation
${data.install}

> ## Credits
 ${data.userCredits}

> ## License

 
`;
}

module.exports = generateMarkdown;
