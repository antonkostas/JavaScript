// Ερώτημα 8
function checkSign(a, b) {
    if (a >= 0 && b >= 0) return a + b;
    if (a < 0 && b < 0) return a - b;
    return a * b;
}

var x = Number(window.prompt("enter first number:"));
var y = Number(window.prompt("enter second number:"));

console.log(checkSign(x, y));