import Config from "./Config.js"
import Grass from "./Grass.js"

export default class Game{
    constructor() {
        // 存储地图的每一个方块的位置。二维数组
        this.map = []
    }

    // 初始化地图，先把草地铺满地图
    init() {
        let size = Config.blockSize
        // 每一行或每一列可以放多少个方块
        let vertical = Config.mapSize.height / size
        let horizontal = Config.mapSize.width / size

        for(let i = 0; i < vertical; ++i) {
            let arr = []
            for(let j = 0; j < horizontal; ++j) {
                // 生成草地
                let g = new Grass(j*size, i*size)
                arr.push(g)
            }
            this.map.push(...arr)
        }
        // this.render(context)
    }

    // 循环画草地
    render(context) {
        this.map.forEach((item) => {
            console.log(item);
            // grass继承了block，所以这里可以直接使用block中的render方法了
            item.render(context)
        })
    }
}
