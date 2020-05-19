const countBs = (str) => {
  let bCount = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === "B") bCount++;
  }
  return bCount;
};

const countChars = (str, letter) => {
  let letterCount = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === letter) letterCount++;
  }
  return letterCount;
};

//same thing but with some higher-order function fun
const countCharsCool = (str, letter) => {
  return str.split("").filter((x) => x === letter).length;
};
console.log(countBs("BBlaaackBdz*()"));
console.log(countChars("vvvzozozvvzo", "v"));
console.log(`Cool version is ${countCharsCool("bombbbaovovoxzbo", "o")}`);
