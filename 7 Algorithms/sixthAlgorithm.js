protect_email = function (email) {

    var splitter = email.split("@");
    var left = splitter[0];

    var avg = left.length / 2;

    var left = left.substring(0, (left.length - avg));
    var right = splitter[1];

    return left + "...@" + right;


};

let email = window.prompt("Please enter your email");

console.log(protect_email(email));