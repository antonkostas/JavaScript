const groceryList = [
    { name: 'eggs', price: 1.99, quantity: 6, store: 'Super Market Πριγκιπόπουλος' },
    { name: 'cheese', price: 6.99, quantity: 2, store: 'Super Market Πριγκιπόπουλος' },
    { name: 'mushrooms', price: 10.99, quantity: 1, store: 'Super Market Πριγκιπόπουλος' },
    { name: 'grapes', price: 1.00, quantity: 3, store: 'Super Market Αστερίας' },
    { name: 'wine', price: 7.99, quantity: 5, store: 'Super Market Πριγκιπόπουλος' },
    { name: 'bananas', price: 0.69, quantity: 9, store: 'Super Market Αστερίας' },
    { name: 'chocolates', price: 2.50, quantity: 7, store: 'Super Market Αστερίας' },
    { name: 'strawberries', price: 0.39, quantity: 12, store: 'Super Market Πριγκιπόπουλος' }
];


//Βήμα 1
const items = groceryList.reduce((prevItem, currentItem) => {
    return {
        name: prevItem.name + ", " + currentItem.name
    }
});

console.log(items.name);


//Βήμα 2
const totalPrice = groceryList.reduce((prevItem, currentItem) => {
    return {
        price: prevItem.price * prevItem.quantity + currentItem.price * prevItem.quantity,
        quantity: 1
    }
});

console.log(totalPrice.price);


//Βήμα 3
let lowestCost = groceryList[0].price * groceryList[0].quantity;
let cheapestStore = groceryList[0].store;
let itemName = "";

groceryList.forEach(item => {
    let cost = item.price * item.quantity;
    console.log(cost)
    if (cost < lowestCost) {
        lowestCost = cost;
        cheapestStore = item.store
        itemName = item.name;
    }
})

console.log(`The cheapest Store: ${cheapestStore}, lowest cost; ${lowestCost}, Buying: ${itemName}`);


//Βήμα 4
groceryList.forEach(item => {
    if (item.name == "wine") {
        console.log(`YES! We finally bought wine from ${item.store}. It cost us ${item.price * item.quantity} EUR!!! Can you believe it?!`)
    }
});


//Βήμα 5
let sortedList = groceryList.sort((item1, item2) => item1.price - item2.price);

console.log(sortedList);


//Βήμα 6
let sortedListBySupermarket = groceryList.sort((item1, item2) => item1.store.localeCompare(item2.store) || item1.price * item1.quantity - item2.price * item2.quantity);

console.log(sortedListBySupermarket);


//Βήμα 7
var leastCost = 999999;
var mostCost = 0;
var cheapest;
var mostExpensive;

groceryList.forEach(item => {
    var totalCost = item.price * item.quantity;
    if (totalCost < leastCost) {
        leastCost = totalCost;
        cheapest = item;
    }

    if (totalCost > mostCost) {
        mostCost = totalCost;
        mostExpensive = item;
    }
});

console.log(`Most Expensive Item: ${mostExpensive.name}\nCheapest Item: ${cheapest.name}`);


//Βήμα 8
let sortedListBySupermarketAndName = groceryList.sort((item1, item2) => item1.store.localeCompare(item2.store) || item1.name.localeCompare(item2.name));

sortedListBySupermarketAndName.forEach(item => console.log(`${item.name}: ${item.price * item.quantity} EUR`))