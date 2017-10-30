function randomIntNumber(min, max){
  return Math.round(Math.random() * (max - min + 1) + min - 0.5);
}

console.log(randomIntNumber(1, 5));