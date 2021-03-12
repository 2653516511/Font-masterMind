
// 使用类的概念，描述一个区域

import Config from "./Config";

// 左上角的坐标，宽度和高度
class Area {
    constructor(x = 0, y = 0, width = Config.blockSize, height = Config.blockSize) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}
