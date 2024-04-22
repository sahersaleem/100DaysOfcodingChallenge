// Question 135: Explain how you can format a JSON string with proper indentation for readabilit

let student = {
    name:"saher",
    age:18,
    isStudent:true
}

let json = JSON.stringify(student,null,2)
console.log(json)