// Ερώτημα 9
function checkMultiple3_7(x) {
    return x % 3 == 0 || x % 7 == 0;
}


var number = Number(window.prompt("enter a number"));

console.log(checkMultiple3_7(number))