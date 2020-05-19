/*
for(let i = 0; i < 100; i++){
  if(i % 5 === 0 && i % 3 === 0){
    console.log('FizzBuzz! ' + i + ' is divisible by both 5 and 3');
    continue;
  }
  else if(i % 3 === 0){
    console.log('Fizz! ' + i + ' is divisible by 3');
  }
  else if(i % 5 === 0 && i % 3 != 0){
    console.log('Buzz! ' + i + ' is divisible by 5 and not 3');
    continue;
  }
  else{
    console.log(i);
  }
}
*/
let finalString = '';
for(let i = 0; i < 100; i++){
  finalString = '';
  if(i % 3 === 0){
    finalString += 'Fizz';
    if(i % 5 === 0){
      finalString += 'Buzz';
    }
  }
  else{
    finalString = i;
  }
  console.log(finalString);
}
