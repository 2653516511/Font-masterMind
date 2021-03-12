import Config from "./Config.js"
import Enemy from "./Enemy.js"
import Grass from "./Grass.js"
import Tank from "./Tank.js"
import Wall from "./Wall.js"
import Water from "./Water.js"

// 把游戏本身也当初一个对象
export default class Game{
    constructor() {
        // 存储地图的每一个方块的位置。二维数组
        this.map = []

        // 存储敌人的坦克
        this.enemyArr = []
    }

    // 初始化地图，先把草地铺满地图
    init() {
        // 玩家坦克的位置
        var playX = 13, playY = 11
        // 敌方坦克的位置
        var enemyX = [0, 12, 23]
        
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
            let isOk = true
            // 生成随机坐标
            let x = Math.floor(Math.random() * horizontal)
            let y = Math.floor(Math.random() * vertical)
            // console.log('坐标', x, y);
            
            // 这里判断随机生成的坐标是否是坦克位于的地方，如果是，则只生成草地
            if(y === 0 && enemyX.indexOf(x) !== -1) {
                isOk = false
            } else if(y === playY && x === playX) {
                isOk = false
            }

            // 随机生成0 1两个数，判断是生成水还是砖块
            let select = Math.round(Math.random())

            // 这里最好不是只写isOk，这样会在后面修改的时候不清楚它的属性
            if(isOk === true) {
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

        // 生成玩家的坦克
        this.player = new Tank(playX * size, playY * size)
        // 不是把这一个方块渲染成坦克，而是给这个方块上加一层坦克
        // this.map[13][11] = new Tank(13 * size, 11 * size)

        // 生成3个地方坦克
        let enemy1 = new Enemy(enemyX[0],0)
        let enemy2 = new Enemy(enemyX[1] * size, 0)
        let enemy3 = new Enemy(enemyX[2] * size, 0)
        this.enemyArr.push(enemy1, enemy2, enemy3)
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
        this.player.render(context)
        // 渲染地方坦克
        this.enemyArr.forEach(item => {
            item.render(context)
        })
    }
}
