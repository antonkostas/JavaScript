//Βήμα 1
let cities = ['Sydney', 'London', 'Auckland', 'Tokyo', 'Bangkok'];

console.log(cities)


//Βήμα 2
const cities1 = ['Sydney', 'London', 'Auckland', 'Tokyo', 'Bangkok'];
const cities2 = ['New York', 'Miami', 'San Fransisco', 'Los Angeles'];
const cities3 = cities1.concat(cities2);

console.log(cities3)


//Βήμα 3
const cities4 = ['Dunedin', 'Christchurch', 'Athens', 'Wellington'];
const cities5 = cities3.concat(cities4);

console.log(cities5)


//Βήμα 4
console.log(cities5.join('*'));


//Βήμα 5
cities3.pop();
cities5.pop();
console.log(cities3);
console.log(cities5);


//Βήμα 6
const firstElement = cities3.shift();
const firstEl = cities5.shift();

console.log(cities3);
console.log(cities5);


//Βήμα 7
cities3.push(`Athens`, `Aspropyrgos`);
cities5.push(`Eleusis`, `Egaleo`);
console.log(cities3);
console.log(cities5);


//Βήμα 8
cities3.unshift(`Thessaloniki`, `Corinth`);
cities5.unshift(`Patras`, `Thiva`);
console.log(cities3);
console.log(cities5);


//Βήμα 9
cities3.sort();
cities5.sort();
console.log(cities3);
console.log(cities5);


//Βήμα 10
console.log(cities3.slice(5, -4));
console.log(cities5.slice(7, -6));


//Βήμα 11
console.log(cities3.indexOf('Auckland'));
console.log(cities3.indexOf('San Fransisco'));
console.log(cities3.indexOf('Athens'));

console.log(cities5.indexOf('Auckland'));
console.log(cities5.indexOf('San Fransisco'));
console.log(cities5.indexOf('Athens'));


//Βήμα 12
cities3.splice(2, 1);
cities3.splice(8, 1);
cities3.splice(1, 1);

cities5.splice(1, 1);
cities5.splice(12, 1);
cities5.splice(0, 1);

console.log(cities3);
console.log(cities5);