
interface oObj {
    name:string,
    age:number,
    isStudent:boolean
}
const obj = {
    name:"saher",
    age:18,
    isStudent:true
}
const jsonSring= JSON.stringify(obj)
console.log(jsonSring)