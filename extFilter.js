var fs = require('fs');
var path = require('path');

module.exports = function(dirName, extension, callback) {

    fs.readdir(dirName, function(err, files) { // dirName passing in process.argv[2], dir List[i] in files[i] arg
        if (err)
            return callback(err);

        // check for filter argument
        /*        if (process.argv[3]) {
            var fileExt = process.argv[3];
        } else {
            console.log("Need to specify an extension filter.")
        };*/


        // loop through list of files in directory
        /*    for (var i = 0; i < fileLen; i++) {
        var filter = new RegExp('.' + fileExt, 'g');
        //console.log(filter);
        if (files[i].match(filter)) {
            console.log(files[i]);
            total++;
        }
    }
*/
        // refactor above code using path.extname method
        /* // 2nd attempt
        for (var i = 0; i < fileLen; i++) {
            if (path.extname(files[i]) === "." + fileExt) {
                filteredList.push(files[i]);
            }
        };*/

        // modularize above, loop now handled in filter.js
        files = files.filter(function(file) { // files[i] passed in from filter.js, files.filter( / file name passed in  on cb /)
            return path.extname(file) === "." + extension;
        })

        callback(null, files)
    })
}