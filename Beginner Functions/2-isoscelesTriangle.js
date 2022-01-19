// Ερώτημα 2
function nonIsoscelesTriangle() {
    var a = 5;
    var b = 6;
    var c = 7;
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c))); // Ε = (τετραγωνική ρίζα) \|τ(τ-α)(τ-β)(τ-γ)
    console.log(area);
}

console.log(nonIsoscelesTriangle());