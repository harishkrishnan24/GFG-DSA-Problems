function countDigits(input) {
    let numOfDigits = 0;
    while (input > 0) {
        input = Math.floor(input / 10);
        numOfDigits++;
    }

    return numOfDigits;
}

console.log(countDigits(9235)) // 4
console.log(countDigits(38)) // 2
console.log(countDigits(7)) // 1

// T -> O(d) , S -> O(1)