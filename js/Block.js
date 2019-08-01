import {ctx, blockSize} from './Snake.js';

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
    constructor(col, row) {
        this.col = col;
        this.row = row;
    };

    drawSquare(color) {
        let x = this.col * blockSize;
        let y = this.row * blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, blockSize, blockSize);
    };

    drawCircle(color) {
        let centerX = this.col * blockSize + blockSize / 2;
        let centerY = this.row * blockSize + blockSize / 2;
        ctx.fillStyle = color;
        circle(centerX, centerY, blockSize / 2, true);
    };

    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    };
};
