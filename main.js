#!/usr/bin/env node
const lib = require('./lib');
if (process.argv.length <= 3) {
    console.log('Insufficient parameter!');
    process.exit(1);
}
let command = process.argv[2];
let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n)); //수로 변환할 수 없으면 NaN이 반환됨.

//for 루프를 쓸 수 있지만 js스럽지 않음
if (numbers.some((n) => isNaN(n))) {
    console.log('some arguements are not numbers');
    process.exit(1);

};
let result;
switch (command) {
    case 'sum':
        result = lib.sum(numbers);
        break;
    case 'avg':
        result = lib.avg(numbers);
        break;
    case 'max':
        result = lib.max(numbers);
        break;
    default:
        console.log('Wrong Command!!');
        process.exit(1); //오류가 났으므로 exit를 하면서 1 반환 모든 잘못된 종료는 0 이외의 값 반환
}

console.log(result);