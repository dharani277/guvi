const mapfunction = (a, callback) => {
  var b = [],c;
   for (let i=0; i < a.length; i++)
   {
    b.push(callback(a[i]))
   }
  return c=b.join(" ")
}
const predicat = (x) => x * 10
const data = [1,2,3, 4, 5, 6]
console.log(mapfunction(data, predicat));
