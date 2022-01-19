// Ερώτημα 5
const sum = (num1, num2) => {
    const result = num1 + num2;

    if (isInt(num1) === isInt(num2)) return result * 3;

    return result;
}

const isInt = (n) => {
    return Number(n) === n && n % 1 === 0;
}

var a = Number(window.prompt("enter first number: "));
var b = Number(window.prompt("enter second number: "));

console.log(sum(a, b));