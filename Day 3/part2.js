const fs = require('fs');

const inputData = fs.readFileSync('Day 3/input.txt', {
    encoding: 'utf8', flag: 'r'
});

const regex = /(do().*?)?mul\(([0-9]+),([0-9]+)\)/g

const validStrings = inputData.matchAll(regex);

const nums = []

let lastCommand;

for(const command of validStrings){
    if(command[0].includes("do()") || (!command[0].includes("don't()") && lastCommand != "DONT")){
        lastCommand = "DO";
        let num1 = command[3];
        let num2 = command[4];
    
        nums.push(num1*num2);
    }
    else{
        console.log("DONT: " + command[0]);
        lastCommand = "DONT";
    }
}

console.log(nums.reduce((p, a)=> p += a, 0)); 