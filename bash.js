const pwd = require('./pwd');
const ls = require('./ls');


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
    } else {
        process.stdout.write('You typed this: ' + cmd)
    }

    process.stdout.write('\nprompt > ')
})

// pwd();

