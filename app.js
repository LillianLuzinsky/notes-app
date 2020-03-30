const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () { 
    console.log('Adding a new note!')
   }
})

//create remove command
yargs.command({
  command: "remove",
  describe: "remove note",
  handler: function () {
    console.log('Removing the note')
    }
})

// create a list command
yargs.command({
  command: "list",
  describe: "listing all notes",
  handler: function () {
    console.log("this is the list of our notes")  
  }
})

//create a read command
yargs.command({
  command: "read",
  describe: "reading notes",
  handler: function () {
    console.log('reading all notes')
  }
})


console.log(yargs.argv)
