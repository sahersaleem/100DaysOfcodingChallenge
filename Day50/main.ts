// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.

setTimeout(() => {
    console.log("hello world")
},2000 );



// Question 149: Explain the concept of the event loop in JavaScript with an example
console.log("before setTimeout")
setTimeout(()=>{
    console.log("My name is Saher Saleem")
},100)
console.log("after setTimeout")


// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

for(let i = 0 ; i<1e9 ; i++){
   console.log(i);
   

}
console.log("before setTimeout")
setTimeout(()=>{
    console.log("Hello World")
},100)
console.log("after setTimeout")

