const special_characters = ['@', '!', '$', '#', '%', '^', '&', '*', '(', ')'];
const alphabet = [...Array(26).keys()];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function uniqueCode(length = 10) {
    if (length < 10 || length > 30) return "Code length must be between 10 and 30";
    var code = '';
    const type = [0, 1, 2];
    const bIsUpperCase = [true, false];

    var specialCharFlag = false;
    var upperCaseFlag = false;
    var lowerCaseFlag = false;
    var numberFlag = false;

    for (let i = 0; i < length; i++) {
        let chosenType = type[getRandomInt(type.length)];
        //console.log(`${chosenType}`)
        switch (chosenType) {
            case 0:
                code += special_characters[getRandomInt(special_characters.length)];
                specialCharFlag = true;
                break;

            case 1:
                if (bIsUpperCase[getRandomInt(2)]) {
                    code += String.fromCharCode(alphabet[getRandomInt(alphabet.length)] + 65);
                    upperCaseFlag = true;
                } else {
                    code += String.fromCharCode(alphabet[getRandomInt(alphabet.length)] + 65).toLowerCase();
                    lowerCaseFlag = true;
                }

                break;

            case 2:
                code += getRandomInt(10);
                numberFlag = true;
                break;

            default:
                break;
        }
    }

    if (!specialCharFlag) {
        console.log('NO SPECIAL CHAR')
        code = code.replaceAt(getRandomInt(length), special_characters[getRandomInt(special_characters.length)]);
    }

    if (!upperCaseFlag) {
        console.log('NO UPPERCASE')
        code = code.replaceAt(getRandomInt(length), String.fromCharCode(alphabet[getRandomInt(alphabet.length)] + 65));
    }

    if (!lowerCaseFlag) {
        console.log('NO LOWERCASE')
        code = code.replaceAt(getRandomInt(length),
            String.fromCharCode(alphabet[getRandomInt(alphabet.length)] + 65).toLowerCase());
    }

    if (!numberFlag) {
        console.log('NO NUMBER')
        code = code.replaceAt(getRandomInt(length), getRandomInt(10));
    }

    return code;
}

function getRandomInt(integer) {
    return Math.floor(Math.random() * integer)
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

console.log(`${uniqueCode()}`);
