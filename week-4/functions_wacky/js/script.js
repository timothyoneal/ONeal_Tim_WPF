// Tim ONeal functions wacky October 24, 2013;

alert("test");

/*In addition to tracking points per game some teams track player progress from tournament to tournament. this will make those calculations easier.*/

var game1=prompt("how many points did you score in game 1?");
var game2=prompt("how many points did you score in game 2?");
var game3=prompt("how many points did you score in game 3?");
var game4=prompt("how many points did you score in game 4?");
var game5=prompt("how many points did you score in game 5?");
var game6=prompt("how many points did you score in game 6?");
var game7=prompt("how many points did you score in game 7?");
var game8=prompt("how many points did you score in game 8?");
var game9=prompt("how many points did you score in game 9?");
var game10=prompt("how many points did you score in game 10?");



function calcAvgPoints(g1, g2, g3, g4, g5){
    var tournAvg(g1+g2+g3+g4+g5)/5;
    return tournAvg
} 