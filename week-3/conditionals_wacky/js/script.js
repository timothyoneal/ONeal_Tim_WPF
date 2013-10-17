// Tim ONeal conditional wacky October 17, 2013;

alert("test");

/*A wheelchair user can push hs chair 6 miles in one hour. The user has an appointment in one hour will they need a ride or can they make it in time pushing.*/

var wheelchairSpeed=6;      // this is estimated speed.;
var travelDistance=prompt("How far away do you have to travel?");        
var timeToAppt=1;           // 1 hour untill appointment.;
var timePerMile=.16666666666667;   // 10 min mile/60 min in 1 hour.;

// can the user make the trip in the time frame?;

if (travelDistance*timePerMile<timeToAppt) {
    //trip can be made with in time frame.;
    console.log("You can make the trip pushig yourself.");
}else{
    
}
