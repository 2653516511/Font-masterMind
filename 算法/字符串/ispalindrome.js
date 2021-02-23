/**
 * 验证回文串
 * 输入: "A man, a plan, a canal: Panama"  输出: true
 * 输入: "race a car"  输出: false
 * @param {string} str 
 */
const isPalindrome = (str) => {
    // 边界条件
    if(typeof str !== 'string') {
        return false
    }
    if(str.length === 0) {
        // 空字符串返回true
        return true
    }

    // 主逻辑
        // 首先处理str，只剩下需要的字母数字；然后比较是否是回文字符串
    // 首先，使用正则表达式，拿到字母和数字；
    // str = str.match(/[A-z0-9]/g).join('')
    str = str.replace(/[^A-z0-9]/g, '')
    // console.log(str);
    // 然后比较是否是回文字符串
        // 1. 字符串首尾对比
    for(let i = 0; i < str.length/2; i++) {
        // console.log(str[i].toLowerCase, str[str.length - i - 1].toLowerCase);
        if(str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase()) {
            //注意： 这里，str[i].toLowerCase没有进行函数的调用，而是一个函数，根据原型链，上述两个都是String原型对象上的函数，指向同一个地址，所以，是相等的
            return false
        }
    }
    return true
        // 2. 利用数组reverse方法判断
    // 这个方法是对字符串进行截取。注意：个数不能确定是奇是偶，不要随意截取。要么挨个判断，要么整体判断。
    // const strNumb = Math.floor(str.length/2)
    // const firstStr = str.substring(0, strNumb)
    // const secondReverseStr = str.substring(strNumb).split('').reverse().join('')
    // if(firstStr.toLowerCase() !== secondReverseStr.toLowerCase()) {
    //     console.log(firstStr, secondReverseStr);
    //     return false
    // }
    // return true
        // 字符串整体判断
    // const reverseStr = str.split('').reverse().join('')
    // if(str.toLowerCase() !== reverseStr.toLowerCase()) {
    //     return false
    // }
    // return true

    // 返回值 true/false
}
console.log(isPalindrome('race, w E car'));

/**
 * 时间复杂度O(n): toLowerCase(), split(), join(), reverse()的时间复杂度
 *      都是O(n)，且都在独立的循环中。
 * 空间复杂度O(n)
 */
