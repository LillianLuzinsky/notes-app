// const validator = require('validator')
const chalk = require("chalk");
console.log(chalk.green.bold("Success"));

const greenMsg = chalk.green.bold.bgRedBright.inverse("Success!");
console.log(greenMsg);

const getNotes = require('./notes')

const newNotes = getNotes()
console.log(newNotes)

// console.log(validator.isEmail('example.com')) //false
// console.log(validator.isURL('www./hi.com')); //false

