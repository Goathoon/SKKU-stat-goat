const add = (numbers) => {
    return numbers.reduce((prev, curr) => prev + curr, 0);
};

const avg = (numbers) => {
    return add(numbers) / numbers.length;
}

const max = (numbers) => {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
};

module.exports = {
    max,
    avg,
    add
};