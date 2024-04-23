"use strict";
// Day49
Object.defineProperty(exports, "__esModule", { value: true });
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function executeCallBack1(callback, arg1, arg2) {
    callback(arg1, arg2);
}
const add = (a, b) => {
    console.log(a + b);
};
executeCallBack1(add, 5, 5);
// Question 146 
function executeCallBack2(callback, number) {
    callback(number);
}
const filterNumber = (numbers) => {
    console.log(numbers.filter(numbers => numbers > 5));
};
let number = [5, 4, 7, 8, 9, 3, 4];
executeCallBack2(filterNumber, number);
// Explain how to handle error in callback patttern.
function fetchData(callback) {
    const error = new Error("failed to fetch data");
    const data = "some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        console.log("error");
    }
}
fetchData((error, data) => {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
