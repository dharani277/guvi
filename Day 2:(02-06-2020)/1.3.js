// 1.3 Extract and print all the country name with alpha3Code and population in console.


  var request = new XMLHttpRequest();
  request.open('GET','https://restcountries.eu/rest/v2/all',true);
// creating the function with the method of onload request
  request.onload = function(){
// variable declaration in the name of jsonData
  var jsonData = JSON.parse(this.response);
// for loop iteration i value from 0 to jsonData.length
  for(i=0;i<jsonData.length;i++)
  {
// print all the country name with alpha3Code and population in console.
 console.log(jsonData[i].name+':'+jsonData[i].alpha3Code+' and population is '+jsonData[i].population);
  }
  };
// call the function in the method of send request
request.send();
