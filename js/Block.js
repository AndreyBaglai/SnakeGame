import {ctx} from './main.js';

export const blockSize = 10;

const circle = function(x, y, radius, isFill) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if(isFill) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

export default class Block {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    };

    drawSquare(color) {
        let x = this.row * blockSize;
        let y = this.col * blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, blockSize, blockSize);
    };

    drawCircle(color) {
        let centerX = this.row * blockSize + blockSize / 2;
        let centerY = this.col * blockSize + blockSize / 2;
        ctx.fillStyle = color;
        circle(centerX, centerY, blockSize / 2, true);
    };

    equal(otherBlock) {
        return this.row === otherBlock.row && this.col === otherBlock.col;
    };
};
