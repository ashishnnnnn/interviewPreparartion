const user = {
    name:"Ashish Kumar",
    greeting(){
        console.log(this.name)
    }
}


setTimeout(() => {
    user.greeting()
}, 1000);

// Output will be Ashish Kumar because now this will be pointing to user object.