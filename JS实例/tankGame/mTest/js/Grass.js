import Block from "./Block.js";
import Config from "./Config.js";

// 画草地
export default class Grass extends Block {
    constructor(x = 0, y = 0, width = Config.blockSize, height = Config.blockSize,
        imgSrc = '../assets/grass.png') {

        super(x, y, width, height, imgSrc)
    }
}
