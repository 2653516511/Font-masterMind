/**
 * str2在str1中出现的第一个位置
 * 给定 haystack = 'hello world', needle = 'll' 
 * 返回2
 * @param {string} str1 
 * @param {string} str2 
 */
const strStr = (str1, str2) => {
    let str1Len = str1.length, str2Len = str2.length
    // 边界条件
    if(str2Len === 0) {
        return 0
    }
    if(typeof str1 !== 'string' || typeof str2 !== 'string' || str1Len < str2Len) {
        return -1
    }
    if(str1Len === str2Len && str1 === str2) {
        return 0
    }

    // 主逻辑
        // 1. 找到str2的第一个字母在str1中的位置，str1中截取str2的长度，比较
    let startIndex = 0, len = str1Len - str2Len
    while (startIndex <= len) {
        // 寻找出现的索引
        let firstFindIndex = str1.indexOf(str2[0], startIndex)
        if(firstFindIndex !== -1) {
            // 存在索引，则截取相同长度，比较
            const tempStr = str1.substr(firstFindIndex, str2.length)
            if(tempStr === str2) {
                return firstFindIndex
            }
            // 存在索引，继续从索引的下一个位置进行比较
            startIndex = firstFindIndex + 1
        } else {
            // 没有找到，继续从下一个位置进行比较
            startIndex ++
        }
        
    }
    return -1

    // 返回值 index
}

console.log(strStr('aaaaa', 'bba'));
