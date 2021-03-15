import Snake from "./Snake.js"
import Config from "./Config.js";

let headX = Config.snakeHead.snakeHeadX,
    headY = Config.snakeHead.snakeHeadX
let snakeHead = new Snake(headX, headY, 'snakeHead')
snakeHead.create()
