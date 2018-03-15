console.log('Starting notes.js');

const fs = require('fs');

module.exports.year = 2018;
module.exports.showYear = (year) => {
    console.log(`Now ${year} year!`);
}

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })
    if(duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
    
};

var getNote = (title) => {
    console.log('Getting note', title)
};

var getAll = () => {
    console.log('Getting all notes');
};

var getSum = (a,b) => {
    console.log(a + b)
};

module.exports = {
    addNote,
    getNote,
    getAll,
    getSum
};