// Write a program to calculate the total surface area and volume of cuboid. Input contains three space separated positive integers L, B, H denoting the length, width and height of cuboid respectively
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var S=userInput[0].split(" ");
    var L=S[0];
    var B=S[1];
    var H=S[2];
    var area=2*(L*B+B*H+H*L);
    var volume=(L*B*H);
   console.log(area,volume);
  });
