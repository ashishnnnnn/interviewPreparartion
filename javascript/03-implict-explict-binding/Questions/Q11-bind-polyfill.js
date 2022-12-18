// Note that bind will return the function , which is callable and we can pass some argumnets inside that.

// we have to make sure that the returned function can also take the argument.


let obj = {
    name:"Ashish",
    state:"Bihar"
}

function info(city,hobby){
    return `This is ${this.name} and He is from ${this.state}. He city is ${city} and his hobby is ${hobby}`
}

Function.prototype.my_bind = function(context={},...first_args){
    if(typeof this !=="function"){
        throw new Error("this is not callable");
    }

    context.fn = this;

    return function(...second_args){
        return context.fn(...first_args,...second_args)
    }
}


let bind_return = info.my_bind(obj,"Arrah");

console.log(bind_return("Singing"))