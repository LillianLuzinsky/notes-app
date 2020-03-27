const validator = require('validator')
const getNotes = require('./notes')

const newNotes = getNotes()
console.log(newNotes)

console.log(validator.isEmail('example.com'))
console.log(validator.isURL('www./hi.com'));