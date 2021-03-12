import Block from "./Block.js";
import Config from "./Config.js";

export default class Tank extends Block {
    constructor(x = 0, y = 0, width = Config.blockSize, height = Config.blockSize,
        imgSrc = './assets/tank-up.png') {

        super(x, y, width, height, imgSrc)
    }
}
