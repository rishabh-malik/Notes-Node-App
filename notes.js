console.log('Starting notes.js')

var addNote= (title,body) =>{
console.log('Adding Note',title,body);
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