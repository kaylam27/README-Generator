const inquirer = require("inquirer");
const fs = require("fs");

function verifyInput(name) {
  return name !== "";
}

// array of questions for user
const questions = [
    {
    type: "input",
    message: "What is your name?",
    name: "name",
    },
    {
    type: "input",
    message: "What is your email?",
    name: "email",
    },
    {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    },
    {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
    },
    {
    type: "input",
    message: "Write a brief description of your project:",
    name: "description",
    },
    {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
    default: "npm install"
    },
    {
    type: "list",
    message: "How do you use your project?",
    name: "demo",
    choices: ["list", "picture/video", "both"]
    },
    {
    type: "list",
    message: "What type of license would you like to use?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
    type: "input",
    message: "What command should be used to run tests?",
    name: "test",
    default: "npm test"
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program

function init() {
  try {
    console.log("All questions require an answer.");

    const answers = await promptUser();

    const write = generateMarkdown(answers);
    console.log(answers);
    await fs.writeFile("README.md", write, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  } catch (err) {
    console.log(err);
  }
}


// function call to initialize program
init();





const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

function verifyInput(name) {
  return name !== "";
}

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
    validate: verifyInput
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: verifyInput
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: verifyInput
  },
  {
    type: "input",
    message: "What is the project's name?",
    name: "title",
    validate: verifyInput
  },
  {
    type: "input",
    message: "Please write a description about your project",
    name: "description",
    validate: verifyInput
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
    default: "npm i"
  },
  {
    type: "list",
    message: "How do you want to explain usage?",
    name: "demo",
    choices: ["list", "picture/video", "both"]
  },
  {
    type: "list",
    message: "What type of license to use?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    message: "What command should be used to run tests?",
    name: "test",
    default: "npm test"
  },
  {
    type: "confirm",
    message: "Did you collaborate with anyone?",
    name: "collaborate",
    default: false
  }
];

  answers.collaborators = arrayAnsCollab;
  answers.usageList = arrayList;
  answers.fileList = arrayFile;
  console.log(answers);
  return answers;
}

// function to initialize program
async function init() {
  try {
    console.log("All questions require an answer.");

    const answers = await promptUser();

    const write = generateMarkdown(answers);
    console.log(answers);
    await fs.writeFile("README.md", write, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();