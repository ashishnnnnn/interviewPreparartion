```js
const nestedArray = [1, [2, 3], [4, [5, 6]]];

Array.prototype.myFlat = function (){
    let returnArray = [];
    function flatten(nestedArray,returnArray){
        for(let i=0;i<nestedArray.length;i++){
            if(Array.isArray(nestedArray[i])){
                flatten(nestedArray[i],returnArray)
            }
            else{
                returnArray.push(nestedArray[i])
            }
        }
    }
    flatten(this,returnArray)
    return returnArray
}

console.log(nestedArray.myFlat())
```