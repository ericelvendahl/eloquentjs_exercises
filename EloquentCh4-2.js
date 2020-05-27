let reverseArray = (arr) => {
  let tempArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    tempArray.push(arr[i]);
  }
  return tempArray;
};

let reverseArrayInPlace = (arr) => {
  let newArray = [];
  let tempElement = "";
  for (let i = 0; i < arr.length; i++) {
    tempElement = arr[i];
    arr[i] = arr[arr.length - i];
    arr[arr.length - i] = tempElement;
  }
  return arr;
};

let myArray = [12, 15, 22, 7722, 3];
//console.log(reverseArray(myArray));

let myArrayHolder = reverseArray(["A", "B", "C"]);
console.log(myArrayHolder);
//console.log(`Here: ${reverseArray(["A", "B", "C"])}`);
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
console.log(`This is reverseArrayInPlace: ${reverseArrayInPlace(arrayValue)}`);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
