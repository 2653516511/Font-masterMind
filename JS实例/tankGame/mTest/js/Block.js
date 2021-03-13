import Config from "./Config.js";

// 每一个方块的 位置、大小、要渲染的图片
export default class Block {
    constructor(x = 0, y = 0, width = Config.blockSize, height = Config.blockSize,
        imgSrc = '../assets/grass.png') {

        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.imgSrc = imgSrc

        // 渲染图片
        this.img = new Image()
        this.img.src = this.imgSrc
        // 定义一个是否加载完的标志
        this.isReady = false
        // 图片加载完开始渲染
        this.img.onload = () => {
            // console.log(this);
           this.isReady = true 
        //    console.log(this.isReady);
        }
    }
    // 渲染图片的方法
    render(context) {
        // console.log(this);
        // this.img.onload = function() {
            if(this.isReady === true) {
                // console.log(2);
                // 画图片，但是要在图片加载完之后才能渲染
                context.drawImage(this.img, this.x, this.y, this.width, this.height);
            }
            
        // }
    }
}
