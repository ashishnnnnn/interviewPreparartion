function sort(items, newOrder) {
    // reorder items inline
    for(let i=0;i<items.length;i++){
      let swapIdx = newOrder[i];
      items[swapIdx]+=items[i].substring(0,1);
      items[i] = items[i].substring(1);
    }
  }
  
  const A = ['A', 'B', 'C', 'D', 'E', 'F']
  const B = [1,   5,   4,   3,   2,   0]
  
  sort(A,B)
  
  console.log(A)