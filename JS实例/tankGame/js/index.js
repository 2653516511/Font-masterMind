import Block from './Block.js'

// 获取画布
let cvs = document.querySelector('#cvs')
// 得到画笔对象
let context = cvs.getContext('2d')

// 
let b = new Block(0,0)
setTimeout(() => {
    b.render(context)
}, 1000)

