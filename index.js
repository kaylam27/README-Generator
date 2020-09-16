const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkDown = require("./generateMarkdown.js")


const writeFile = util.promisify(fs.writeFile);


inquirer.prompt(
  [
    {
      type: "input",
      message: "What is your Github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
      {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a short description of your project:",
      name: "description",
    },
    {
      type: "list",
      message: "What type of license would you like to use?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
    {
      type: "input",
      message: "What command should be used to install dependencies?",
      name: "install",
      default: "npm i"
    },
    {
      type: "input",
      message: "What command should be used to run tests?",
      name: "tests",
      default: "npm run test"
    },
    {
      type: "input",
      message: "What does the user need to know about the repo?",
      name: "know"
    },
    {
      type: "input",
      message: "What does the user need to know about contributing to the repo?",
      name: "contribute"
    }
  ]
).then(function (response){
  const generate = generateMarkDown(response);
  return writeFile("README2.md", generate);
}
).then(function () {
  console.log("Successfully written.");
})
.catch(function (err) {
  console.log(err);
});