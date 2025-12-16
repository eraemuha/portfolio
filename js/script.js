// alert("Welcome to the Website")
function sayHello() {
    console.log("Hello, welcome to the website");
}
sayHello();

// Anonymous function
var multiply = function(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2;
}
multiply(2, 5);

// Conditional function
var conditionalFunc = function(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    } else if (num1 < num2) {
        console.log(num1 + " is less than " + num2);
    } else if (num1 === num2) {
        console.log(num1 + " is equal to " + num2);
    } else {
        console.log("Something else");
    }
}
conditionalFunc(3, 5);
conditionalFunc(5, 3);
conditionalFunc(5, 5);