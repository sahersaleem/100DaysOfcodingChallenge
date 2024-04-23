
// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.


// the code create a promise (message) that will deliver a message in 3 second
// After 3 second promis e will fulfilled with the message 
// when the promise is fulfiled the message "how are you is logged in the console"

const message = new Promise<string>(resolve=>{

 setTimeout(()=>{
    resolve("Hello world")
 },2000)

})

message.then(message=>console.log(message))



// Example 



const greet = new Promise<string>(resolve=>{
    setTimeout(()=>{
        resolve("How are you")
    },3000)
}
)

greet.then(greet=>console.log(greet))



// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.


const condition = new Promise((resolve,reject)=>{

    const sucess = Math.random()>0.5

if(sucess){
    resolve("Success")
}
else{
    reject(new Error("failure"))
}

})

condition
.then((result)=>console.log(result))
.catch((error)=>console.log(error.message))



// Question 144: Explain the use of the Promise.all() method with an example.

const promise1 =Promise.resolve("saher")
const promise2=45
const promise3 = new Promise<string>((resolve=>{
    setTimeout(resolve,2000,"wow")
}))

Promise.all([promise1,promise2,promise3]).then((values)=>{
console.log(values)
}

)










