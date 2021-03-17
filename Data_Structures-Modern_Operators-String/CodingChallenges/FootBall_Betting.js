'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Create seperate arrays for 2 teams using destructuring
const [players1, players2] = game.players;
console.log(players1, players2);

//Create one variable with goalkeepr and 1 array with remaining players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// create variable with All variables using spread operator
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// we will create new array which contains all the players from player1 plus 3 other player
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Create 3 variables for odds in data object with name'team1', 'draw' and 'team2'
// we can use object destructuring for the same
// here we have to use NESTED object destructuring as odds is a nested object inside game
const {
  odd: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Create printGoals method
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');

// Actually we have to use scored array inside game object
// We can not pass array directly to the function because it will take complete array as single argument
// Insted we will pass as individual array element with the help of spread operator
printGoals(...game.scored);

// Print which team is likely to win based on odds
// team with lower odds is more likely to win
// We should logical operator
// first check if team1 is less than team 2 In this condition team1 more likely to win
team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win');
