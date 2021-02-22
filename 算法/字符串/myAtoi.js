/**
 * 字符串转整数
 * @param {string} str 
 */
const myAtoi = (str) => {
    str = str.trim()
    // 边界条件
    if(str.length === 0 || typeof str !== 'string') {
        return 0
    }

    // 主逻辑
        // 1. 更简单的，直接使用api
    // res = parseInt(str)

        //2. 使用正则依次判断当前是字母还是数字
    // 首先，保存符号位
    // console.log(str);
    // let symbol = ''
    // if(str[0] === '-') {
    //     symbol = '-'
    //     str = str.substring(1)
    // }
    // // 然后，依次判断每一个元素
    // let res = 0
    // for(i of str) {
    //     i = i.trim()
    //     // typeof i === 'number'
    //     if(/\d/.test(i)) {
    //         //*****这里需要注意：数+字符串 => 字符串, 所以需要对i进行类型转换
    //         res = res*10 + Number(i)
    //     } else if(!i) {
    //         continue
    //     } else {
    //         // not a number
    //         break
    //     }
    // }
    // // 拼凑符号位，返回结果
    // if(symbol.length !== 0) {
    //     res = 0 - res
    // }
    
        // 3. 直接使用正则表达式
    let res = str.match(/^(-|\+)?\d+/g)
    console.log(res);
    res = Number(res)

    // 返回值 number
    if(res >= -21747483648 && res <= 21747483647) {
        return res
    }
    return 0
}

console.log(myAtoi('   42 o6w'));
let re = /\d+/g;
let str = '42 o6w';
let result = str.match(re);
console.log(result);  // ["2016", "01", "02"]

/**
 * 1. 时空复杂度O(1)
 * 2. 时间复杂度
 * 3. 时间复杂度O(1)：代码执行的时候，运行的时间不随某个变量的增长而增长；
 *    空间复杂度O(1)
 */
