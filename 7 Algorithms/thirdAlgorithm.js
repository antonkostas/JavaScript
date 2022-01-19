const morse = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----'
}

// a += b ---> a = a + b
// morse['e'] == morse.e == '.'

function convertToMorse(string) {
    var output = '';
    for (var i = 0; i < string.length; i++) {
        if (string.toLowerCase()[i] == ' ') output += '/ ';
        else output += `${morse[string.toLowerCase()[i]]} `;
    }
    return output;
}

let string = window.prompt("Please enter your text with LATIN characters and any numbers you wish: ");

console.log(convertToMorse(string));