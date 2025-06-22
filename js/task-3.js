function filterArray(numbers, value) {
    let newArr = []; 
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element > value) {
            newArr.push(element);
        }        
    }
    return newArr;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]