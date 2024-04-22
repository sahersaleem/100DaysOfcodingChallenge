// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//Q137
// Question 137: Implement a try-catch block to handle potential errors in a block of code
try {
    const user = {
        name: "saher"
    };
    let fullName = user.fullname;
}
catch (error) {
    console.error("property does not exist");
}
// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
console.log("Before BreakPoint");
console.log("This line has a breakpoint set onn its browser developer tool.");
console.log(" afterPoint");
//Day47
// Question 139: List three reserved words in JavaScript and create a valid use case for each
let name = "saher";
let number = 3;
if (number > 3) {
    console.log(number);
}
function add(a, b) {
    return a + b;
}
console.log(add(5, 8));
// Question 140: Explain the error that occurQuestion 140: Explain the error that occurs when trying to use a reserved word as a variable name.s when trying to use a reserved word as a variable name.
// let let = "1" 
console.log("syntax error");
// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript
async function subtract(num1, num2) {
    return num1 - num2;
}
await subtract(4, 9); //await keyword show promise means it waot until the function is not run
export {};
