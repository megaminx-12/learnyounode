var fs = require('fs');
var totalLines = undefined;

function countLines(callback) {
    fs.readFile(process.argv[2], function readFinish(err, output) {
        if (err) {
            return console.log(err);
        }

        totalLines = output.toString().split('\n');
        callback();
    });
}

function printLines() {
    console.log(totalLines.length - 1);
}

countLines(printLines);
