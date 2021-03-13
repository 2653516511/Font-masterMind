import Block from "./Block.js";
import Game from "./Game.js";

// 拿到画布对象
let cvs = document.querySelector('.cvs')
let ctx = cvs.getContext('2d')

// let block = new Block()
// setTimeout(() => {
//     block.render(ctx)
// }, 600);

let game = new Game()
// 先要初始化
game.init()
setTimeout(() => {
    game.render(ctx)
}, 500);
