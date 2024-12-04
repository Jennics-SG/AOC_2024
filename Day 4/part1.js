const fs = require('fs');
const readline = require('readline');

function parseInput(){
    return new Promise((res, rej) => {
        const inputStream = fs.createReadStream('./Day 4/tinput.txt');

        const arr = []

        const rl = readline.createInterface({
            input: inputStream,
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            arr.push(line.split(""))
        });

        rl.on('close', ()=> {
            res(arr);
        });
    });
}

(async () => {
    console.log(await parseInput());
})()