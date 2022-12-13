// Bind Chaining

// What is output of the following code 

function f(){
    console.log(this.name)
}

f = f.bind({name:"John"}).bind({name:"Ashish"})

f()

// Output os John, because once a function is bounded to any object it will not be bounded again to anything.