const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "templates");
const outputPath = path.join(OUTPUT_DIR, "main.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

var EmployeeTeam = [];
function Teamcreator() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "members",
        message: "Please build your team. How many team members do you want?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of your employee?",
      },
      {
        type: "input",
        name: "Email",
        message: "What is the Email of your employee?",
      },

      {
        type: "input",
        name: "name",
        message: "What is the name of your Manager?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of your Manager?",
      },
      {
        type: "input",
        name: "Email",
        message: "What is the Email of your Manager?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your Intern?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of your Intern?",
      },
      {
        type: "input",
        name: "Email",
        message: "What is the Email of your Intern?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your Engineer?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of your Engineer?",
      },
      {
        type: "input",
        name: "Email",
        message: "What is the Email of your Engineer?",
      },
      {
        type: "list",
        name: "question",
        message: "Would you like to continue?",
        choices: ["yes", "no"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      buildHTML();
    });
}

function buildHTML() {
  fs.writeFileSync(outputPath, render(EmployeeTeam), "UTF-8");
}

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
Teamcreator();
