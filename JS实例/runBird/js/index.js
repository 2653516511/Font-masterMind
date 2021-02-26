var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

// create picture
var img = new Image()
img.src = 'img/bird.jpg'
// 这里无法直接修改图片的大小，只能通过drawImage改变
// let imgSty = img.style
// imgSty.width = "30px"
// imgSty.height = "30px"
// console.log('img', img);


// 动画
let birdX = 20, birdY = 20, birdWidth = 30, birdHeight = 30
let birdTime = null

// 图片总是异步加载的
img.onload = function() {
    // 等待图片加载之后才进行的一些操作
    
    if(birdTime === null) {
        birdTime = setInterval(() => {
            if(birdY <= (400 - birdHeight)) {
                birdY++
            }
            // canvas每次都是在上一次绘制的基础上绘制的
            // 所以需要清空画布(先清空再绘制，不是先绘制再清空)
            context.clearRect(0, 0, 500, 400)
    
            // 绘制图片
            context.drawImage(img, birdX, birdY, birdWidth, birdHeight)
        }, 10);
    }

    // 点击任意位置
    document.onmousedown = function() {
        img.src = 'img/birdUp.jpg'
        birdY = birdY - 30
    }
    document.onmouseup = function() {
        img.src = 'img/bird.jpg'
        // birdY = birdY - 30
    }

    



}


// 柱子
var columnArr = []
var columnTimer = null
function createColumn() {
    columnTimer = setInterval(() => {
        
        var column = {}     //柱子容器
        column.positionX = 500
        column.positionY = -Math.round(Math.random()*100 + 100)
        column.imgA = new Image()
        column.imgB = new Image()
        column.imgA.src = 'img/colUp.png'
        column.imgB.src = 'img/colDown.png'
        column.id = new Date().getTime()

        // 将产生的柱子放入柱子数组中
        columnArr.push(column)

    }, 1500)
    
}
createColumn()
// 绘制柱子
function drawColumn() {
    console.log(columnArr);

    for(let i = 0; i < columnArr.length; ++i) {
        console.log(1);

        columnArr[i].positionX--
        context.drawImage(columnArr[i].imgA, columnArr[i].positionX, columnArr[i].positionY)
        context.drawImage(columnArr[i].imgB, columnArr[i].positionX, columnArr[i].positionY + 350)
    }
}
// setInterval(() => {
    // drawColumn()
// }, 2220);




