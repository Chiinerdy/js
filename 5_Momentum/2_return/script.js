function square(x) {
  console.log('Before return');
  return x * x;
  console.log('After return');
};

console.log('Before call the function');
console.log(square(3));
console.log('After call the function');

// function addNumber(pizza, hamburger, pasta) {
//   return pizza + hamburger + pasta;
// };

// console.log(addNumber(10, 20));
// console.log(addNumber(1, 2));
// console.log(addNumber(50, 50));
// console.log(addNumber(1, 2, 3));