const index = (a, val) => {
  var count=-1;
   for (var i=0; i < a.length; i++){
     count=count+1;
    if(a[i]===val)
    {
      return count;
    }
   }
  return "null";
}
const d = index([1,2,3,4,5],3)
console.log(d);
