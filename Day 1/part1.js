const fs = require('fs');
const readline = require('readline');

function parseInput(){
    return new Promise((res, rej) => {
        const inputStream = fs.createReadStream('./input.txt');

        const arrOne = [];
        const arrTwo = [];

        const rl = readline.createInterface({
            input: inputStream,
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            const l = line.split("   ");
            arrOne.push(l[0]);
            arrTwo.push(l[1]);
        });

        rl.on('close', ()=> {
            arrOne.sort();
            arrTwo.sort();
            res([arrOne, arrTwo]);
        });
    });
}

const [arrOne, arrTwo] = await parseInput();

const diff = []

for(let i = 0; i < arrOne.length; i++){
    const x = arrOne[i];
    const y = arrTwo[i];
    const d = x >= y ? x-y:y-x;
    diff.push(d);
}

console.log(diff.reduce((p, a)=> p += a, 0));