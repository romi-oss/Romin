const ball = document.getElementById('ball');
const player = document.getElementById('playerPaddle');
const computer = document.getElementById('computerPaddle');

let ballX = 400;
let ballY = 200;
let ballDX = 4;
let ballDY = 4;

let playerY = 150;
let computerY = 150;

// Move player paddle with mouse
document.addEventListener('mousemove', (e) => {
  playerY = e.clientY - 40;
  player.style.top = playerY + 'px';
});

// Game loop
function gameLoop() {
  ballX += ballDX;
  ballY += ballDY;

  // Bounce top & bottom
  if (ballY <= 0 || ballY >= 385) {
    ballDY *= -1;
  }

  // Player collision
  if (ballX <= 20 && ballY > playerY && ballY < playerY + 80) {
    ballDX *= -1;
  }

  // Computer AI
  if (computerY + 40 < ballY) computerY += 3;
  else computerY -= 3;

  computer.style.top = computerY + 'px';

  // Computer collision
  if (ballX >= 770 && ballY > computerY && ballY < computerY + 80) {
    ballDX *= -1;
  }

  // Reset if missed
  if (ballX <= 0 || ballX >= 800) {
    ballX = 400;
    ballY = 200;
  }

  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';

  requestAnimationFrame(gameLoop);
}

gameLoop();
