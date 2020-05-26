/*let myArray = ["dog", "suzie", 12];

let tempArray = myArray.map((x) => x + 123);
console.log(tempArray);

tempArray = myArray.map((x) => x + 13 * Math.random());
console.log(tempArray);
let myFunction = Math.random;
console.log(`myFunction is ${myFunction}`);
console.log(Math.random);
console.log(Math.random());
*/
/*
var numbers = [4, 9, 16, 25];
var x = numbers.map((x) => Math.sqrt(x));
console.log(x);
console.log(numbers["length"]);
console.log(Math.sqrt);
console.log(x.keys);
*/
let range = (num1, num2, stepSize = 1) => {
  //console.log(num1, num2);
  let myArray = [];
  console.log(`stepSize is ${stepSize}`);
  if (stepSize) step = stepSize;
  else step = 1;

  if (step > 0) {
    for (let i = num1; i <= num2; i += step) {
      /*
      console.log("marco");
      console.log(`num1 is ${num1}`);
      console.log(`i is ${i}`);
        */
      myArray.push(i);
    }
  } else if (step < 0) {
    for (let i = num1; i >= num2; i += step) {
      /*
      console.log("marco");
      console.log(`num1 is ${num1}`);
      console.log(`i is ${i}`);
        */
      myArray.push(i);
    }
  }
  return myArray;
};

let sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
let rangeResult = range(5, 2, -1);
console.log(rangeResult);
let sumResult = sum(rangeResult);
console.log(sumResult);
console.log(sum(range(1, 10)));
