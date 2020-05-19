let size = 11;
console.log(`Size is ${size}`);
let myString = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      myString += "_";
    } else {
      myString += "#";
    }
    if (j === size - 1) {
      myString += `\n`;
    }
  }
}
console.log(myString);
