console.log('Starting notes.js')

const fs=require('fs');

//reading notes
var fetchNotes=() =>{
try{
 //so that the existing data is not removed
 var noteString=fs.readFileSync('notes-data.json');
 return notes=JSON.parse(noteString);
} catch(e){
    return [];
 }
};

//saving notes
var saveNotes=(notes) =>{
//writing the notes onto the file
 fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

// For Adding Note //

var addNote= (title,body) =>{
 //array of notes   
 var notes=fetchNotes();
 //individual note object
 var note={
     title,
     body
 };

 // so that there is no duplicate title
 var duplicateNotes=notes.filter((note)=>{
     return note.title === title;
 });
 
 //since there should be no duplicate note with the same title
 if (duplicateNotes.length === 0){
  //pushing individual note into array
 notes.push(note);
 saveNotes(notes);
 return note;
 }
};

var getAll=() =>{
    console.log('Getting all notes');
}

var getNote=(title) =>{
    console.log('Getting Note',title);
}

var removeNote=(title) =>{
    var notes=fetchNotes();
    var filteredNotes=notes.filter((note)=>{
     return note.title !== title;
 });
 //saving all notes excluding the note which is to be deleted
 saveNotes(filteredNotes);
 
 return notes.length !== filteredNotes.length;
}

//export used to export functions app.js 
module.exports={
  addNote,
  getAll,
  getNote,
  removeNote
};