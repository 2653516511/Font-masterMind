
const lis = document.querySelectorAll('li')

let clickNum = 0

for(let i = 0; i < lis.length; ++i) {
    // 给每一个li增加一个index属性
    lis[i].index = i + 1
    lis[i].onmouseover = function() {
        // console.log(1, this.index);
        setStarPosition(this.index)
    }
    lis[i].onmouseout = function() {
        setStarPosition(0)
    }
    lis[i].onclick = function() {
        // console.log(this.index);
        clickNum = this.index
    }
}

// 改变星星的位置函数
function setStarPosition(num) {
    // 鼠标移出，num为0，星星亮的个数为原来click之后的个数
    var num = num || clickNum
    // for(let i = 0; i < num; ++i) {
    //     lis[i].className = 'light'
    // }
    for(let i = 0; i < lis.length; ++i) {
        lis[i].className = i < num ? 'light' : ''
    }
}
