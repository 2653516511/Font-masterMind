let sw = 20,    //方框的宽度
    sh = 20,    //方框的高度
    tr = 30,    //方框可移动的行数
    td = 30     //方框可移动的列数

let snake = null,
    food = null,
    game = null

snake = new Snake()
// snake.init()
// snake.getNextPos()

game = new Game()

// 点击开始按钮，蛇开始走
let startBtn = document.querySelector('.startBtn button')
startBtn.onclick = function() {
    this.parentNode.style.display = 'none'
    // 初始化game
    game.init()
}

// 暂停游戏
// window.onclick = function() {}
let contentClick = document.getElementById('snakeWrap')
let pauseBtn = document.querySelector('.pauseBtn button')
contentClick.onclick = function() {
    game.pause()
    pauseBtn.parentNode.style.display = 'block'
}
// 继续游戏
pauseBtn.onclick = function() {
    game.start()
    pauseBtn.parentNode.style.display = 'none'
}
