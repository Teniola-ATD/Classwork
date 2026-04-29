
//default export
const hello = require('./eng');
//named exports
const {add, subtract} = require('./math');




hello();
console.log(add(5, 3)); 
console.log(subtract(10, 4)); 
