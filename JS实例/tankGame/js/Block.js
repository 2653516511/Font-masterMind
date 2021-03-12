import Config from "./Config.js";

export default class Block{
    constructor(x = 0, y = 0, width = Config.blockSize, height = Config.blockSize, imgSrc = './assets/grass.png') {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.imgSrc = imgSrc

        // 把图片画到画布上，必须有图片对象
        this.image = new Image()
        this.image.src = this.imgSrc
        // 定义一个状态，表示这个图片是否加载完成
        this.isReady = false
        this.image.onload = () => {
            // 图片加载完成, 可以画了
            this.isReady = true
        }

    }

    // 给方块对象，添加一个渲染的方法，使其可以出现在页面上
    render(context) {
        // context 对象是一个画笔对象
        // 判断图片加载完成时，开始画
        if(this.isReady === true) {
            // context.drawImage(imageResource, dx, dy, dWidth, dHeight);
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

}
