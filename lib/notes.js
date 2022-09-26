const fs = require('fs');
const path = require('path');

function findById(id, notes) {
    const result = notes.filter(notes => notes.id === id)[0];
    return result;
};

function createNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return note;
}   

module.exports = { findById, createNote }