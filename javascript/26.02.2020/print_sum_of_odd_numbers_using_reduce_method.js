var number=[1,32,4,5,6,677,83,9];
var sum=number.reduce(function(acc,cvalue,index){
if(cvalue%2!=0)
{
return acc+cvalue;
}
return acc
});
console.log(sum);
