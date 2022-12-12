let user = {
    name:"Ashish",
    age:24,
    getDetails:()=>{
        console.log(this.name);
    }
}

console.log(user.getDetails())

// Undefined