// Helper function to print the current state of the glasses
function printGlasses(glasses) {
  glasses.forEach((glass, index) => {
    console.log(`Glass ${index + 1}: [${glass.join(', ')}]`);
  });
}

// Initialize the puzzle with 3 colors and 2 empty glasses
function initializeGlasses(numGlasses, numColors, glassCapacity, numEmptyGlasses) {
  let glasses = [];
  let colors = Array.from({ length: numColors }, (_, i) => `color-${i + 1}`);

  // Start by filling some glasses with colors
  for (let i = 0; i < numGlasses - numEmptyGlasses; i++) {
    let glass = Array(glassCapacity).fill(colors[i % numColors]);
    glasses.push(glass);
  }

  // Add empty glasses
  for (let i = 0; i < numEmptyGlasses; i++) {
    glasses.push([]); // Empty glasses
  }

  return glasses;
}

// Pour color from one glass to another
function pourColor(from, to, amount) {

  
  let pourAmount = amount;
  for (let i = 0; i < pourAmount; i++) {
    to.push(from.pop());
  }
}

function shuffleNonempty(numGlasses){

  // Filled Empty
  let filledcans = [0,1,2]
  let nonFilledCans = [3,4];
  let swapCanIdx = Math.floor(Math.random()*3);
  let emptyCanIdx = 0;
  pourColor(numGlasses[filledcans[swapCanIdx]],numGlasses[nonFilledCans[emptyCanIdx]],1)
  filledcans.splice(swapCanIdx,1);
  swapCanIdx = Math.floor(Math.random()*2)
  emptyCanIdx = 1;
  pourColor(numGlasses[filledcans[swapCanIdx]],numGlasses[nonFilledCans[emptyCanIdx]],1);

  // Now shuffling trying to shuffle from more filled to new filled
  filledcans = [0,1,2]
  swapCanIdx = Math.floor(Math.random()*3);
  emptyCanIdx =  Math.floor(Math.random()*2);
  pourColor(numGlasses[filledcans[swapCanIdx]],numGlasses[nonFilledCans[emptyCanIdx]],1);
  swapCanIdx = Math.floor(Math.random()*3);
  emptyCanIdx =  Math.floor(Math.random()*2);
  pourColor(numGlasses[filledcans[swapCanIdx]],numGlasses[nonFilledCans[emptyCanIdx]],1);
}

function shuffleFilled(numGlasses,level,qty=1){
  let cans = [0,1,2,3,4];
  let swapCanIdx1 = cans[Math.floor(Math.random()*5)];
  cans.splice(swapCanIdx1,1)
  let swapCanIdx2 = cans[Math.floor(Math.random()*4)];
  const fromArray = numGlasses[swapCanIdx1]
  const toArray = numGlasses[swapCanIdx2]
  if(fromArray.length>=qty && toArray.length<=(4-qty)){
    pourColor(fromArray,toArray,qty);
    return "performed";
  }
  return "notPerformed"
}

// Simulate the game setup and shuffling
function generateInitialState(numGlasses, numColors, glassCapacity, numEmptyGlasses, numIterations) {
  // Step 1: Initialize the glasses with colors and empty glasses
  let glasses = initializeGlasses(numGlasses, numColors, glassCapacity, numEmptyGlasses);

  // console.log("Initial Glasses",glasses);

  shuffleNonempty(glasses)
  console.log("Aftewr fill 1",glasses)
  let level = 3000;
  while(level>0){
    let res = shuffleFilled(glasses,level,2)
    if(res==="performed"){
      level-=1;
    }
  }

  console.log("Aftewr fill 2",glasses)
  
  return glasses;
}

// Example usage:
let numGlasses = 5;        // Total glasses including empty ones
let numColors = 3;         // Number of colors
let glassCapacity = 4;     // Capacity of each glass (4 items max per glass)
let numEmptyGlasses = 2;   // Number of empty glasses to be added
let numIterations = 5;     // Number of iterations for shuffling after the initial 3

let initialState = generateInitialState(numGlasses, numColors, glassCapacity, numEmptyGlasses, numIterations);

// Print the final state of the glasses
// console.log(initialState);
