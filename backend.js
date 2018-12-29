#!node

const fs = require('fs'),
    jsonfs = require('jsonfile');

let images_path = __dirname + '/images/';
let data_json = __dirname + '/data.json';
var obj_array = [];

//retrieve files from the 'images' folder.


fs.readdir(images_path, 'utf-8', (err, files) => {
    //files is a array of all the files in the specified directory.
    let files_array = files.filter(file => file.endsWith('.txt'));
    let count = 1;
    files_array.forEach(file => {
        fs.readFile(images_path + file, 'utf-8', (error, data) => {
            let lines = data.split('\n');
            let obj = {
                'title': lines[0].split(':')[1].trim(),
                'path': lines[1].split(':')[1].trim(),
                'mood': lines[2].split(':')[1].trim(),
                'id': count
            };
            obj_array.push(obj);
            count++;
            //the following line will write to the json file files_array.length times.
            jsonfs.writeFileSync(data_json, obj_array, {spaces: 4}); //I would wish that I could do this outside the immediate scope.
            console.log(obj_array.length);
        });
    });
});


/*files_array.forEach(file => {
    fs.readFile(images_path + file, 'utf-8', (fileErr, data) => {
        //console.log(data);
        let lines = data.split('\n');
        let obj = {
            'title': lines[0].split(':')[1].trim(),
            'path': lines[1].split(':')[1].trim(),
            'mood': lines[2].split(':')[1].trim()
        };
        //console.log(obj);
        obj_array.push(obj);
    });
    console.log(obj_array);
    jsonfs.writeFileSync(data_json, obj_array, {spaces: 4});
});*/