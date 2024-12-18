// please complete the implementation
class EventEmitter {
  constructor(){
    this.map = new Map()
  }
  subscribe(eventName, callback) {
    if(this.map.has(eventName)){


      let val = this.map.get(eventName);
      val.push(callback);
      this.map.set(eventName,val)
    }
    else{
      this.map.set(eventName,[callback])
    }
    return {
      release: ()=>{
        const calls = this.map.get(eventName) || [];
        console.log("calls",calls)
        const filteredCall = calls.filter((ele)=>ele!==callback);
        console.log("filteredCall",filteredCall)
        if(filteredCall.length>0){
          this.map.set(eventName, filteredCall);
        }
        else{
          this.map.delete(eventName)
        }
      }
    }
  }
  
  emit(eventName, ...args) {
  	let functS = this.map.get(eventName) || [];
    functS.forEach(element => {
      element(...args)
    });
  }


}

const emitter = new EventEmitter()

function callback1(a,b){
  console.log(a+b);
}

function callback2(a,b){
  console.log(a*b)
}

const sub1  = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)
// same callback could subscribe 
// on same event multiple times
const sub3 = emitter.subscribe('event1', callback2)


// callback1 will be called twice

emitter.emit('event1', 8,9);

sub1.release()
sub2.release()

emitter.emit('event1', 8,9);