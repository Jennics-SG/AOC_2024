import * as fs from 'fs'
import * as readline from 'readline'

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
            res([arrOne, arrTwo]);
        });
    });
}


const [arrOne, arrTwo] = await parseInput();

const sim = []

for(const x of arrOne){
    let n = 0;
    for(const y of arrTwo){
        if(x == y) n += 1;
    }
    const s = x * n;
    sim.push(s);
}

console.log(sim.reduce((p, a)=> p += a, 0))