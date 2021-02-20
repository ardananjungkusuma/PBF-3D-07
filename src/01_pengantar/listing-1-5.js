// console.log(helloDeclaration());
// function helloDeclaration() {
//   return "Hello from a function dec";
// }
// console.log(helloDeclaration());

// console.log(helloExpression());
// var helloExpression = function () {
//   return "Hello from a function expression";
// };
// console.log(helloExpression());

// 2
function helloDeclaration() {
  return "Hello from a function dec";
}

var helloExpression;

console.log(helloDeclaration());
console.log(helloDeclaration());

console.log(helloExpression());

helloExpression = function () {
  return "Hello from a function expression";
};

console.log(helloExpression());
