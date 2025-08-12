// let d = prompt("What is the diameter of the circle?");

// let r = parseInt(d) / 2;

// // console.log(r)

// let area = Math.PI * r * r;

// console.log(`The area of the circle is ${area.toFixed(2)}`);

/********* Admins and empolyees **********/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];

// document.write(`<div>We Have X Admins</div>`);

// for (let i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") {
//     document.write(`<div>We Have ${i} Admins</div>`);
//     break;
//   }

//   document.write(`<div>The Admin for team ${i + 1} is ${myAdmins[i]}</div>`);

//   document.write(`<h3>Employees:</h3>`);

//   for (let j = 0; j < myEmployees.length; j++) {
//     // console.log(myEmployees[j]);
//     console.log(myAdmins[i]);
//     if (myEmployees[j][0] == myAdmins[i][0]) {
//       myEmployees[j];
//       document.write(`<p>- ${myEmployees[j]}</p>`);
//     }
//   }
//   document.write(`<hr>`);
// }

/******* Statement *******/
// function magic(s) {
//   let vowels = "aeiou";
//   for (let i = 0; i < s.length; i++) {
//     if (vowels.includes(s[i])) {
//       s = s.replace(s[i], s[i].toUpperCase());
//     }
//   }
//   s = s.split("").reverse().join("");

//   let lastChar = s[s.length - 1];
// if (
//   lastChar === "a" ||
//   lastChar === "e" ||
//   lastChar === "i" ||
//   lastChar === "o" ||
//   lastChar === "u"
// ) {
//   s = s.slice(0, -1);
// }

//   for (let i = 0; i < vowels.length; i++) {
//     if (lastChar !== vowels[i]) {
//       s = s.slice(0, -1);
//       break;
//     }
//   }
//   //   console.log(lastChar);

//   s = s.split("").join("-");

//   return s;
// }

// console.log(magic("hellothere"));

// const students = [
//   {
//     name: "Ali",
//     class: "3rd",
//     grades: {
//       math: 20,
//       physics: 25,
//       programming: 19,
//       english: 22,
//     },
//   },
//   {
//     name: "3bkreem",
//     class: "3rd",
//     grades: {
//       math: 25,
//       physics: 25,
//       programming: 25,
//       english: 25,
//     },
//   },

//   {
//     name: "Samer",
//     class: "3rd",
//     grades: {
//       math: 10,
//       physics: 15,
//       programming: 12,
//       english: 19,
//     },
//   },

//   {
//     name: "Ahmed",
//     class: "3rd",
//     grades: {
//       math: 20,
//       physics: 20,
//       programming: 20,
//       english: 20,
//     },
//   },

//   {
//     name: "Elgoker",
//     class: "3rd",
//     grades: {
//       math: 23,
//       physics: 25,
//       programming: 19,
//       english: 22,
//     },
//   },
// ];

// const getLeaderBoard = (students) => {
//   let getLeaderBoard = students;
//   return getLeaderBoard
//     .map((student) => {
//       const totalGrades = Object.values(student.grades).reduce(
//         (acc, grade) => acc + grade,
//         0
//       );
//       return { ...student, totalGrades };
//     })
//     .filter((student) => student.totalGrades >= 85)
//     .sort((a, b) => b.totalGrades - a.totalGrades);
// };

// console.log(getLeaderBoard(students));

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1; // Goalkeeper and field players for team 1
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2]; // All players from both teams
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"]; // Team 1 with substitutes
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds; // Odds for each team
console.log(team1, draw, team2);
function printGoals(...players) {
  console.log(`Goals Scored By: ${players.join(", ")}`);
  console.log(`Total Goals: ${players.length}`);
}

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

const odds = Object.values(game.odds);
const minOdd = Math.min(...odds);
const winningTeam = Object.keys(game.odds).find(
  (team) => game.odds[team] === minOdd
);
console.log(`Team more likely to win: ${winningTeam}`); // Team with the lowest odds

/*  
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// printGoals(...game.scored);

// console.log();
// const gameScored = ...game.scored;

for (const [goalNumber, player] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${player}`);
}

const OddsEntries = Object.entries(game.odds);
let totalOdds = 0;
console.log(OddsEntries);
const averageOdds = 0;

for (const [team, odd] of OddsEntries) {
  totalOdds += odd;
  // console.log(odd);
}

const averageOdd = totalOdds / OddsEntries.length;
console.log(`Average Odd: ${averageOdd.toFixed(2)}`);

for (const [team, odd] of OddsEntries) {
  const teamName = team === "x" ? "draw" : game[team];
  console.log(`Odd of victory ${teamName}: ${odd}`);
}
