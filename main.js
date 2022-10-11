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
    default:
}
console.log(result);