// Tim ONeal functions personal October 24, 2013;

alert("test");

/*I play wheelchair basketball the majority of our tournaments are 5 games over 2 days this function will calculte the average points per game over 5 game tournament.*/

// calculate points per game.;

var game1=prompt("How many points did you score in game 1?");
var game2=prompt("How many points did you score in game 2?");
var game3=prompt("How many points did you score in game 3?");
var game4=prompt("How many points did you score in game 4?");
var game5=prompt("How many points did you score in game 5?");

function calcppg(g1, g2, g3, g4, g5) {
    var ppg=(g1+g2+g3+g4+g5)/5
    console.log(ppg)
}