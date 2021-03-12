import Block from "./Block.js";
import Config from "./Config.js";

// 草地，继承 block
export default class Grass extends Block {
    constructor(x = 0, y = 0, width = Config.blockSize,
        height = Config.blockSize, imgSrc = './assets/grass.png') {
        
        // 通过super调用父类的构造函数
        super(x, y, width, height, imgSrc)
    }
        
}
