const numberList = [28, 6, 10, 9, 175, 345, 576, 345, 3455, 1231, 4536, 6, 3452, 13141, 3254, 500];

function process(array) {
    var output = '';
    for (const n of numberList) {
        if (n % 9 == 0) {
            output += 'ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ ';
        }
        if (n % 3 == 0) {
            if (n % 5 == 0) {
                output += 'ΚΑΘΑΡΟ ΜΥΑΛΟ '
            }
            if (n % 9 == 0) {
                output += 'ΠΑΝΤΑ ';
            }
            output += 'ΚΑΘΑΡΟ ';
        }
        if (n % 25 == 0) {
            var reversedNumber = '';
            var i = n; // 531
            var exponent = 1;
            while (i > 0) {
                const rest = i % Math.pow(10, exponent); // rest = 1
                const digit = rest / Math.pow(10, exponent - 1); // digit = 1
                reversedNumber += digit; // reversedNumber = '1'
                i -= rest; // i = 530
                exponent++; // exponent = 2
            }
            output += reversedNumber + 'ΓΙΟΝΤΑ ';
        }
        if (n % 5 == 0) {
            output += 'ΜΥΑΛΟ ';
        }

        if (n % 7 == 0) {
            output += 'ΧΡΕΙΑΖΟΜΑΙ ';
        }

    }

    return output;
}

console.log(process(numberList))
