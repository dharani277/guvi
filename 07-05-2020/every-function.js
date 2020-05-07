const every = (a, callback) => {
  let count = 0
   for (let i=0; i < a.length; i++){
    if(callback(a[i])){
      count=count+1
    }
  }
  if(count===a.length)
    {
  return true
    }
  return false
}
const predicat = (c) => c.length>5
const data = ['dharani','dharshini','dhanam']
console.log(every(data, predicat));
