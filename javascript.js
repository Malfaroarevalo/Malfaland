var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var ball = {
  x: canvas.width/2,
  y: canvas.height/2,
  dx: 5,
  dy: -5,
  radius: 10,
  color: "#ffffff"
};

var player1 = {
  x: 10,
  y: canvas.height/2 - 40,
  width: 10,
  height: 80,
  score: 0,
  color: "#ffffff"
};

var player2 = {
  x: canvas.width - 20,
  y: canvas.height/2 - 40,
  width: 10,
  height: 80,
  score: 0,
  color: "#ffffff"
};

function drawBall() {
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
  context.fillStyle = ball.color;
  context.fill();
  context.closePath();
}

function drawPlayer(player) {
  context.beginPath();
  context.rect(player.x, player.y, player.width, player.height);
  context.fillStyle = player.color;
  context.fill();
  context.closePath();
}

function drawScore(player) {
  context.font = "30px Arial";
  context.fillStyle = "#ffffff";
  context.fillText(player.score, player.x + 20, 50);
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPlayer(player1);
  drawPlayer(player2);
  drawScore(player1);
  drawScore(player2);
  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.y + ball.dy < ball.radius || ball.y + ball.dy > canvas.height - ball.radius) {
    ball.dy = -ball.dy;
  }

  if (ball.x + ball.dx > canvas.width - ball.radius) {
    player1.score++;
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.dx = -ball.dx;
    var image = new Image();
    image.src = "https://source.unsplash.com/random/500x500";
    image.onload = function() {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  } else if (ball.x + ball.dx < ball.radius) {
    player2.score++;
    ball.x = canvas.width/2;
    ball
