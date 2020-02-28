// The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data)=>{
  console.log((3**0.5/4*data*data).toFixed(2));
 });
