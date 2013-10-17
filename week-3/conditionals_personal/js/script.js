// Tim ONeal conitional personal October 17 2013;

alert("test");

/*The National Wheelchair Basketball Association has a requirement of 10 games played to be eligible for the national tournament. This project will tell teams if they have met the minimum required games.*/

// calculate number of team games.;

var gamesWon=alert("Enter the number of games the team has won.");      // in reality this will be enter wher team rep reports the team scores to the national office;

var gamesLost=alert("Enter the number of games the team has lost.");    // in reality this will also be enter wher team rep reports the team scores to the national office;

const minGames=10;      // minimum required games by the NWBA.;

// if the team has gone over the required number of games they are eligible for Nationals.;

if (gamesLost+gamesWon>minGames) {
    // team has qualified.;
    console.log("This team has qualified for nationals!");
}else{
        
}