function sumUntil(maxValue) {
let sum = 0;
for(number = 0; number < 6; number ++){
  sum = sum + number;
}
return sum;
}
console.log(sumUntil(5));