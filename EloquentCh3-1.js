const min = (a, b) => {
  if (a > b) return b;
  if (b > a) return a;
};
console.log(min(0, 10));
console.log(min(-10, 0));
