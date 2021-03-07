/**
 * 数组加1
 * @param {array} arr 
 */
const plusOne = (arr) => {
    // 边界条件
    if(arr.length === 0) {
        return [1]
    }

    // 主逻辑
        // 1. 转为数字，加1之后，重新转为数组
    // 为了与number区分，bigint的计算后面需加个n
    // const res = (BigInt(arr.join('')) + 1n).toString().split('')
    // return res

        // 2. 进位, 如果需要进位，那么就需要加1，否则直接退出即可
    const len = arr.length
    for(let i = len - 1; i >= 0; --i) {
        // 注意以下两个赋值方法的区别，一个是先赋值，一个是后赋值
        // const temp = arr[i]++
        const temp = ++arr[i]
        // console.log(arr[i], temp);
        if(Math.floor(temp / 10) === 0) {
            // 没有进位，直接返回
            return arr
        }
        arr[i] = temp % 10
    }
    // 以上for循环结束，还没有返回，说明还有进位，需要补上
    arr.splice(0, 0, 1)
    return arr
    

    // 返回值 a changed array
} 
const arr = [9,9,9]
console.log(plusOne(arr));

/**
 * 1. 时间复杂度 O(n) ；空间复杂度O(1)
 * 2. 时间复杂度 O(n) ；空间复杂度O(1)
 */
