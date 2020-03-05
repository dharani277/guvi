// write a program to print the table of 9 till N 
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
inp.on("line",(data)=>{
  var s='';
  if(data==0){
    console.log("NULL")}
  else{
    for(var i=1;i<=data;i++){
    if(i<data){
    s+=9*i+" "
    }
      else{
      s+=9*i
      break}
    }
    console.log(s)
  }
});
