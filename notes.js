console.log('Starting notes.js')

const fs=require('fs');

var addNote= (title,body) =>{
 //array of notes   
 var notes=[];
 //individual note object
 var note={
     title,
     body
 };

 try{
 //so that the existing data is not removed
 var noteString=fs.readFileSync('notes-data.json');
 notes=JSON.parse(noteString)
 } catch(e){
 }

 // so that there is no duplicate title
 var duplicateNotes=notes.filter((note)=>{
     return note.title === title;
 });

 if (duplicateNotes.length === 0){
  //pushing individual note into array
 notes.push(note);
 //writing the notes onto the file
 fs.writeFileSync('notes-data.json',JSON.stringify(notes));
 }
};

var getAll=() =>{
    console.log('Getting all notes');
}

var getNote=(title) =>{
    console.log('Getting Note',title);
}

var removeNote=(title) =>{
    console.log('Removing Note',title);
}

//export used to export functions app.js 
module.exports={
  addNote,
  getAll,
  getNote,
  removeNote
};