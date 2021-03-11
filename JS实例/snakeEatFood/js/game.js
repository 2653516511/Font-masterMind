// 游戏
function Game() {
    this.timer = null
    this.score = 0
}
Game.prototype.init = function() {
    // 蛇
    snake.init()
    // 食物
    createFood()

    document.onkeydown = function(nextKey) {
        if(nextKey.which == 37 && snake.direction != snake.directionNum.right) {
            snake.direction = snake.directionNum.left
        } else if(nextKey.keyCode == 38 && snake.direction != snake.directionNum.down) {
            snake.direction = snake.directionNum.up
        } else if(nextKey.which == 39 && snake.direction != snake.directionNum.left) {
            snake.direction = snake.directionNum.right
        } else if(nextKey.keyCode == 40 && snake.direction != snake.directionNum.up) {
            snake.direction = snake.directionNum.down
        }
    }
    
    this.start()
}
Game.prototype.start = function() {
    this.timer = setInterval(() => {
        snake.getNextPos()
    }, 200)
}
Game.prototype.pause = function() {
    clearInterval(this.timer)
}
Game.prototype.over = function() {
    clearInterval(this.timer)
    alert('your score is:' + this.score)

    // 游戏回到开始的状态
    let snakeWrap = document.querySelector('#snakeWrap')
    snakeWrap.innerHTML = ''

    // 同时清空所有的数据，即重新new一个
    snake = new Snake()
    game = new Game()

    // 重新显示开始按钮
    let startBtnWrap = document.querySelector('.startBtn')
    startBtnWrap.style.display = 'block'
}