
// Day49

// Question 145: Create a function that accepts a callback and invokes it with some arguments.

function executeCallBack1(
callback:(arg1:number,arg2:number)=>void,
arg1:number,
arg2:number
):void{
callback(arg1,arg2)
}

const add = (a:number,b:number)=>{
    console.log(a+b)
}

executeCallBack1(add,5,5)







// Question 146 
function executeCallBack2(
    callback:(number:number[])=>void,
    number:number[]
):void{
    callback(number)
}

const filterNumber= (numbers:number[])=>{
    console.log(numbers.filter(numbers=>numbers>5))
}


let number = [5,4,7,8,9,3,4]
executeCallBack2(filterNumber,number)





// Explain how to handle error in callback patttern.



function fetchData (
    callback:(error:Error|null,data?:string)=>void
):void{
const error = new Error ("failed to fetch data")
const data = "some data"

if(Math.random()>0.5){
    callback(null,data)
}
else{
    console.log("error")
}
}

fetchData((error,data)=>{
if(error){
console.error(error.message)

}

else{
    console.log(data)
}


})











