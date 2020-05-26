let reverseArray = (arr) => {
  let tempArray = [];
  for (let i = arr.length; i >= 0; i--) {
    tempArray.push(arr[i]);
  }
  return tempArray;
};

let reverseArrayInPlace = (arr) => {
  let tempArray = [];
  for (let i = arr.length; i > 0; i--) {
    tempArray.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = tempArray[i];
  }
};

let myArray = [12, 15, 22, 7722, 3];
//console.log(reverseArray(myArray));

console.log("Here: " + reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
