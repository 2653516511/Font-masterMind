/**
 * 反转整数
 * @param {number} x 
 * @return {number}
 */
const reverse = (x) => {
    // 边界条件
    if(typeof x !== 'number') {
        return 
    }

    // 主逻辑
        // 1. 字符串方式处理
    // const res = x > 0 ? String(x).split('').slice(0).reverse().join('')
    //                   : String(x).split('').slice(1).reverse().join('')
    // const rest = x > 0 ? parseInt(res, 10) : (0 - parseInt(res, 10))
    // console.log(rest);
        // 2. 欧几里得算法 处理
    // 取得其对应的正数，或者也可以使用 let res = Math.abs(x)
    let res = x > 0 ? x : (0 - x)
    let rest = 0
    while(res > 0) {
        // 直接用欧几里得算法，从res的最后一位取值，并与rest拼接起来
        rest = res % 10 + rest * 10
        // 剔除掉最后一位
        res = Math.floor(res / 10)
    }
    rest = x > 0 ? rest : -rest

    // 返回值 return {number} or 0
    if(rest <= -(2**31) || rest >= 2**31 - 1) {         //或者为了性能可以直接写-21747483648
        // console.log(1);
        return 0
    }
    return rest
}
console.log(reverse(321));
/**
 * 1. 字符串方式的复杂度分析：
 * 时间复杂度O(n)：reverse函数的时复是O(n)，n是整数的长度，但考虑到这里的n32位整数的最大长度是11，即-2147483648，也可以认为时复是O(n)
 * 空间复杂度O(n)：借助了String(n)，同上，也可认为是O(1)
 * 
 * 2. 欧几里得方式的复杂度分析：
 * 时间复杂度O(n)：while循环的次数，n
 * 空间复杂度O(1)：这里用到常数个变量
 */