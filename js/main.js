import Snake, {width, height, ctx, blockSize, apple, score} from './Snake.js';

const directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

const snake = new Snake();

const drawBorder = function() {
    ctx.fillStyle = 'Grey';
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};

const drawScore = function() {
    ctx.font = '25px Courier';
    ctx.fillStyle = 'Black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('Счет: ' + score, blockSize, blockSize);
};

export const gameOver = function() {
    clearInterval(intervalId);
    ctx.font = '60px Courier';
    ctx.fillStyle = 'Black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Game over', width / 2, height / 2);
};

document.querySelector('body').addEventListener('keydown', event => {
    let newDirection = directions[event.keyCode];
    if(newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});

const intervalId = setInterval(() => {
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.drawSnake();
    apple.draw();
    drawBorder();
}, 100);







