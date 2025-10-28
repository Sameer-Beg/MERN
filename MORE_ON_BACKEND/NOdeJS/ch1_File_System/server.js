// fs modules for file system
const fs = require('node:fs');
//write file 
fs.writeFile('sam.txt', 'This is sameer and he is a mind belowing developer ' , function(err){
    if(err) console.log(err);
    else console.log('File written successfully');
})
//apeend file -- use to add on something new in exixting file 
fs.appendFile('sam.txt', 'This is sameer and he is a mind belowing developer and write know he is working in google  ' , function(err){
    if(err) console.log(err);
    else console.log('File written successfully');
})
// rename file - to change the name of file
fs.rename('sam.txt', 'samy.txt', function(err){
    if(err) console.log(err);
    else console.log('File renamed successfully');
})
// read file 
fs.readFile('samy.txt', 'utf8', function(err, data){
    if(err) console.log(err);
    else console.log(data);
})