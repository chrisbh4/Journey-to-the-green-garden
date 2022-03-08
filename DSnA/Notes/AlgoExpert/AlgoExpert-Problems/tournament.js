
/*


	if result[i] > 0
		home team won so add 3 to its store value
		else away team won so add 3 to its value
After all competitions have been iterated
	iterate through the hash map by using obj.entries()  [team, totalWins]
	use .sort( (a, b)=> a[1] - b[1]) save inside a variable rankings
	return rankings[0[0]]

	*/
//* My solution
    function tournamentWinner(competitions, results) {
        // Write your code here.
          const hash ={};
          for(let i = 0 ; i < competitions.length ; i++){
              const [home, away] = competitions[i]
              const result = results[i]
                  if( !(home in hash)) hash[home] = 0
                  if( !(away in hash)) hash[away] = 0
               result === 0? hash[away]+= 3 : hash[home] += 3
              console.log(hash);
          }

          const hashArr = Object.entries(hash);
          console.log("Hash Arr :", hashArr);

          const winningTeam = hashArr.sort((a,b)=> a[1] -b[1])[hashArr.length -1][0]

        return winningTeam;
      }



// * AlgoExperts solution

function tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = {[currentBestTeam]: 0};

    for (let idx = 0; idx < competitions.length; idx++) {
      const result = results[idx];
      const [homeTeam, awayTeam] = competitions[idx];

      const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

      updateScores(winningTeam, 3, scores);

      if (scores[winningTeam] > scores[currentBestTeam]) {
        currentBestTeam = winningTeam;
      }
    }

    return currentBestTeam;
  }
  

  function updateScores(team, points, scores) {
    if (!(team in scores)) scores[team] = 0;
    scores[team] += points;
  }

  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;
