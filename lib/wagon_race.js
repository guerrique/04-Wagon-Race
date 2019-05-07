// TODO: write your code here
let player1 = 0;
const positionPlayer1 = document.querySelectorAll("#player1_race td");
let player2 = 0;
const positionPlayer2 = document.querySelectorAll("#player2_race td");

document.addEventListener("keydown", (event) => {
  if (player1 < 17) {
    if (event.key === 'q') {
      positionPlayer1[player1].classList.remove('active');
      player1 += 1;
      positionPlayer1[player1].classList.add('active');
    }
  } else {
    new Audio('sound.mp3').play();
    alert("player 1 won!");
  }
});

document.addEventListener("keydown", (event) => {
  if (player2 < 17) {
    if (event.key === 'm') {
      positionPlayer2[player2].classList.remove('active');
      player2 += 1;
      positionPlayer2[player2].classList.add('active');
    }
  } else {
    new Audio('sound.mp3').play();
    alert("player 2 won!");
  }
});
