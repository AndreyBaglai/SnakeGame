import Block, {blockSize} from './Block.js';
import Snake from './Snake.js';

const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const widthInBlocks = width / blockSize;
const heightInBlocks = height / blockSize;

let score = 0;

const drawBorder = function() {
    ctx.fillStyle = 'Grey';
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};

drawBorder();

const drawScore = function() {
    ctx.font = '25px Courier';
    ctx.fillStyle = 'Black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('Счет: ' + score, blockSize, blockSize);
};

drawScore();

const gameOver = function() {
    //clearInterval(intervalId);
    ctx.font = '60px Courier';
    ctx.fillStyle = 'Black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Game over', width / 2, height / 2);
};

const snake = new Snake();
snake.drawSnake();



