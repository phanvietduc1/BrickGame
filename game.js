var canvas = document.getElementById("game");
var context = canvas.getContext('2d');
// false là theo kim đồng hồ, true là ngược
var x = 20, y = 20;
var dx = 2, dy = 1;

function drawBall() {
    context.beginPath();
    context.arc(x, y, 5 , 0, Math.PI*2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}    

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x > canvas.width || x < 0) {
        dx = -dx;
    }
    if (y < 0 || y > canvas.height) {
        dy = -dy;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}

draw();