import Config from "./Config.js"


export default class Block {
    constructor(x = 0, y = 0, className) {

        this.x = x
        this.y = y
        this.width = 20
        this.height = 20
        this.className = className

        // 渲染dom元素
        this.newDom = document.createElement('div')
        this.newDom.className = this.className
        // 获取dom元素的父级
        this.parent = document.getElementById('game')

    }
    // 创建元素
    create() {
        // 首先设置要添加的元素的style各属性
        this.newDom.style.position = 'absolute'
        this.newDom.style.left = this.x * Config.blockSize + 'px'
        this.newDom.style.top = this.y * Config.blockSize + 'px'
        this.newDom.style.width = this.width + 'px'
        this.newDom.style.height = this.height + 'px'
        // console.log(1, this.newDom);
        this.parent.appendChild(this.newDom)
    }
    // 移除元素
    remove() {
        this.parent.removeChild(this.newDom)
    }
    
}
