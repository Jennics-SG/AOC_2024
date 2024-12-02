import * as fs from 'fs'
import * as readline from 'readline'

function parseInput(){
    return new Promise((res, rej) => {
        const inputStream = fs.createReadStream('./input.txt');

        const arr = []

        const rl = readline.createInterface({
            input: inputStream,
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            const l = line.split(" ");
            arr.push(l)
        });

        rl.on('close', ()=> {
            res(arr);
        });
    });
}

const arr = await parseInput();

console.log(arr);