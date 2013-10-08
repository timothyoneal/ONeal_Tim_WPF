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

/* At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on? Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)*/

// Find the number of pizza slices per party guest.;

var partyGuest= 13;
var slicesPizza= 8;
var pizzaOrdered= 4;

// Find the remainder of pizza after evenly devided among guest. slicesPizza*pizzaOrdered%partyGuest.;

var slicesSparky= slicesPizza * pizzaOrdered % partyGuest;

// print out for slicesSparky;

console.log("Sparky got " +slicesSparky +" slices of pizza.");


/*You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in the array to calculate the average amount spent on groceries. Please note: there should only be one given for this problem set, the array holding the five weekly totals.  You should be able to access the array using the array access notation discussed earlier in the course.*/

// Past grocery bill amounts.;

var pastBill= [60, 125, 80, 75, 140];
var weeks= 5;

// Calulate total bill and average bill;

var totalBill= pastBill[0]+ pastBill[1] + pastBill[2] + pastBill[3] + pastBill[4];
var averageBill= totalBill/weeks

// Print out for totalBill and averageBill.;

console.log("You have spent a total of $" + totalBill + " on groceries over a 5 week period. that is an average of $" + averageBill +" per week.");


/*Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)*/

// calulate the discount;

var itemPrice= 1865;
var discountRate= 15; // 15% discount;
var discountFigure= .15; 
var itemName= "wheelchair";
var taxRate= .075; // 7.5% sales tax;

// calculate Price with and without sales tax;

var priceAfterDiscount= itemPrice - (itemPrice*discountFigure); 
var priceWithTax= priceAfterDiscount + (priceAfterDiscount*taxRate);

// Print out for price info.;
console.log ("Your " + itemName + " was originally $" + itemPrice + ", but after a " + discountRate + "% discount, it is now $" + priceAfterDiscount  + " without tax, and $" + priceWithTax + " with tax.")
