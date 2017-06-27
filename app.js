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

var command=process.argv[2]
console.log(process.argv[3]);

if(command=='add'){
   console.log('Adding new note'); 
}else if (command=='list'){
    console.log('Listing Notes');
}else if (command=='read'){
    console.log('Reading Notes');
}else if (command=='delete'){
    console.log('Deleting Notes');
}else{
    console.log('Command not recognised')
}