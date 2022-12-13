let obj = {
    name:"Ashish",
    city:"Patna"
}

function introduce(hobby){
    console.log(`this is ${this.name} and he is from ${this.city}. His hobby is ${hobby}`)
}

Function.prototype.my_call = function(context = {},...agrs){
    //  First check if this function is callable or not 
    if(typeof this!=="function"){
        throw new Error(this+"Is not callable")
    }

    // Now attach this function to the context so that when will call this function , it's "this" will
    // point to the context

    context.fn = this;
    context.fn(...agrs)
}

introduce.my_call(obj,"Singing")