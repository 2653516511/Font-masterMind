import Snake from "./Snake.js"

// 游戏的类
export default class Game {
    constructor() {
        // 控制蛇走的定时器
        this.timer = null
    }
    // 初始化游戏
    init() {
        // need a snake
        let snake = new Snake()
        snake.create()

        // 根据键盘，判断蛇走的方向
        document.onkeydown = function(key) {
            if(key.which === 37 && snake.positon !== snake.nextP.right) {
                snake.positon = snake.nextP.left
            } else if(key.which === 38 && snake.positon !== snake.nextP.down) {
                snake.positon = snake.nextP.up
            } else if(key.which === 39 && snake.positon !== snake.nextP.left) {
                snake.positon = snake.nextP.right
            } else if(key.which === 40 && snake.positon !== snake.nextP.up) {
                snake.positon = snake.positon.down
            }
        }
    }
    // start game
    start() {
        this.timer = setInterval(() => {
            snake.nextPositon()
        }, 300)
    }

}
