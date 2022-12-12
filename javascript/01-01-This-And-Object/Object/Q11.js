let person = {name:"Ashis"}

const member = [person];

person = null;

console.log(member)

// Output is [ { name: 'Ashis' } ]

// Because it is assigned as value.