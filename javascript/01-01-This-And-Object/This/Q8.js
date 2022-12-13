var length = 4;

function callback(){
    console.log(this.length)
}

const object = {
    length:5,
    method(fn){
        fn();
    }
}

object.method(callback)

// It will give 4 in browser because that callback this will be pointing to window object as callback is not 
// getting called by being attached with any object.