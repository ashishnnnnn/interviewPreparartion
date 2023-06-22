let user = {
    name:"Ashish",
    age:24,
    getDetails(){
        const nm = ()=> console.log(this.name)
        nm()
    },
    getDetails1(){
        const nm = ()=> this.name
        return nm()
    }
}

user.getDetails()

console.log(user.getDetails1())

// Ashish

// Because this in arrow function will point to lexical above scope.

// With arrow functions the this keyword always represents the object that defined the arrow function.

