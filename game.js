var canvas = document.getElementById("game");
var context = canvas.getContext('2d');

var ball = {
    x: 20,
    y: 20,
    dx: 5,
    dy: 2,
    radius: 20,
}
var paddle = {
    x: 0,
    y: canvas.height - 10,
    width: 70,
    height: 10,
    speed: 5,

    isMovingLeft: false,
    isMovingRight: false,
}

document.addEventListener('keyup', function (event) {
    console.log('KEY UP');
    console.log(event);
    if (event.keyCode == 39) {
        paddle.isMovingLeft = false;
    }
    if (event.keyCode == 37) {
        paddle.isMovingRight = false;
    }
});
document.addEventListener('keydown', function (event) {
    console.log('KEY DOWN');
    console.log(event);
    if (event.keyCode == 39) {
        paddle.isMovingLeft = true;
    }
    if (event.keyCode == 37) {
        paddle.isMovingRight = true;
    }
});

function updatePaddlePosition() {
    if (paddle.isMovingRight == true) {
        paddle.x -= paddle.speed;
    }; 
    if (paddle.isMovingLeft == true) {
        paddle.x += paddle.speed;
    };
}

function drawBall() {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}

function drawPaddle() {
    context.beginPath();
    context.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}

function handleBallCollideBounds() {
    if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y < ball.radius || ball.y > canvas.height - ball.radius) {
        ball.dy = -ball.dy;
    }
}

function updateBallPosition() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    updatePaddlePosition();
    handleBallCollideBounds();
    updateBallPosition();

    requestAnimationFrame(draw);
}

draw();