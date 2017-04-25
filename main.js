/**
 * Created by ali on 4/24/17.
 */
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if(err) return console.error(err);
    console.log(data.toString())
})

//console.log(data.toString());
console.log('Program Ended!')