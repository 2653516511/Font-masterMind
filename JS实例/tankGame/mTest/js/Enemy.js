import Block from "./Block.js";
import Config from "./Config.js";

// 画草地
export default class Enemy extends Block {
    constructor(x = 0, y = 0, width = Config.blockSize, height = Config.blockSize,
        imgSrc = '../assets/enemy-down.png') {

        super(x, y, width, height, imgSrc)
    }
}