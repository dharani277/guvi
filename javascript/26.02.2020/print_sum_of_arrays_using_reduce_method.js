var number=[1,32,4,5,6,677,83,9];
var sum=number.reduce(function(acc,cvalue,index)
{
return acc+cvalue;
});
console.log(sum);
