function stringfy(data){
    if(typeof data==="number"  || typeof data==="boolean"){
       return String(data)
    }
    else if(typeof data==="string"){
       return `"${data}"`
    }
    else if(Array.isArray(data)){
       let retVal = '['
   
   
   
   
       for(let i=0;i<data.length;i++){
           let appendVal = stringfy(data[i]);
           retVal+=appendVal;
           if(i!==data.length-1){
               retVal+=','
           }
       }
       retVal+=']'
       return retVal
    }
    else if(typeof data==="object"){
       let retVal = '{'
       let keys = Object.keys(data);
       for(let i=0;i<keys.length;i++){
           let key = keys[i];
           let storedVal = stringfy(data[key]);
           retVal+=`"${key}":`
           retVal+=storedVal
           if(i!==keys.length-1){
               retVal+=','
           }
       }
       retVal+='}'
       return retVal;
    }
   
   }
   
   let array = [1,"2",3]
   
   let obj = {d:{a:"1",b:'3',c:[1,2,3]},u:array}
   
   console.log(JSON.stringify(array))
   
   console.log(stringfy(array))
   
   console.log(JSON.stringify(obj))
   
   console.log(stringfy(obj))