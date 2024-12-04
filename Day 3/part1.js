const fs = require('fs');

const inputData = fs.readFileSync('Day 3/tinput.txt', {
    encoding: 'utf8', flag: 'r'
});

const regex = /mul\(([0-9]+),([0-9]+)\)/g

const validStrings = inputData.matchAll(regex);

const nums = []

for(const command of validStrings){
    let num1 = command[1];
    let num2 = command[2];

    nums.push(num1*num2);
}

console.log(nums.reduce((p, a)=> p += a, 0)); 