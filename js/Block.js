import {ctx} from './main.js';

export default class Block {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    drawSquare(color) {
        let x = this.row - blockSize;
        let y = this.col - blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, blockSize, blockSize);
    }
};

export const blockSize = 10;