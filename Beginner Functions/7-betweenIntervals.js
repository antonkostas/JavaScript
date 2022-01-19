// Ερώτημα 7 - Έχω σχολιάσει μια λειτουργία που είναι μια άλλη πολύ ενδιαφέρουσα πιθανή λύση. Χρησιμοποιεί boolean λογική, η οποία είναι μαθηματικά σωστή.

function between1(x) {
    if (x >= 13 && x <= 200) return 200;
    if (x >= 100 && x <= 400) return 400;
    if (x >= 999 && x <= 1999) return 1999;
    return x;
}

// function between2(x) {
//     return 200 * (x >= 13 && x <= 200)
//         + 400 * (x >= 100 && x <= 400)
//         + 1999 * (x >= 999 && x <= 1999)
//         + x * (x < 13 || x > 1999)
// }

console.log(between1(7));
console.log(between1(75));
console.log(between1(275));
console.log(between1(1673));
console.log(between1(437585));

// console.log(between2(7));
// console.log(between2(75));
// console.log(between2(275));
// console.log(between2(1673));
// console.log(between2(437585));