//Initialized with start position 0
const START_POSITION = 0;
const SNAKE = 0;
const LADDER = 1;
const WINNING_POSITION = 100;

let currentPosition = 0;
//console.log("Start position :" + START_POSITION);
let player1Position = currentPosition;
let player2Position = currentPosition;

let positionArray = [];
let player = 1;
class PlayerRecord {
  constructor(position, player) {
    this.position = position;
    this.player = player;
  }
  toString() {
    return "Position : " + this.position + "Player : " + this.player;
  }
}

//Play until win with two player
while (
  player1Position < WINNING_POSITION &&
  player2Position < WINNING_POSITION
) {
  if (player == 1) {
    player1Position = play(player1Position);
    positionArray.push({ position: player1Position, player: "1" });
    player = 2;
  } else {
    player2Position = play(player2Position);
    positionArray.push({ position: player2Position, player: "2" });
    player = 1;
  }
}

console.log("No of play | Position at that play | player");
for (let index = 0; index < positionArray.length; index++) {
  console.log(
    index +
      1 +
      "\t" +
      positionArray[index].position +
      "\t" +
      positionArray[index].player
  );
}

console.log(
  "Player " + positionArray[positionArray.length - 1].player + " Wins"
);

function play(currentPosition) {
  //Generate random die number
  let dieNumber = Math.floor(Math.random() * 6 + 1);

  //Decide player move
  let move = Math.floor(Math.random() * 2);

  //Update current position
  switch (move) {
    case LADDER:
      currentPosition = currentPosition + dieNumber;
      //Check that reach to exact winning position
      if (currentPosition > WINNING_POSITION)
        currentPosition = currentPosition - dieNumber;
      break;
    case SNAKE:
      if (currentPosition - dieNumber < 0) currentPosition = START_POSITION;
      else currentPosition = currentPosition - dieNumber;
      break;
    default:
      break;
  }
  return currentPosition;
}
