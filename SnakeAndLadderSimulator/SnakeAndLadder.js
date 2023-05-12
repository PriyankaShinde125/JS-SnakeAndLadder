//Initialized with start position 0
const START_POSITION = 0;
const SNAKE = 0;
const LADDER = 1;
const WINNING_POSITION = 100;

let currentPosition = 0;
//console.log("Start position :" + START_POSITION);

let positionArray = [];

//Play until win
while (currentPosition < WINNING_POSITION) {
  play();
}
//console.log("Current Position after move : " + currentPosition);

function play() {
  //Generate random die number
  let dieNumber = Math.floor(Math.random() * 6 + 1);
  //console.log("Die generated : " + dieNumber);

  //Decide player move
  let move = Math.floor(Math.random() * 2);
  // console.log("Move decider :" + move);

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

  positionArray.push(currentPosition);

  console.log("No of play \t Position at that play");
  for (let index = 0; index < positionArray.length; index++) {
    console.log(index + 1 + "\t" + positionArray[index]);
  }
}
