// Tim ONeal Epressions_personal October 9, 2013;

/*This project will figure how much I spend yearly maintaining the wheels for my  wheelchairs. Givens are Tires cost $30 ea and tubes cost 2.25 ea.*/

// variables and constants.;

var tireSize = ("What size tires do you need? example 24x540 or 25x559."); 

var tiresPurchased = prompt("How many tires do you need?");      // expect an even number as input from user;

var tireSize = prompt("What size tires do you need? example 25x540 or 25x559.") // IMPORTANT! so user gets the right equipment.;

var tubesPurchased = prompt ("How many tubes do you need?") ;     // this input could be higher than the numer of the tires purchased.;

var tubeSize = prompt("What size tubes do you need? example 24x1 or 25x1 if you do not know just put the tire size you ordered.") // this in put should match the tire size or look like this ABxC.;

const tiresCost = 30;        // tire cost from manufacturer in Georgia.;

const tubesCost = 2.25;      // tube cost from manufacturer in Georgia.;

// figure the cost for a year;

var totalCostTubes = tubesPurchased * tubesCost;    // cost should be 45;

var totalCostTires = tiresCost * tiresPurchased;    // cost should be 240; 

var totalCost = totalCostTires + totalCostTubes;    // cost should be 285;

// solution print out;

alert("You purchased " + tiresPurchased + " wheelchair tires size " + tireSize + " for total cost of $" + totalCostTires + ". You also purchased " + tubesPurchased + " tubes size " + tubeSize +  " for a total cost of $" + totalCostTubes + ". The total cost of all purchases is $" + totalCost + "."); 

console.log("You purchased " + tiresPurchased + " wheelchair tires size " + tireSize + " for total cost of $" + totalCostTires + ". You also purchased " + tubesPurchased + " tubes size " + tubeSize +  " for a total cost of $" + totalCostTubes + ". The total cost of all purchases is $" + totalCost + "."); 


