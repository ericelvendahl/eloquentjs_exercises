const isEven = function (x) {
  if (x === 0) return true;
  if (x === 1) return false;
  else {
    console.log(`x is ${x}`);
    return isEven(x - 2);
  }
};

let x = 14;
console.log(`${x} returns ${isEven(x)}`);
