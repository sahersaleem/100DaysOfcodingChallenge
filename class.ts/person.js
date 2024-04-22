"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
class person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name} How are You!`);
    }
}
exports.person = person;
