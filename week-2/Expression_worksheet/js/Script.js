// Expressions Worksheet Tim ONeal October 7, 2013;

    /* Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7  years old in dog years. Calculate how old Sparky the pit bull is in dog years based on his actual age.*/
    
// Find Sparky the pit bulls age.;

var humanAge= 4.5;
var dogYears= 7;

// Calculate Sparkys age in dog years dogYears*humanAge;

var sparkyAge = humanAge * dogYears;

//print out for sparkyAge;

console.log("Sparky is " + humanAge + " which is " + sparkyAge + " in dog years.");

/*A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.) */

// Find the number of pizza slices per party guest.;

var partyGuest= 13;
var slicesPizza= 8;
var pizzaOrdered= 4;

// Calculate the Number of pizza slices per guest slices pizzaOrdered*slicesPizza/partyGuest

var slicesGuest = pizzaOrdered * slicesPizza / partyGuest;

// print out for slicesGuest;

