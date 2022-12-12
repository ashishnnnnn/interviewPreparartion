//  What will be the output of the following code.

const shape = {
    radius:10,
    diameter:function(){
        return this.radius*2;
    },
    perimeter:()=>{
        return 2*Math.PI*this.radius
    }
}

console.log(shape.diameter());
console.log(shape.perimeter());

// 20

// NaN because this.radius will be undefined.