import Block from "./Block.js"
import Config from "./Config.js"

export default class Snake {
    constructor() {

        // 蛇的各节点的位置数组
        this.pos = []
        // 蛇头
        this.head = null
        // 蛇尾
        this.tail = null
        // 蛇运动的方向
        this.nextP = {
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
    // 创建蛇
    create() {
        // create snake head
        let head = new Block(2, 0, 'snakeHead')
        this.head = head
        head.create()
        this.pos.push([2, 0])

        // create snake body
        let body = new Block(1, 0, 'snakeBody')
        body.create()
        this.pos.push([1, 0])

        // create snake tail
        let tail = new Block(0, 0, 'snakeBody')
        this.tail = tail
        tail.create()
        this.pos.push([0,0])

        // 让蛇作为一个整体动，数据解构连成链表
        head.last = null
        head.next = body

        body.last = head
        body.next = tail

        tail.last = body
        tail.next = null

        // 蛇走的方向
        this.positon = this.nextP.right
        // this.nextPositon()
    }
    // 蛇的下一个位置
    nextPositon() {
        // judge if the snake eat food or not
        let isEat = true

        // 蛇头的下一个位置
        this.nextPos = [
            this.pos[0][0] + this.positon.x,
            this.pos[0][1] + this.positon.y
        ]
        // console.log(this.nextPos);
        // 根据蛇头的下一个位置判断当前蛇的情况
        // 1, 下一个位置是墙，死
        if(this.nextPos[0] < 0 || this.nextPos[0] > Config.horizental || this.nextPos[1] < 0 || this.nextPos[1] > Config.vertical) {
            console.log('撞墙了啊');
            this.strategies.die.call(this)
            // 死了之后不在执行后面的语句，所以直接返回
            return
        }
        // 2，下一个位置是蛇身体，死
        this.pos.forEach(item => {
            if(this.nextPos && this.nextPos[0] === item[0] && this.nextPos[1] === item[1]) {
                console.log('撞到自己了呀');
                this.strategies.die.call(this)
                return
            }
        })
        
        // 3，下一个位置是食物，吃、走
        // if('判断是否吃上的条件') {
        //     isEat = true
        //     this.strategies.eat.call(this, isEat)
        //     return
        // }
        

        // 4，下一个位置正常，走
        // 前面的三种情况都不是，排除了，所以就只剩继续走了
        // console.log(this);
        this.strategies.move.call(this, isEat)
        
    }
    // 蛇的对策
    strategies = {
        move: function(isEat) {
            /**
             * 移动的方法：首先新建一个身体，放到原来蛇头的地方，并移除原来的蛇头，
             *      然后新建一个蛇头，放在下一个位置, nextPos
             *      蛇尾，如果吃了食物，则不动，如果没有吃，则蛇尾为原来蛇尾的last，并移除最后一个元素
             */
            // 新建一个身体
            // console.log(this);
            let newBody = new Block(this.pos[0][0],this.pos[0][1], 'snakeBody')
            
            // 连接
            newBody.next = this.head.next
            newBody.next.last = newBody
            newBody.last = null
            newBody.create()
            // 移除原来的蛇头
            this.head.remove()

            // 新建一个蛇头
            // console.log(this.nextPos);
            let newHead = new Block(this.nextPos[0], this.nextPos[1], 'snakeHead')
            newHead.create()
            // 连接
            newBody.last = newHead
            newHead.next = newBody
            newHead.last = null
            this.head = newHead

            // 更新蛇身体的坐标
            console.log(this.pos);
            this.pos.splice(0,0,[this.nextPos[0], this.nextPos[1]])

            // 蛇尾
            if(isEat === false) {
                // 蛇没有吃，则蛇尾动
                this.tail.remove()
                this.tail = this.tail.last
                this.tail.next = null
                this.pos.pop()
            }

        },
        die: function() {

        },
        eat: function(isEat) {
            // console.log(this);
            this.strategies.move(isEat)
        }
        
    }
}
