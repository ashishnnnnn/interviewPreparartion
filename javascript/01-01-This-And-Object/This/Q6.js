const user = {
    name:"Ashish Kumar",
    greeting(){
        console.log(this.name)
    }
}

setTimeout(user.greeting,1000)

//  Output will be undefined because greeting() will be called independently and this will be pointing to global object.