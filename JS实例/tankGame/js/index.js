// import Block from './Block.js'
import Game from './Game.js'

// 获取画布
let cvs = document.querySelector('#cvs')
// 得到画笔对象
let context = cvs.getContext('2d')

// 
// let b = new Block(0,0)
// // 加个异步，
// setTimeout(() => {
//     b.render(context)
// }, 1000)

// 把游戏当成一个对象
let game = new Game(context)
game.init()
setTimeout(() => {
    game.render(context)
}, 1000);


