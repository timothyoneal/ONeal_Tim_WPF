// tim oneal funtions worksheet october 23, 2013;


//Calculate the circumference of a circle.;

var circumference=calcCircumference(3);

function calcCircumference(radius) {
    var pi=3.1415;
    var circumference=radius*pi;
    return circumference;
}

console.log("The circumference of the circle is " + circumference + ".");

/*It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function.*/

var victimWeight=155;
var stingsToKill=calcBeeStingKill(victimWeight);

function calcBeeStingKill(weight){
	var beeSting=8.666666667; // 8.666666667 per pound to kill;
	var stingsToKill= weight*beeSting;	
	return stingsToKill;
}

console.log("It takes " + stingsToKill + " bee stings to kill this animal.");