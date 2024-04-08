const numbers = [1, 2, 3, 4, 5];
numbers.forEach((item) => {
    console.log(item)
})

function forEach1(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

forEach1(numbers, (numbers) => {
    console.log(numbers)
})