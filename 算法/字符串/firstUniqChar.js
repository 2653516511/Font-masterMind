/**
 * 字符串中的第一个唯一字符
 * @param {string} str 
 */
const firstUniqChar = (str) => {
    // 边界条件
    if(str.length === 0 || typeof str !== 'string') {
        return -1
    }

    // 主逻辑
        // 1. 判断当前的元素在余后的字符串中是否存在
    // for(let i = 0; i < str.length; i++) {
    //     // console.log(index, item);
    //     if(!str.includes(str[i], i+1)) {
    //         // 不存在，是唯一的
    //         return i
    //     }
    // }
    // return -1

        // 2. 双向，从前向后的索引是否与从后向前的索引相等
    // for(i of str) {
    //     if(str.indexOf(i) === str.lastIndexOf(i)) {
    //         // 索引相等，则只出现了一次
    //         return str.indexOf(i)
    //     }
    // }
    // return -1

        // 3. 利用hash统计出现一次的次数
    let hash = {}
    // 第一次遍历，统计每个字母的出现次数
    for(i of str) {
        hash[i] = hash[i] || 0
        hash[i] ++
    }
    // 第二次遍历，找出只出现一次的字母
    for(let j = 0; j < str.length; j ++) {
        if(hash[str[j]] === 1) {
            return j
        }
    }
    return -1

    // 返回值 index
}

console.log(firstUniqChar('leetclode'));

/**
 * 1,2. 时间复杂度O(n2)：indexof的时间复杂度是O(n)；空间复杂度O(1)
 * 3. 时间复杂度O(n); 空间复杂度O(1): hash的空间不随输入变量的变化而变化
 */
