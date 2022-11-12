const sequelize = require('../config/connection');
const inquirer = require("inquirer");
const fs = require("fs");



const seedAll = async () => {
    console.log('---Begining seeding process---')
    await sequelize.sync({ force: true });
    console.log('---Connected to DB---');
};

const questions = [
    {
        type: "input",
        message: "View all departments",
        name: "department",
    },
    {
        type: "input",
        message: "View all roles",
        name: "roles",
    },
    {
        type: "input",
        message: "View all employees",
        name: "employees",
    },
    {
        type: "input",
        message: "Add a department",
        name: "add-department",
    },
    {
        type: "input",
        message: "Add a role",
        name: "add-role",
    },
    {
        type: "input",
        message: "Add an employee",
        name: "add-employee",
    },
    {
        type: "input",
        message: "Update employee role",
        name: "update-employee",
    },
]

function writeToFile(fileName, data) {
    fs.writeFile("EmployeeTrackr", fileName, (err, data) => {
      err ? console.log(err) : console.log("Success!");
    });
};
// TODO: Create a function to initialize app
function init(data) {
    inquirer.prompt(questions).then((data) => {
    
      console.log(data)
      writeToFile(generateMarkdown(data))
    });
}
// Function call to initialize app
init();

//Exports
module.exports = writeToFile;