let array = [1,2,3,4,5,6,7,8]

Array.prototype.my_map = function(cb){
    let returnArray = [];
    for(let i=0;i<this.length;i++){
        returnArray.push(cb(this[i]))
    }
    return returnArray
}

Array.prototype.my_filter = function(cb){
    let returnArray = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            returnArray.push(this[i])
        }
    }
    return returnArray
}

Array.prototype.my_reduce = function(cb,initial_value){
    let acucum = initial_value;
    for(let i=0;i<this.length;i++){
        acucum = acucum ? cb(acucum,this[i]) : this[i]
    }
    return acucum
}

// console.log(array.my_map(function(num){
//     return num*num
// }))

// console.log(array.my_filter(function(num){
//     return num%2
// }))

console.log(array.my_reduce((acucum,curr)=>acucum*=curr,10))