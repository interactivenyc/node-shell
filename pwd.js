// process.stdout.write('prompt > ')

// // stdin
// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim();

//     if (cmd === 'pwd') {
//         console.log(`Current Directory: ${process.cwd()}`)
//     } else {
//         process.stdout.write('You typed: ' + cmd)
        

//     }

//     process.stdout.write('\nprompt > ')
// })

function pwd () {
	// const cmd = data.toString().trim();

 //    if (cmd === 'pwd') {
 //        console.log(`Current Directory: ${process.cwd()}`)
 //    } 

    console.log(`Current Directory: ${process.cwd()}`)
}

module.exports = pwd;