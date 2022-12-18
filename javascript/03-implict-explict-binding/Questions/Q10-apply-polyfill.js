let obj = {
    name:"Ashish",
    city:"Patna"
}

function introduce(hobby){
    console.log(`this is ${this.name} and he is from ${this.city}. His hobby is ${hobby}`)
}

Function.prototype.my_apply = function(context = {},args=[]){
    //  First check if this function is callable or not 
    if(typeof this!=="function"){
        throw new Error(this+"Is not callable")
    }

    if(!Array.isArray(args)){
        throw new Error("Give input in list bhadwe");
    }



    // Now attach this function to the context so that when will call this function , it's "this" will
    // point to the context
    context.fn = this;
    context.fn(...args)
}

introduce.my_apply(obj,["Singing"])