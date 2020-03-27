// const validator = require('validator')
const chalk = require("chalk");
console.log(chalk.green.bold("Success"));
console.log(chalk.black.bgWhiteBright.bold('this is fun'));
console.log(chalk.red.bgWhiteBright.inverse("this is fun"));

const getNotes = require('./notes')

const newNotes = getNotes()
console.log(newNotes)

// console.log(validator.isEmail('example.com')) //false
// console.log(validator.isURL('www./hi.com')); //false