//  Nested destructing .

let obj ={
    name:"Ashish Kumar Singh",
    fullName:{
        firstName:"Ashish",
        lastName:"Singh"
    }
}

const {fullName:{firstName}} = obj;

console.log(firstName)