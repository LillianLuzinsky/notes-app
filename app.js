const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Lillian.')

fs.appendFileSync("notes.txt", "I appended new data");