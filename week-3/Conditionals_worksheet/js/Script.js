// Conditionals Worksheet Tim ONeal October 15, 2013;

/* To get in the heavyweight division of the Strawberry FestivalÕs pie eating contest you must weigh 250 lbs or more.  Determine whether an entrant qualifies based on his weight.*/

// Competitors weight;

var participantWeight = 275;     

// If competitor is in the hvywght division;

if (participantWeight > 250) {
    // if in hvywght division;
    console.log("The competitor qualifies for the heavyweight division.");  
}else{
    // if not in hvywght division;
    console.log("The competitor needs to gain some weight!");
}


/* A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.*/

// variables;

var milesPerGallon = 30;    // 2013 Ford escape 30 mpg hwy;
var tankSize = 15.1;         // 2013 Ford escape 15.1 gallon tank;
var currentReading = .25;    // current fuel gauge reading in percentage;
var currentGallons = tankSize * currentReading;
var milesTillEmpty = currentGallons * milesPerGallon;

// Can I make 200 miles without filling up;


if (milesTillEmpty > 200) {
    // if trip can be made;
    console.log ("ÒYes, you can make it without stopping for gas!");
    }else{
    // if trip cannot be made;
    console.log("You only have " + currentGallons + " gallons of gas in your tank, which will take you " + milesTillEmpty + " miles better  get gas now while you can!")
    
    }


/********************sources********************/ 
/*2013 ford escape mileage http://www.fueleconomy.gov/feg/Find.do?action=sbs&id=32457 retreived October 15,2014
2013 ford escape gas tank size http://autos.aol.com/cars-Ford-Escape-2013/specs/ retreived October 15,2014
*/
