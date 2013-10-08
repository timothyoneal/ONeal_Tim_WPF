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

console.log("Each party guest ate " + slicesGuest + " of pizza at the party.");

/* At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?
Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)*/

// Find the number of pizza slices per party guest.;

// Find the remainder of pizza after evenly devided among guest. slicesPizza*pizzaOrdered%partyGuest.;

// print out for slicesSparky;