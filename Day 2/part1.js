import * as fs from 'fs'
import * as readline from 'readline'

function parseInput(){
    return new Promise((res, rej) => {
        const inputStream = fs.createReadStream('./Day 2/input.txt');

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

const arr = await parseInput()

for(let i = 0; i < arr.length; i++){
    let test = arr[i]
    let maxDiff = 0;
    let minDiff = 0;
    let lastNum;

    let safe = true;

    for(let j = 0; j < test.length; j++){

        if(lastNum == test[j]) safe = false;

        if(j != 0) {
            const diff = test[j] - lastNum;
            maxDiff = diff > maxDiff ? diff : maxDiff
            minDiff = diff < minDiff ? diff : minDiff
        }
        
        if(minDiff < 0 && maxDiff > 0) safe = false;
        if(minDiff < -3 || maxDiff > 3) safe = false;

        lastNum = test[j];
    }

    arr[i] = safe;
}

console.log(arr.reduce((p, a)=> p += a, 0));