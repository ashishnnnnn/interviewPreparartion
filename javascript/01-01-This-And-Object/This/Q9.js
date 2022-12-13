var length = 4;

function callback(){
    console.log(this.length)
}

const object = {
    length:5,
    method(){
        arguments[0]();
    }
}


object.method(callback, 2 , 3)

// It will give asnwer 3 , because this will be poiniting to the array of arguments