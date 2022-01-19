// Ερώτημα 4
function difference(n) {
    if (n <= 13)
        return 13 - n;
    else
        return Math.abs(n - 13) * 2;
}
var n = window.prompt("Enter a number: ");
var result = difference(n);
console.log(result);