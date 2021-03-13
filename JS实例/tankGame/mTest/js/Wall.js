import Block from "./Block.js";
import Config from "./Config.js";

// 砖块的方块渲染
export default class Wall extends Block {
    constructor(x = 0, y = 0, width = Config.blockSize, height = Config.blockSize,
        imgSrc = '../assets/wall.png') {

        super(x, y, width, height, imgSrc)
    }
}
