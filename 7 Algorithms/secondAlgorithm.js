const list = [2, 54, 7, 2, 4556, 78, 098, 546, 345, 12, 45, 7, 8976, 543, 435];
let secondBiggest = Number.NEGATIVE_INFINITY;
let biggest = Number.NEGATIVE_INFINITY;

for (const n of list) {
    if (n > biggest) {
        secondBiggest = biggest;
        biggest = n;
    }
    if (n < biggest && n > secondBiggest) {
        secondBiggest = n;
    }
}

console.log(`${biggest} is the biggest and ${secondBiggest} is the second biggest`)
