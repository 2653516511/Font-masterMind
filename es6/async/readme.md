### await后面的程序执行的问题：
可以将await的程序之后的程序当成promise的then方法, 加入微任务队列，例如
```js
async function async1() {
    console.log(1);
    await async2()
    console.log(2);
}
function async2() {
    console.log('async2');
}
console.log(3);
async1()
console.log(4);
// 3 1 async2 4 2
而不是
// 3 1 async2 2 4
```