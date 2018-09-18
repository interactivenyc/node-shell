let fs = require('fs');

function cat(file) {
    console.log('cat filename:', file);
    

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
            console.log(data);
        });
}

module.exports = cat;