// Tim ONeal Epressions_personal October 9, 2013;

/*This project will figure how much I spend yearly maintaining the wheels for my  wheelchairs. Givens are Tires cost $30 ea and tubes cost 2.25 ea.*/

// variables and constants.;

var tiresPurchased = 8;      // 2 pairs of tires for for sets of wheels.; 
var tubesPurchased = 20;     // plenty of tubes never know whe you will need them.; 
const tiresCost = 30;        // tire cost from manufacturer in Georgia.;
const tubesCost = 2.25;      // tube cost from manufacturer in Georgia.;

// figure the cost for a year;

var totalCostTubes = tubesPurchased * tubesCost;    // cost should be 45;
var totalCostTires = tiresCost * tiresPurchased;    // cost should be 240; 
var totalCost = totalCostTires + totalCostTubes;    // cost should be 285;

// solution print out;

console.log("You purchased " + tiresPurchased + " wheelchair tires for total cost of $" + totalCostTires + ". You also purchased " + tubesPurchased + " tubes for a total cost of $" + totalCostTubes + ". The total cost of all purchases is $" + totalCost + "."); 


