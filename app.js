let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userCurrScore = document.querySelector('#user-score');
const CompCurrScore = document.querySelector('#comp-score');

const reset = document.querySelector(".reset");

const genComputerChoice = () => {
  const option = ["rock", "paper", "sciccors"];
  const randIdx = Math.floor(Math.random() * 3); 
  return option[randIdx];
}

const drawGame = () => {
  // console.log("game was draw.");
  msg.innerText = "Game was draw."
  msg.style.backgroundColor = "#94928f";
}

const showWinner = (userWin, userChoice, comChoice) => {
  if(userWin) {
    userScore++;
    userCurrScore.innerText = `${userScore}`;
    msg.innerText = `You Win! ${userChoice} Beats ${comChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    CompCurrScore.innerText = `${compScore}`;
    msg.innerText = `You lose! ${comChoice} Beatss ${userChoice}`
    msg.style.backgroundColor = "red";
  } 
}

const playGame = (userChoice) => {
  // genrate computer choice
  const comChoice = genComputerChoice();
  // console.log("computer =", comChoice);

  if (userChoice === comChoice) {
    drawGame();
  } else {

  if (userChoice === "rock") {
    //scissors, paper
    userWin = comChoice === "paper" ? false : true;
  } else if (userChoice === "paper") {
    //rock, scissors
    userWin = comChoice === "scissors" ? false : true;
  } else {
    //rock, paper
    userWin = comChoice === "rock" ? false : true;
  }
    showWinner(userWin, comChoice, userChoice);
  } 
}

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("user" ,userChoice);
    playGame(userChoice);
  })
})


reset.addEventListener('click', () => {
  userCurrScore.innerText = 0;
  CompCurrScore.innerText = 0;
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#94928f"
})