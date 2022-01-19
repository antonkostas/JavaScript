let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
let celsius = fahrenheit.map(
    (degreeF) => {
        return (degreeF - 32) * 5 / 9;
    })

console.log(celsius)

console.log(fahrenheit)
