import Block from "./Block.js";
import Config from "./Config.js";

// 砖块，继承block
export default class Wall extends Block {
    constructor (x = 0, y = 0, width = Config.blockSize, height = Config.blockSize,
        imgSrc = './assets/wall.png') {

        super(x, y, width, height, imgSrc)
    }
}
