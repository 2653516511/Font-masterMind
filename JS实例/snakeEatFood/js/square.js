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