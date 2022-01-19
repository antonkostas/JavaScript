// Ερώτημα 3
var today = new Date(); // Τρέχουσα ημερομηνία
var year = today.getFullYear(); // Έτος της τρέχουσας ημερομηνίας

if (today.getMonth() == 11 && today.getDate() > 25) { // Ελέγχο εάν ο μήνας είναι Δεκέμβριος και η τρέχουσα ημέρα είναι μεγαλύτερη από 25
    year = year + 1; // Εάν ναι, προσθέτω ένα έτος ώστε να χρησιμοποιηθεί η ημερομηνία για τα Χριστούγεννα του αμέσως επόμενου έτους
}

var christmasDate = new Date(year, 11, 25); // Ημερομηνία των επόμενων Χριστουγέννων
var dayMilliseconds = 1000 * 60 * 60 * 24; // Milliseconds σε 1 ημέρα

var remainingDays = Math.ceil( // Υπόλοιπες ημέρες
    (christmasDate.getTime() - today.getTime()) /
    (dayMilliseconds)
);

var christmasTimer = "Απομένουν " + remainingDays + " ημέρες για τα Χριστούγεννα"

console.log(christmasTimer);