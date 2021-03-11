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
