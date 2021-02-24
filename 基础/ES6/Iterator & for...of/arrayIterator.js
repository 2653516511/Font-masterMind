/**
 * 对数组使用for...of循环
 * 数组原生具备iterator接口，即Symbol.iterator属性。
 * for...of的执行，本质上就是调用这个接口进行的操作。
 */
const arr = ['red', 'green', 'blue']
for(let i of arr) {
    console.log(i);
}

const obj = {}
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)
for(let j of obj) {
    console.log(j);
}
// console.log(obj);
/**
 * obj部署了arr的Symbol.iterator属性，obj的for...of循环有了相同的结果
 */

