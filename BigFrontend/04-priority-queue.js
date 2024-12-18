class MinHeap {
    constructor(){
      this.heap = []
    }
    swap(i,j){
      [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    peek(){
      return this.heap[0]
    }
    upHeap(){
      let length = this.heap.length;
      if(length===0 || length===1){
        return;
      }
      let currIdx = length-1;
      let parentIdx = Math.floor((currIdx-1)/2)
      while(currIdx!==0 && this.heap[currIdx].priority < this.heap[parentIdx].priority){
        this.swap(currIdx,parentIdx);
        currIdx = parentIdx;
        parentIdx = Math.floor((currIdx-1)/2)
      }
    }
    downHeap(){
      let index = 0;
      let length = this.heap.length;
      while(true){
        let leftIdx = index*2 + 1;
        let rightIdx = index*2 + 2;
        let smallest = index;
        if(leftIdx<length && this.heap[leftIdx].priority<this.heap[smallest].priority){
          smallest = leftIdx;
        }
        if(rightIdx<length && this.heap[rightIdx].priority<this.heap[smallest].priority){
          smallest = rightIdx;
        }
        if(index===smallest){
          break;
        }
        this.swap(smallest,index);
        index = smallest;
      }
    }
    extractTop(){
      let length = this.heap.length;
      if(length===0){
        throw new Error("Queue is empty")
      }
      else if(length===1){
        return this.pop()
      }
      else{
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.downHeap();
        return root;
      }
    }
    insert(ele){
      this.heap.push(ele)
      this.upHeap()
    }
  }
  
  let heap = new MinHeap()
  // console.log(heap);
  console.log("Start 1")
  heap.insert({ele:"Ram",priority:1})
  // console.log(heap)
  console.log("Start 2")
  
  heap.insert({ele:"Shyam",priority:2})
  console.log(heap)
  console.log("Start 3")
  
  heap.insert({ele:"Sita",priority:3})
  heap.insert({ele:"John",priority:4})
  heap.insert({ele:"King",priority:5})
  heap.insert({ele:"King 1",priority:0})
  heap.insert({ele:"King 2",priority:-1})
  
  console.log(heap)
  heap.extractTop()
  console.log(heap)