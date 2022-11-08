#!/usr/bin/env node
const lib = require('./lib');

if (process.argv.length <= 3) {
    console.log("not enough parameter");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv.slice(3, process.argv.length).
    map((ele) => parseFloat(ele));
if (numbers.some((n) => isNaN(n))) {
    console.log("not a number");
    process.exit(1);
}

let result;
switch (command) {
    case 'sum':
        result = lib.add(numbers);
        break;
    case 'avg':
        result = lib.avg(numbers);
        break;
    case 'max':
        result = lib.max(numbers);
        break;
    case 'med':
        result = lib.med(numbers);
        break;
    case 'iqr':
        if (numbers.length === 1) {
            console.log("Your input must be equal to or longer than 2 inputs");
            process.exit(1);
        }
        result = lib.iqr(numbers);
        break;
    case 'outlier':
        if (numbers.length === 1) {
            console.log("Your input must be equal to or longer than 2 inputs");
            process.exit(1);
        }
        result = lib.outlier(numbers);
        if (result.length === 0) {
            process.exit(1);
        }
        result.forEach((n) => console.log(n));
        process.exit(0);
        break;
    default:
        console.log("There is not a valid command");
        break;
}
console.log(result);