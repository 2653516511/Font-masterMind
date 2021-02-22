/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 */
const isAnagram = (str1, str2) => {
    // 边界
    if (str1.length !== str2.length) {
        return false
    }
    if (str1.length === 0) {
        return true
    }

    // 主逻辑
    //1. 排序 => 判断两字符串是否相等
    // 首先排序
    const sor1 = str1.split('').sort(),
        sor2 = str2.split('').sort()
    // 判断是否相等
    // if(String(sor1) === String(sor2)) {
    //     return true
    // }
    // return false
    return String(sor1) === String(sor2)

    //另一种写法
    // const arr1 = str1.split(''),
    //       arr2 = str2.split('')
    // const sortFn = (a, b) => {
    //     return a.charCodeAt() - b.charCodeAt()
    // }
    // arr1.sort(sortFn)
    // arr2.sort(sortFn)
    // return arr1.join('') === arr2.join('')
    // 返回 true/false

}

console.log(isAnagram('anagram', 'agaram'));

/**
 * 1. 复杂度分析
 * 时间复杂度O(nlogn)：js中sort的原理是，个数小于等于10，使用直接插入排序；个数大于10，使用快排
 * 空间复杂度O(n)：数组空间长度与字符串长度线性相关，即为O(n)
 */
