const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');


// Output a prompt
process.stdout.write('prompt > ')

// stdin
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();    

    if (cmd === 'pwd') {
        // console.log(`Current Directory: ${process.cwd()}`)
        pwd();
    } else if (cmd === 'ls') {
    	ls();
    } else if (cmd.substring(0,3) === 'cat') {
        //debugger;
        let file = cmd.split(' ')[1];
        if (file) {
            cat(file)
        } else {
            process.stdout.write('you must supply a FILENAME with the cat command')
        }
        
        //console.log('cat: ', cmd);

        
    } else if (cmd.substring(0,4) === 'curl') {
        //debugger;
        let url = cmd.split(' ')[1];
        if (url) {
            curl(url)
        } else {
            process.stdout.write('you must supply a URL with the curl command')
        }
        
        //console.log('cat: ', cmd);

        
    } else {
        process.stdout.write('You typed this: ' + cmd)
    }

    process.stdout.write('\nprompt > ')
})

// pwd();

