// What is the output of the following code.

const a = {};

const b = {key:"b"};
const c = {key:"c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]);


/*

so we can not assign object as key , os that object will act as [object Object]

so the output is 456;

*/