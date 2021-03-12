import Config from "./Config.js"
import Grass from "./Grass.js"
import Wall from "./Wall.js"
import Water from "./Water.js"

// 把游戏本身也当初一个对象
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

        for(let i = 0; i < horizontal; ++i) {
            let arr = []
            for(let j = 0; j < vertical; ++j) {
                // 生成草地
                let g = new Grass(i*size, j*size)
                arr.push(g)
            }
            this.map.push(arr)
        }
        // console.log('map', this.map);
// debugger
        // 随机生成水或者砖块
        // 约定好水和砖块的个数为50-200块, 所以生成50-200之间的随机数
        let count = Math.round(Math.random() * 150) + 50
        for(let k = 0; k < count; ++k) {
            // 生成随机坐标
            let x = Math.floor(Math.random() * horizontal)
            let y = Math.floor(Math.random() * vertical)
            // console.log('坐标', x, y);

            // 随机生成0 1两个数，判断是生成水还是砖块
            let select = Math.round(Math.random())
            // console.log('select', select);

            switch(select) {
                case 0:
                    // console.log('water');
                    // 生成水
                    this.map[x][y] = new Water(x * size, y * size)
                    
                break;
                case 1:
                    // 生成水
                    // console.log('wall');
                    this.map[x][y] = new Wall(x * size, y * size)
                break
            }
        }
    }

    // 循环画草地
    render(context) {
        // console.log('map', this.map);
        this.map.forEach((item) => {
            // console.log('item',item);
            item.forEach(child => {
                // grass继承了block，所以这里可以直接使用block中的render方法了
                child.render(context)
            })
            
        })
    }
}
