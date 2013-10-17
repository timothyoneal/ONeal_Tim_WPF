// Tim ONeal conitional personal October 17 2013;



/*The National Wheelchair Basketball Association has a requirement of 10 games played to be eligible for the national tournament. This project will tell teams if they have met the minimum required games.*/

// calculate number of team games.;

var gamesWon=prompt("Enter the number of games the team has won.");      // in reality this will be entered when team rep reports the team scores to the national office;

var gamesLost=prompt("Enter the number of games the team has lost.");    // in reality this will also be entered when team rep reports the team scores to the national office;

var totalGames=gamesLost+gamesWon; 

const minGames=10;      // minimum required games by the NWBA.;

// if the team has gone over the required number of games they are eligible for Nationals.;

if (gamesLost+gamesWon>minGames) {
    // team has qualified.;
    console.log("This team has qualified for nationals!");
}else if(totalGames=minGames){
    console.log("this team has met the minimum requirements to qualify for nationals.");   
}else{
    //team has not qualified.;
    console.log("This team has not qualified for nationals, more games needed.");    
}