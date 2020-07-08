// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    counter1() iterates its own private variable that cannot be accessed from any other scope, but counter2() iterates a variable in the outer scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    counter1 uses a closure. The variable that it creates is contained in its scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    counter1 would be prefereable if you need a counter that does nothing else but iterate by one. counter2 would be prefereable if you need the count variable to be accessible by other functions to perform other operations on it.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return ((Math.random() * 10).toFixed(0) % 3);
};

console.log(`Task 2: inning()\n${inning()}, ${inning()}, ${inning()}`);
console.log('\n');

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(scoreFunction, numOfInnings){
  let homeScore = 0, awayScore = 0;
  for (let i = 0; i < numOfInnings; i++) {
    homeScore += scoreFunction();
    awayScore += scoreFunction();
  };
  return {
    Home: homeScore,
    Away: awayScore
  };
};

console.log(`Task 3: finalScore()\n{`);
let obj = finalScore(inning, 9);
for (let key of Object.keys(finalScore(inning, 9))) {
  console.log(`\t${key}: ${obj[key]}\n`)
}
console.log('}');
console.log('\n');

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(scoreFunction, numOfInnings) {
  let homeScore = 0, awayScore = 0, returnString = '';
  for (let i = 0; i < numOfInnings; i++) {
    let ordinalSuffix;
    var inning = i + 1;
    switch (inning){
      case 1: 
        ordinalSuffix = 'st';
        break;
      case 2:
        ordinalSuffix = 'nd';
        break;
      case 3:
        ordinalSuffix = 'rd';
        break;
      default:
        ordinalSuffix = 'th';
    };
    inning += ordinalSuffix;
    homeScore += scoreFunction();
    awayScore += scoreFunction();
    returnString += `${inning} inning: ${homeScore} - ${awayScore}\n`;
  }
  return returnString += `\nFinal Score: ${homeScore} - ${awayScore}`;
};

console.log(`Task 4: scoreboard()\n${scoreboard(inning, 9)}`);
console.log('\n');
