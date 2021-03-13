import Config from "./Config.js";
import Grass from "./Grass.js";
import Wall from "./Wall.js";
import Water from "./Water.js";


// 游戏，需要渲染草地、水、砖块、玩家飞机、敌人飞机
export default class Game{
    constructor() {
        // 地图上所有点的位置。二维数组
        this.pos = []
    }
    // 初始化
    init() {
        // 首先渲染草地
        let size = Config.blockSize
        // 横、纵向可以渲染出的方块的个数
        let horizontal = Config.canvas.width / size
        let vertical = Config.canvas.height / size
        for(let i = 0; i < horizontal; ++i) {
            let arr = []
            for(let j = 0; j < vertical; ++j) {
                let grass = new Grass(i*size, j*size)
                arr.push(grass)
            }
            this.pos.push(arr)
        }

        // 然后渲染水和砖块
        // 水和砖块的数量在50-100之间
        let count = Math.round(Math.random() * 50) + 50
        for(let i = 0; i < count; ++i) {
            // 随机生成位置
            let x = Math.floor(Math.random() * horizontal)
            let y = Math.floor(Math.random() * vertical)
            // 随机生成 0 1 ，判断是生成水还是生成砖块
            let type = Math.round(Math.random())
            switch(type) {
                case 0:
                    this.pos[x][y] = new Water(x * size, y * size)
                break
                case 1:
                    this.pos[x][y] = new Wall(x * size, y * size)
                break
            }
        }

    }
    // 渲染
    render(context) {
        // console.log(this);
        // console.log('game render');
        this.pos.forEach(item => {
            item.forEach(child => {
                // console.log(1);
                child.render(context)
            })
        })
    }
}
