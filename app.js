console.log('Starting app.js');

const fs = require('fs');
const yargs = require('yargs');
//const aF = require('./src/appendFile');

const notes = require('./src/notes');
//const res = notes.showYear(notes.year); 

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Yargs', argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else if(command === 'remove') {
    console.log('Removing note');
} else if(command === 'sum') {
    notes.getSum(argv.a, argv.b)
} else {
    console.log('Command not Recognized');
}