// Prateek finds it difficult to judge the minimum element in the list of elements given to him. Your task is to develop the algorithm in order to find the minimum element
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var a=userInput[0];
    var b=userInput[1].split(" ");
    var x=[];
      for(var i=0;i<b.length;i++)
      {
          for(j=i+1;j<b.length;j++)
          {
          if(b[i]<b[j])
          x.push(b[i]);
          }
      }
      console.log(x[b.length]);
});
