import Block from './Block.js';
import {gameOver} from './main.js';
import Apple from './Apple.js';

const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

export const blockSize = 10;
export const width = canvas.width;
export const height = canvas.height;

export let score = 0;

export const widthInBlocks = width / blockSize;
export const heightInBlocks = height / blockSize;

export const apple = new Apple();

export default class Snake {
    constructor() {
        this.segments = [
            new Block(7, 6),
            new Block(7, 7),
            new Block(7, 8)
        ];

        this.direction = 'right';
        this.nextDirection = 'right';
    };

    drawSnake() {
        this.segments.forEach((item, idx) => {
            if(idx === 0) {
                item.drawSquare('Green');
            } else if(idx % 2 === 0) {
                item.drawSquare('Blue');
            } else {
                item.drawSquare('Yellow');
            }
        });
    };

    move() {
        let head = this.segments[0];
        let newHead;

        this.direction = this.nextDirection;

        if(this.direction === 'right') {
            newHead = new Block(head.col + 1, head.row);
        } else if(this.direction === 'left') {
            newHead = new Block(head.col - 1, head.row);
        } else if(this.direction === 'down') {
            newHead = new Block(head.col, head.row + 1);
        } else if(this.direction === 'up'){
            newHead = new Block(head.col, head.row - 1);
        }

        if(this.checkCollision(newHead)) {
            gameOver();
            return;
        }

        this.segments.unshift(newHead);

        if(newHead.equal(apple.position)) {
            score++;
            apple.moveApple();
        } else {
            this.segments.pop();
        }
    };

    checkCollision(head) {
        let leftCollision = (head.row === 0);
        let topCollision = (head.col === 0);
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