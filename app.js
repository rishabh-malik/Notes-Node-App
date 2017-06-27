console.log('Starting App:')

// fs for file input and output
const fs=require('fs');
// os for system info
const os=require('os');
// added this line so that our notes.js should also start
const notes=require('./notes.js');
//third party modules
const _=require('lodash');
const yargs=require('yargs')

const argv=yargs.argv;
var command=process.argv[2]

if(command=='add'){
  var note= notes.addNote(argv.title,argv.body);
  //if not null returned from the notes.addnote function 
  if(note){
     console.log('Note created');
     console.log(`Title: ${note.title}`);
     console.log(`Body: ${note.body}`);

  }else{
      console.log('Note Tiltle taken');
  }
}
else if (command=='list'){
     notes.getAll();
}
else if (command=='read'){
    notes.getNote(argv.title);
}
else if (command=='remove'){
    notes.removeNote(argv.title);
}
else{
    console.log('Command not recognised')
}