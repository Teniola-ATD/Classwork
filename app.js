
//default export
const helloAteniolaTaye = require('./message');
//named exports
const {multiply, divide} = require('./calculator');




helloAteniolaTaye();
console.log(multiply(5, 3)); 
console.log(divide(10, 4)); 
