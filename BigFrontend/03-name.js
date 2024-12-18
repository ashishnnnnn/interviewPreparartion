function sum(a,currSum = 0){
    let neSum = a + currSum;
  
    function innserSum(b){
      return sum(b,neSum+currSum)
    }
  
  
  
    innserSum.valueOf = ()=>neSum
  
    return innserSum
  }
  
  
  const sum1 = sum(1)
  console.log(sum1(2))
  console.log(sum1(3)) 
  console.log(sum(1)(2)(3))
  