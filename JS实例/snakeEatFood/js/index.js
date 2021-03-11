let sw = 20,    //方框的宽度
    sh = 20,    //方框的高度
    tr = 30,    //方框可移动的行数
    td = 30     //方框可移动的列数

let snake = null,
    food = null,
    game = null

// 方框构造函数
function Square(x, y, className) {
    // 0,0      0,0
    // 10,0     1,0
    // 20,0     2,0
    // 存储方框的位置坐标
    this.x = x * sw
    this.y = y * sh
    this.className = className

    // 方框对应的dom元素
    this.viewContent = document.createElement('div')
    this.viewContent.className = this.className

    // 方框的父级
    this.parent = document.getElementById('snakeWrap')
}
// 创建方法dom，并添加到页面里
Square.prototype.create = function() {
    // let viewContentStyle = this.viewContent.style
    // viewContentStyle.width = sw + 'px'
    // viewContentStyle.height = sh + 'px'
    // viewContentStyle.left = this.x + 'px'
    // viewContentStyle.top = this.y + 'px'

    this.viewContent.style.position = 'absolute'
    this.viewContent.style.width = sw + 'px'
    this.viewContent.style.height = sh + 'px'
    this.viewContent.style.left = this.x + 'px'
    this.viewContent.style.top = this.y + 'px'

    this.parent.appendChild(this.viewContent)
}
Square.prototype.remove = function() {
    this.parent.removeChild(this.viewContent)
}

// 蛇
function Snake() {
    // 存储蛇头和蛇尾的信息
    this.head = null
    this.tail = null

    // 蛇身上每个方块的位置
    this.pos = []
    
    // 存储蛇走的方向
    this.directionNum = {
        left: {
            x: -1,
            y: 0,
            rotate: 180     //控制蛇头的旋转
        },
        right: {
            x: 1,
            y: 0,
            rotate: 0
        },
        up: {
            x: 0,
            y: -1,
            rotate: -90
        },
        down: {
            x: 0,
            y: 1,
            rotate: 90
        }
    }
}
Snake.prototype.init = function() {
    // 创建蛇头
    let snakeHead = new Square(2, 0, 'snakeHead')
    this.head = snakeHead
    snakeHead.create()
    this.pos.push([2, 0])

    // 创建蛇身
    let snakeBody1 = new Square(1, 0, 'snakeBody')
    snakeBody1.create()
    this.pos.push([1, 0])

    // 创建蛇尾
    let snakeTail = new Square(0,0, 'snakeBody')
    this.tail = snakeTail
    snakeTail.create()
    this.pos.push([0,0])

    // 形成链表关系
    snakeHead.last = null
    snakeHead.next = snakeBody1

    snakeBody1.last = snakeHead
    snakeBody1.next = snakeTail

    snakeTail.last = snakeBody1
    snakeTail.next = null

    // 给蛇添加一条属性，用来表示蛇走de方向
    this.direction = this.directionNum.right
}

// 获取蛇头下一个位置对应的元素
Snake.prototype.getNextPos = function() {
    // 蛇头要走的下一个点的坐标
    let nextPos = [
        this.head.x/sw + this.direction.x,
        this.head.y/sh + this.direction.y
    ]
    console.log(nextPos);

    // 下一个点是自己，则game over。 nextPos 在this.pos中存在
    let selfCollied = false
    this.pos.forEach((item, index, arr) => {
        if(item[0] === nextPos[0] && item[1] === nextPos[1]) {
            // 相等，即是撞上了
            selfCollied = true
        }
    })
    if(selfCollied === true) {
        console.log('撞上了');
        // 这里注意this的指向问题，不然die方法里面的this就指向了this.strategies，而不是Snake.prototype
        this.strategies.die.call(this)
        return
    }

    // 下一个点是围墙，则game over
    if(nextPos[0] < 0 || nextPos[1] < 0 || nextPos[0] > td -1 || nextPos[1] > tr -1) {
        console.log('撞墙了');
        this.strategies.die.call(this)
        return
    }

    // 下一个点是食物，则吃，然后继续走
    if(food && food.pos[0] === nextPos[0] && food.pos[1] === nextPos[1]) {
        this.strategies.eat.call(this)
    }

    // 下一个点什么都不是，继续走。除了以上情况，就剩下这种情况了
    this.strategies.move.call(this)
}
Snake.prototype.strategies = {
    move: function(format) {
        console.log('move');

        // 创建一个新方框放在旧蛇头的位置
        let newBody = new Square(this.head.x/sw, this.head.y/sh, 'snakeBody')
        // 修改链表
        newBody.next = this.head.next
        newBody.next.last = newBody
        newBody.last = null
        // 移除旧蛇头
        this.head.remove()
        newBody.create()

        // 创建新蛇头
        let newHead = new Square(this.head.x/sw + this.direction.x, this.head.y/sh + this.direction.y, 'snakeHead')
        // 修改链表
        newHead.next = newBody
        newHead.last = null
        newBody.last = newHead
        newHead.viewContent.style.transform = 'rotate(' + this.direction.rotate + 'deg)'
        newHead.create()

        // 更新蛇身上的方框的坐标
        this.pos.splice(0,0,this.head.x/sw + this.direction.x, this.head.y/sh + this.direction.y)
        this.head = newHead
        // 根据format判断是否是吃
        if(!format) {   //format是false，则表示不吃, 则需要删除蛇尾并更新
            this.tail.remove()
            this.tail = this.tail.last
            this.pos.pop()
        }

    },
    die: function() {
        console.log('die');
        game.over()
    },
    eat: function() {
        console.log('eat');

        this.strategies.move.call(this, true)
        createFood()
        // 得分
        game.score++
    }
}

snake = new Snake()
// snake.init()
// snake.getNextPos()

// 创建食物
function createFood() {
    // 食物不能在边框上，也不能在蛇身上
    let x = Math.round(Math.random() * (td - 1))
    let y = Math.round(Math.random() * (tr - 1))

    let include = true      //判断是否继续循环，
    while(include) {
        snake.pos.forEach(item => {
            if(item[0] !== x && item[1] !== y) {
                // 证明不在蛇身上
                include = false
            }
        })
    }
    
    food = new Square(x, y, 'food')
    // 存储食物的坐标
    food.pos = [x, y]
    // 可以使用单例设计模式: 不用每次都创建，而是改变他的位置, 不需要remove他
    let hasFood = document.querySelector('.food')
    if(hasFood) {
        // 已经有食物了，不需要移除它
        hasFood.style.top = y*sh + 'px'
        hasFood.style.left = x*sw + 'px'
    } else {
        food.create()
    }
}
// createFood()

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
        } else if(nextKey.which == 38 && snake.direction != snake.directionNum.down) {
            snake.direction = snake.directionNum.up
        } else if(nextKey.which == 39 && snake.direction != snake.directionNum.left) {
            snake.direction = snake.directionNum.right
        } else if(nextKey.which == 40 && snake.direction != snake.directionNum.up) {
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
