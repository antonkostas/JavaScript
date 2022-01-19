// Ερώτημα 1
var today = new Date();

// Για να πάρω το όνομα της ημέρας
var days = new Array(7);
days[0] = "Κυριακή";
days[1] = "Δευτέρα";
days[2] = "Τρίτη";
days[3] = "Τετάρτη";
days[4] = "Πέμπτη";
days[5] = "Παρασκευή";
days[6] = "Σάββατο";
var r = days[today.getDay()];

var date = today.getDate();
var time = today.toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
var dateTime = "Σήμερα είναι " + r + "." + ' ' + "Η ώρα είναι: " + time;

console.log(dateTime);