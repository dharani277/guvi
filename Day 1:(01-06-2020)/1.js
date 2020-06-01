// 1. Convert specifications given below in image to Javascript Object;


// Declare a function with the name of star:
function star(){
// Create an object with variable name of TechnicalSpecification:
var TechnicalSpecification = {
// Create an object with key as Dimensions:
"Dimensions":{
"Overalllength":3500,
"Overallwidth":1600,
"Overallheight":1490,
"Wheelbase":2360,
// Create an object with key as Trackwidth:
  "Trackwidth": {
  "Front":"1405",
  "Rear":"1400"
  },
"Minimumturningradius":4.5,
"Minimumgroundclearance":170,
},
// Create an object with key as Capacities:
"Capacities": {
"Seatingcapacity":5,
"Fueltankcapacity":35
},
// Create an object with key as Engine:
"Engine":{
"Type":"kB-Series",
"Numberofcyclinders":3,
"Numberofvalves":12,
"Capacity":998,
"Borexstroke":"73.0 x 79.5",
"Compressionratio":"10:1",
"Maximumpower":"67/6 200",
"Maximumtorque":"90/3 500",
"Fueldistribution":"Multipoint Injection",
},
// Create an object with key as Transmission:
"Transmission":{
"Type":"5-speed MT"
},
// Create an object with key as Chassis:
 "Chassis":{
"Steering":"Rack & Pinion, Power assisted",
// Create an object with key as Brakes:
"Brakes":
{
    "Front":"Ventilated discs",
    "Rear":"Drums"
},
// Create an object with key as Suspension:
"Suspension":
{
    "Front":"MacPherso strut & coil spring",
    "Rear":"Isolated trailing link & coil spring"
},
"Shockabsorbers":"Gas filled",
"Tyre(tubeless)":"155/80R13"
},
// Create an object with key as Weights:
"Weights":{
"Kerbweight(min, with full options)":"860-880",
"Grossvehicleweight":"1320"
}
};
// call the star function:
star();
