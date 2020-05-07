const filterfunc = (a, callback) => {
 var b= [],c;
   for (var i=0; i < a.length; i++){
    if(callback(a[i])){
      b.push(a[i])
    }
  }
  return c=b.join(" ")
}
const predicat = (x) => x>3
const data = [1,2,3,4,5,6]
console.log(filterfunc(data, predicat));
