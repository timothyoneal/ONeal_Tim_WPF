// Tim ONeal expressions wacky October 9 2013;

/*This project will track the number of 2 point, 3 point and Free throws  basketball player makes in an individual woukout. As well as the percentage for all 3 and overall. Givens are there will be 50 shots at each range */

// variables and constants;
var userName = prompt("What is your name?");     

alert("Hello " + userName + " before you proceed further please take 50 shots from inside and outside of the the three point arch, and 50 free throws.");

var threePointShotsMade = prompt("How many 3 point shots did you make? be honest.");

var twoPointShotsMade = prompt("How many 2 point shots did you make? be honest.");

var freeThrowsMade = prompt ("How many free throws did you make? be honest.");

const threePointShotsTaken = 50;

const twoPointShotsTaken = 50;

const freeThrowsTaken = 50;

const totalShotsTaken = 150;

// Figure solution.;

var threePointPercentage = threePointShotsMade / threePointShotsTaken * 100;
var twoPointPercentage = twoPointShotsMade / twoPointShotsTaken * 100;
var freeThrowPercentage = freeThrowsMade / freeThrowsTaken * 100;
var totalShootingPercentage = (Number(threePointShotsMade) + Number(twoPointShotsMade) + Number(freeThrowsMade)) / 150 * 100; 

// Print out results;

alert("Hello " +userName + ", during your shooting workout you shot " + twoPointPercentage  + "% inside the three-point line, and " + threePointPercentage + "% from three-point range. You also shot " +freeThrowPercentage + "% from that three point line. That is a total shooting percentage of " + totalShootingPercentage + "% keep up the practice.")

