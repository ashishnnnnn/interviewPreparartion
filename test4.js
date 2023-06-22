// let array = [1,2,3,4,5,6,7,8,9,10]

// let newArray = array.slice(1,4)

// console.log(newArray)

// let removedElement = array.splice(2,2)

// console.log(removedElement)

// console.log(array)

// Q.2 

// let string = "Ahh"

// String.prototype.lastFour = function(){
//     if(this.length<4){
//         throw new Error("String is less than four")
//     }
//     else{
//         return this.substring(this.length-4)
//     }
// }

// console.log(string.lastFour())

// Q.3 

function moveZeors(arr){
    let currIndex = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            [arr[currIndex],arr[i]] = [arr[i],arr[currIndex]];
            currIndex+=1
        }
    }
    return arr
}

let arr = [1,2,0,4,5,0,9,0,0,9]

console.log(moveZeors(arr))