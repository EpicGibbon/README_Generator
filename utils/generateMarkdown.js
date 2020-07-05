// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.titleval}
  ![badge](https://img.shields.io/badge/License-${data.userLic}-red)

> ## Description
${data.description}

> ## Table of Contents
${data.toc}

> ## Installation
${data.install}

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
[github](http://github.com./${data.github})
Feel free to reach out to me with any questions or comments: [mailto:${data.email}]
`;
}

module.exports = generateMarkdown;
