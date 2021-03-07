function input2Span() {
    const inputs = document.querySelectorAll('input')
    const spanq = document.querySelectorAll('span')
    const main = document.querySelector('main')

    // 保存R G B 三个的数值
    const obj = {
        R: 0,
        G: 0,
        B: 0
    }

    // console.log(inputs);
    for(let i = 0; i < inputs.length; ++i) {
        // 给每个标签绑定事件
        inputs[i].addEventListener('input', function () {
            // 修改相应的span文本
            spanq[i].innerHTML = inputs[i].value

            // 将inputs[i].value的值分别绑定到obj对于的k:v上
            // console.log(this);
            switch(this.name) {
                case 'R':
                    obj.R = inputs[i].value
                break;
                case 'G':
                    obj.G = inputs[i].value
                break;
                case 'B':
                    obj.B = inputs[i].value
                break;
            }
            // console.log(obj);
            // main.style.background = `rgb(${obj.R}, ${obj.G}, ${obj.B})`
            // 使用es6的对象解构
            let {R, G, B} = obj
            main.style.background = `rgb(${R}, ${G}, ${B})`
            main.style.transform = `rotateX(${R}deg) rotateY(${G}deg) rotateZ(${B}deg)`

        })
        
    }
}
input2Span()