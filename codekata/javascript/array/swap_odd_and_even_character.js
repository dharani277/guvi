// Given a string 'S' swap the even and odd characters starting from index 1

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var d="";
  for(var i=1;i<data.length;i=i+2)
  {
    for(var j=i-1;j<data.length;j=j+2)
    {
      d+=data[i]+data[j];
      break;
    }
  }
  console.log(d);
});
