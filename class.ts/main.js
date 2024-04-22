"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
const person_1 = require("./person");
let student1 = new person_1.person("saher");
student1.greet();
