// 1.4 Display the count of all countries sharing their border with the country name in console.


  var request = new XMLHttpRequest();
  request.open('GET','https://restcountries.eu/rest/v2/all',true);
// creating the function with the method of onload request
  request.onload = function(){
// variable declaration in the name of jsonData
  var jsonData = JSON.parse(this.response);
// for loop iteration i value from 0 to jsonData.length
  for(i=0;i<jsonData.length;i++)
  {
// print the count of all countries sharing their border with the country name in console.
 console.log(jsonData[i].name+' shares its border with '+ jsonData[i].borders.length + ' countries that includes '+'('+jsonData[i].borders+')');
  }
  };
// call the function in the method of send request
request.send();
