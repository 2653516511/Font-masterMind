### all 使用
promise在新建的时候就已经执行了。 所以， 在.all方法中，参数数组中任意一个出错，其他的promise的执行不受影响，因为他们在新建的时候已经执行了。

### then 使用
只有前面的promise状态变了之后才会执行后面的then，一般都是由 pending -> resolved 了执行 then，pending -> rejected 了执行 catch。
```js
const { reject } = require("../../../try/sourceUnder");

setTimeout(() => {
    console.log(4);
    Promise.resolve().then(() => {
        console.log(5);
    })
})
new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        // 这个resolve在宏任务中，所有后面的then只有执行到这一行 才会加入微任务队列中
        resolve('timer')
    })
}).then(e => {
    console.log(3);
    console.log(e);
})
// 1 4 5 2 3 timer
```

### 状态改变
状态只要结束，就不会改变，如下例：
```js
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('timer1')
    })
    resolve('p11')
})

p1.then(e => {
    console.log('1', e);
})
// 1 p11
```
这里面p11已经改变状态了，setTimeout的resolve就不能继续改变了.

