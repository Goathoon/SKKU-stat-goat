const add = (numbers) => {
    return numbers.reduce((prev, curr) => prev + curr, 0);
};

const avg = (numbers) => {
    return add(numbers) / numbers.length;
}

const max = (numbers) => {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
};

const med = (numbers) => {
    sort_array = numbers.sort((a, b) => a - b);
    const med_index = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
        return (sort_array[med_index - 1] + sort_array[med_index]) / 2;
    }
    else {
        return sort_array[med_index];
    }
};

const iqr = (numbers) => {
    sort_array = numbers.sort((a, b) => a - b);
    if (numbers.length === 2) {
        return sort_array[1] - sort_array[0];
    }
    if (numbers.length === 3) {
        return sort_array[2] - sort_array[0];
    }

    if (numbers.length % 2 === 0) {
        arr1 = sort_array.slice(0, numbers.length / 2);
        arr2 = sort_array.slice(numbers.length / 2, numbers.length);
        return med(arr2) - med(arr1);
    }
    else {
        arr1 = sort_array.slice(0, numbers.length / 2);
        arr2 = sort_array.slice(numbers.length / 2 + 1, numbers.length);
        return med(arr2) - med(arr1);
    }
};

const outlier = (numbers) => {
    const conserved_array = [...numbers];
    const IQR = iqr(numbers);
    if (numbers.length % 2 === 0) {
        arr1 = numbers.slice(0, numbers.length / 2);
        arr2 = numbers.slice(numbers.length / 2, numbers.length);
    }
    else {
        arr1 = numbers.slice(0, numbers.length / 2);
        arr2 = numbers.slice(numbers.length / 2 + 1, numbers.length);
    }

    Q1 = med(arr1);
    Q3 = med(arr2);
    filtered_array = conserved_array.filter((n) => {
        return n < Q1 - 1.5 * IQR || n > Q3 + 1.5 * IQR
    });
    return filtered_array;
}
module.exports = {
    max,
    avg,
    add,
    med,
    iqr,
    outlier
};