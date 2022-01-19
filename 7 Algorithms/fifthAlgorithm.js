function bIsHappyNumber(number) {
    let n = number;
    let iterations = 0;
    while (n != 1 && iterations < 10) {
        let digits = extractDigits(n)
        n = calculateSumOfSquares(digits);
        //console.log(`${n}`);
        iterations++;
        if (iterations == 10) return false;

    }
    return true;
}


function extractDigits(number) {
    let n = number;
    let digits = [];
    let exponent = 1;
    while (n > 0) {
        let rest = n % Math.pow(10, exponent);
        let digit = rest / Math.pow(10, exponent - 1);
        digits.push(digit)
        n -= rest;
        exponent++;
    }
    //console.log(`${number}: ${digits}`)
    return digits;
}

function calculateSumOfSquares(digitsArray) {
    let number = 0;
    for (const digit of digitsArray) {
        number += Math.pow(digit, 2);
    }
    //console.log(`${number}`);
    return number;
}

let happyAmount = 0;
for (let i of [...Array(100).keys()]) {
    if (i == 0) continue;
    let result = '';

    if (bIsHappyNumber(i)) {
        result = 'It is a happy number';
        happyAmount++;
        console.log(`Number ${i}: ${result}`);
    }

    if (happyAmount >= 5) break;
}