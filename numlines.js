var fs = require('fs')


/*// 
var innerFileText = fs.readFileSync(process.argv[2]).toString();
var splitTextbyLine = innerFileText.split('\n');
var numberLinesInText = splitTextbyLine.length - 1; // - 1 length, last line is null
console.log(numberLinesInText);
*/

// asynchonous i/o version of line counter
fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err)
        throw err;
    var splitTextbyLine = data.split('\n');
    var numberLinesInText = splitTextbyLine.length - 1;
    console.log(numberLinesInText)
});