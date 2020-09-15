const toc = require('markdown-toc');

function generateMarkDown(response) {
    return `
  
  # Project name:
    ${response.title}

  ### Description:
    ${response.description}

  ### Table of Contents

  #### Installation:
    To install dependencies, please use the "${response.install}" command.

  #### Usage:
    ${response.know}

  #### License: 
    This project is covered under the ${response.license} license.
    https://img.shields.io/apm/l/markdown-toc

  #### Contributing:
    ${response.contribute}

  #### Tests:
    To run tests, please use the "${response.tests}" command.

  #### Questions 
    If you have any questions about the repo,
    open an issue or contact me directly at ${response.email}. 
    You can find more of my work at http://github.com/${response.username}.
    `;
};

module.exports = generateMarkDown;

