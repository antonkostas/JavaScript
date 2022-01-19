function productSign() {

    const a = prompt("Εισαγάγετε μια τιμή", "0");
    const b = prompt("Εισαγάγετε μια τιμή", "0");
    const c = prompt("Εισαγάγετε μια τιμή", "0");

    const num1 = parseInt(a);
    const num2 = parseInt(b);
    const num3 = parseInt(c);

    //METHOD 1
    var product = (num1 * num2 * num3);
    //επιστρέψτε απευθείας το πρόσημο του γινόμενου
    var productSign = Math.sign(product);
    if (productSign >= 0)
        console.log("METHOD 1: Sign is +")
    else
        console.log("METHOD 1: Sign is -")

    //METHOD 2
    //ορίστε το πρόσημο κάθε αριθμού σε έναν πίνακα
    var signArray = [Math.sign(num1), Math.sign(num2), Math.sign(num3)];
    /*
      Math.sign(argument):
      Ένας αριθμός που αντιπροσωπεύει το πρόσημο του δεδομένου ορίσματος:

       Εάν το όρισμα είναι θετικό, επιστρέφει 1.
       Εάν το όρισμα είναι αρνητικό, επιστρέφει -1.
       Εάν το όρισμα είναι θετικό μηδέν, επιστρέφει 0.
       Εάν το όρισμα είναι αρνητικό μηδέν, επιστρέφει -0.
       Διαφορετικά, το NaN επιστρέφεται.
        */
    //μετράμε τις φορές που πήραμε -1 ή -0 στον πίνακα
    var minusCount = 0;
    for (var elem = 0; elem < signArray.length; elem++) {
        if (signArray[elem] === -1 || signArray[elem] === -0) {
            minusCount++;
        }
    }

    if (minusCount % 2 === 0) {
        //οποιοσδήποτε ζυγός αριθμός μείον θα δώσει + (Παράδειγμα: αν έχω -5 * -3 * -2, έχω 2 (-) οπότε έχουμε θετικό γινόμενο)
        console.log("METHOD 2: Sign is +");
    }
    else {
        //οποιοσδήποτε περιττός αριθμός μείον θα δώσει ένα - (Παράδειγμα: αν έχω -5 * 3 * 2, έχω 1 (-) οπότε έχουμε αρνητικό γινόμενο)
        console.log("METHOD 2: Sign is -");
    }
}
productSign();