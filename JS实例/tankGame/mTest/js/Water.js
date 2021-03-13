import Block from "./Block.js";
import Config from "./Config.js";

// 渲染水的方块
export default class Water extends Block{
    constructor(x = 0, y = 0, width = Config.blockSize, height = Config.blockSize,
        imgSrc = '../assets/water.png') {

        super(x, y, width, height, imgSrc)
    }
}
