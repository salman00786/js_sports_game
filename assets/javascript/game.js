/*****************************Buttons********************************** */
let shootOneButton = document.querySelector("#teamone-shoot-button");
let shootTwoButton = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button");

/****************************Counters***************************** */

let counterShotOne = document.querySelector("#teamone-numshots");
let countOne = 1;

let counterShotTwo = document.querySelector("#teamtwo-numshots");
let countTwo = 1;

let goalOne = document.querySelector("#teamone-numgoals");
let countGoalOne = 0;

let goalTwo = document.querySelector("#teamtwo-numgoals");
let countGoalTwo = 0;

let allReset = document.querySelector("#num-resets");
let counterReset = 1;

/************************Click Shoot Button One**********************/

shootOneButton.addEventListener("click", function () {
  counterShotOne.innerHTML = countOne++;
  document.getElementById("winnerName").innerHTML = " ";
  console.log("Button One Clicked!!!");
  bell();
  let d = Math.random();
  if (d < 0.5) {
    goalOne.innerHTML = countGoalOne;
  } else if (d < 0.7) {
    countGoalOne += 1;
    goalOne.innerHTML = countGoalOne;
    goalAudio();
  }
});

/************************Click Shoot Button Two**********************/

shootTwoButton.addEventListener("click", function () {
  counterShotTwo.innerHTML = countTwo++;
  document.getElementById("winnerName").innerHTML = " ";
  console.log("Button Two Clicked!!!");
  bell();
  let d = Math.random();
  if (d < 0.5) {
    goalTwo.innerHTML = countGoalTwo;
  } else if (d < 0.7) {
    countGoalTwo += 1;
    goalTwo.innerHTML = countGoalTwo;
    goalAudio();
  }
});

/**************************Reset Function*******************/

let reset = function () {
  countOne = 1;
  countTwo = 1;
  countGoalOne = 0;
  countGoalTwo = 0;
  document.getElementById("teamone-numshots").innerHTML = 0;
  document.getElementById("teamtwo-numshots").innerHTML = 0;
  document.getElementById("teamone-numgoals").innerHTML = 0;
  document.getElementById("teamtwo-numgoals").innerHTML = 0;
};

/***********************Click Reset Button*******************/

resetButton.addEventListener("click", function () {
  console.log("Reset Button Clicked!!!");
  allReset.innerHTML = counterReset++;
  if (countGoalOne > countGoalTwo) {
    document.getElementById("winnerName").innerHTML =
      "Congrats!! Real Madrid Won!";
    console.log("Team One Wins!!!");
  } else if (countGoalTwo > countGoalOne) {
    document.getElementById("winnerName").innerHTML =
      "Congrats!! Barcelona Won!";
    console.log("Team Two Wins!!!");
  }
  reset();
  refWhistle();
});

/***************************Audio Function************************/

let shootAudio = document.querySelector("#audioSound");
function bell() {
  shootAudio.play();
}

let resetGameAudio = document.querySelector("#resetAudioSound");
function refWhistle() {
  resetGameAudio.play();
}

let goalGameAudio = document.querySelector("#goalAudioSound");
function goalAudio() {
  goalGameAudio.play();
}
