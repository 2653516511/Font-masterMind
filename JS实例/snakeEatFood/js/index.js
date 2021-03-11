let sw = 20,    //方框的宽度
    sh = 20,    //方框的高度
    tr = 30,    //方框可移动的行数
    td = 30     //方框可移动的列数

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
            y: 0
        },
        right: {
            x: 1,
            y: 0
        },
        up: {
            x: 0,
            y: -1
        },
        down: {
            x: 0,
            y: 1
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
    this.direction = this.directionNum.up
}

// 获取蛇头下一个位置对应的元素
Snake.prototype.getNextPos = function() {
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
    // this.strategies.eat.call(this)

    // 下一个点什么都不是，继续走。除了以上情况，就剩下这种情况了
    this.strategies.move.call(this)
}
Snake.prototype.strategies = {
    move: function() {
        console.log('move');
    },
    die: function() {
        console.log('die');
    },
    eat: function() {
        console.log('eat');
    }
}

let snake = new Snake()
snake.init()
snake.getNextPos()
