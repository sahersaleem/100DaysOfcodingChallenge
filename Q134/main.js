"use strict";
// Question 134: Take a JSON string and parse it into a JavaScript object
Object.defineProperty(exports, "__esModule", { value: true });
let json = '{"name":"saher","age":18,"city":"karachi"}';
const person = JSON.parse(json);
console.log(person);
