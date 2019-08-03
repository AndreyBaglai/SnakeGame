import Block from './Block.js';
import {heightInBlocks, widthInBlocks} from './Snake.js';

export default class Apple {
    constructor() {
        const startCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
        const startRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
        this.position = new Block(startCol, startRow);
    };

    draw() {
        this.position.drawCircle('Red');
    };

    moveApple(snakeBody) {
        let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
        let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
        this.position = new Block(randomCol, randomRow);
        snakeBody.forEach(item => {
            if(item.equal(this.position)) this.moveApple(snakeBody);
        });    
    };
}