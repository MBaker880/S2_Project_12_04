"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Mackenzie Baker
   Date:   3.5.2019
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// Set the variable reportHTML to contain a h1 html element
var reportHTML = "<h1>" + raceTitle + "</h1>";

// Set a for loop to repeat the contents of the array names race
for (var i = 0; i <= race.length; i++) {
    // Sets the initial value of the votes to 0
    var totalVotes = 0;
    //Calculates the total amount of the current race
    votes[i].forEach(calcSum);
    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>";
    // Calling the candidateRows function in the for loop of the race array
    reportHTML += candidateRows([i], totalVotes);
    reportHTML += "</table>";
}

// Setting the value of reportHTML to the inner HTML of the first part of the section element
document.getElementsByTagName("section").innerHTML = reportHTML;

// The candidateRows functions gathers information on each candidate and inputs them into seperate rows
function candidateRows(raceNum, totalVotes) {
    // Sets the initial value of the local variable names rowHTML to be an empty string
    var rowHTML = "";
    // Creating the for loop that increases by 1, starts by 0, and ends at 2
    for(var j = 0; j <= 2; j++) {
        // Gives the candidate a name to assign to their specific row
        var candidateName = candidate[raceNum][j];
        // Gives the candidate a party affiliation
        var candidateParty = party[raceNum][j];
        // Gives the specific candidate their number of votes
        var candidateVote = votes[raceNum][j];
        // Calculates the percent of votes per candidate using to for loop
        var candidatePercent = calcPercent() 
    }
}




/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

