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
    // console.log(nextPos);

    // 下一个点是自己，则game over。 nextPos 在this.pos中存在
    let selfCollied = false
    console.log('pos', this.pos);

    this.pos.forEach((item, index, arr) => {
        // console.log('item', item);
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
        // console.log('move');

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
        this.pos.splice(0,0,[this.head.x/sw + this.direction.x, this.head.y/sh + this.direction.y])
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
