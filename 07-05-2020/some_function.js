const some = (a, callback) => {
   for (var i=0; i < a.length; i++){
    if(callback(a[i]))
    {
      return true
    }
  }
  return false
}
const predicat = (c) => c > 10
const data = [5,10,20]
console.log(some(data, predicat));
