// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.titleval}
  ![badge](https://img.shields.io/badge/License-${data.userLic}-red)

> ## Description
${data.description}


> ## Installation
${data.install}

> ## Table of Contents
${data.toc}

> ## Installation
${data.install}

> ## Usuage
${data.userusage}

> ## License
${data.userLic}

> ## Contributions
${data.contrguidelines}

> ## Tests
${data.testinstr}

> ## Questions 
${data.github}

`;
}

module.exports = generateMarkdown;
