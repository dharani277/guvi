//2.3 Insert a new reader in the readers array for Nodejs.


// Declare a function with the name of star:
function star(){
var  c;
// Create an array with variable name of library:
var library = [
{
  "title":"Javascript",
  "price":500,
  // Create an array with key as readers:
  readers:[
      {
          name:"Person 1",
          count:300
      },
      {
          name:"Person 2",
          count:500
      }
      ],
      authorDetails : {
          name:"Raj",
          age:40,
        // insert a new key called email
          email: "email1@gmail.com"
      }
},
{ 
    "title":"Nodejs",
  "price":600,
  // Create an array with key as readers:
  readers:[
      {
          // Insert a new reader in the readers array for Nodejs.
          name:"Person 3",
          count:700
      },
      {
          name:"Person 4",
          count:800
      }
      ],
      authorDetails : {
          name:"Raj",
          age:60,
          // insert a new key called email
          email: "email2@gmail.com"
      }
}
]
c=library[1].readers[0];
// print the new reader in the readers array for Nodejs.
console.log(c);
}
// call the star function:
star()
