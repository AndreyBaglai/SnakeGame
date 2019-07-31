import Block from './Block.js';

export default class Snake {
    constructor() {
        this.segments = [
            new Block(5, 5),
            new Block(6, 5),
            new Block(7, 5)
        ];

        this.derection = 'right';
        this.nextDirection = 'right';
    };

    drawSnake() {
        this.segments.forEach(item => {
            item.drawSquare('Blue');
        });
    };
};