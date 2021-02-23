/**
 * 最长公共前缀
 * 输入: ["flower","flow","flight"]  输出: "fl"
 * @param {array} arr
 * @returns {string} commonPrefix
 */
const longestCommonPrefix = (arr) => {
    const arrLen = arr.length
    // 边界条件
    // if(typeof arr !== 'object') {
    //     console.log(11);
    //     return
    // }
    if(arrLen === 0) {
        return ''
    } else if(arrLen === 1) {
        return arr[0]
    }

    // 主逻辑
        // 1. 数组中的第一个元素作为第一个公共前缀，与第二个元素比较，得到公共前缀，依次与后面的元素进行比较
    // 两个元素取公共前缀函数
    // let findCommonPrefix = (str1, str2) => {
    //     const str1Len = str1.length, str2Len = str2.length
    //     // 循环遍历比较
    //     let i = 0
    //     while(i < str1Len && i < str2Len && str1[i] === str2[i]) { 
    //         i++
    //     }
    //     return i > 0 ? str1.substring(0, i) : ''
    // }
    // let commonPrefix = arr[0]
    // for(let i = 1; i < arr.length; ++i) {
    //     commonPrefix = findCommonPrefix(commonPrefix, arr[i])
    // }
    // return commonPrefix

        // 2. 依次比较每一个元素的第一个、第二个...字母
    let j = 0, flag = true
    while (flag) {
        if(j <= arr[0].length) {
            for(let i = 1; i < arr.length; ++i) {
                if(arr[i].length <= j || arr[i][j] !== arr[0][j]) {
                    flag = false
                    break
                }
            }
        } else{
            flag = false
        }
        j++
    }
    return arr[0].substring(0, j - 1)
    
    
    // 返回值 string
}
console.log(longestCommonPrefix(["flower","flow","flight"]));

/**
 * 1. 时间复杂度O(n), 空间复杂度O(1)
 * 2. 时间复杂度O(n), 空间复杂度O(1)
 */
