let array = [1, 2, 3, 4, 5];

Array.prototype.my_map = function(cb){
    let ret_array = [];
    for(let i=0;i<this.length;i++){
        ret_array.push(cb(this[i],i,this))
    }
    return ret_array
}

Array.prototype.my_filter = function(cb){
    let ret_array = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,array)){
            ret_array.push(this[i]);
        }
    }
    return ret_array;
}

Array.prototype.my_reduce = function(cb,initial_value){
    let ret_array = initial_value;
    for(let i=0;i<this.length;i++){
        ret_array = ret_array ? cb(ret_array,this[i],i,this) : this[i];
    }
    return ret_array;

}

console.log(array.my_reduce((accum,curr)=>{
    accum *=curr;
    return accum
},1))