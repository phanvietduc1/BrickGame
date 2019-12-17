var canvas = document.getElementById("game");
var context = canvas.getContext('2d');

var ball = {
    x: 20,
    y: 20,
    dx: 5,
    dy: 2,
    radius: 20,
};

function drawBall() {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}   

function handleBallCollideBounds() {
    if (ball.x > canvas.width || ball.x < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y < 0 || ball.y > canvas.height) {
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

    handleBallCollideBounds();
    updateBallPosition(); 

    requestAnimationFrame(draw);
}

draw();