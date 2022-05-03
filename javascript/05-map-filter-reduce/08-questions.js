let students = [
  { name: "Ashish", roll_number: 21, marks: 12 },
  { name: "Nancy", roll_number: 22, marks: 100 },
  { name: "Anjali", roll_number: 23, marks: 61 },
  { name: "Chhoti", roll_number: 24, marks: 99 },
];

console.log(students.filter((ele) => ele.marks > 65));

// Sum of Marks of All of the students -

console.log(students.reduce((accum, curr) => (accum += curr.marks), 0));
