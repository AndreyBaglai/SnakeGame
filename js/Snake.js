import Block from './Block.js';

export default class Snake {
    constructor() {
        this.segments = [
            new Block(5, 5),
            new Block(6, 5),
            new Block(7, 5)
        ];

        this.direction = 'right';
        this.nextDirection = 'right';
    };

    drawSnake() {
        this.segments.forEach(item => {
            item.drawSquare('Blue');
        });
    };

    move() {
        let head = this.segments[0];
        let newHead;

        this.direction = this.nextDirection;

        if(this.direction === 'right') {
            newHead = new Block(head.row + 1, head.col);
        } else if(this.direction === 'left') {
            newHead = new Block(head.row - 1, head.col);
        } else if(this.direction === 'down') {
            newHead = new Block(head.row, head.col + 1);
        } else if(this.direction === 'up'){
            newHead = new Block(head.row, head.col - 1);
        }

        if(this.checkCollision(newHead)) {
            gameOver();
            return;
        }

        this.segments.unshift(newHead);

        if(newHead.equal(apple.position)) {
            score++;
            apple.mpve();
        } else {
            this.segments.pop();
        }
    };

    checkCollision(head) {
        let leftCollision = (head.col === 0);
        let topCollision = (head.row === 0);
        let rightCollision = (head.col === widthInBlocks - 1);
        let bottomCollision = (head.row === heightInBlocks - 1);

        let wallCollision = leftCollision || topCollision || 
        rightCollision || bottomCollision;

        let selfCollision = false;

        this.segments.forEach(item => {
            if(head.equal(item)) selfCollision = true;
        });
     
        return wallCollision || selfCollision;
    };

    setDirection(newDirection) {
        if (this.direction === "up" && newDirection === "down") {
            return;
        } else if (this.direction === "right" && newDirection === "left") {
            return;
        } else if (this.direction === "down" && newDirection === "up") {
            return;
        } else if (this.direction === "left" && newDirection === "right") {
            return;
        }

        this.nextDirection = newDirection;
    };
};