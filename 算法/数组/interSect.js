/**
 * 两个数组的交集
 * @param {array} arr1 
 * @param {array} arr2 
 */
const interSect = (arr1, arr2) => {
    // 边界条件
    if(arr1.length === 0 || arr2.length === 0) {
        return []
    }

    // 主逻辑
        // 1. 将第一个数组保存为hash形式，遍历第二个数组，判断hash中是否存在，存在则value-1，并保存该值
        // 首先将第一个数组按元素和出现次数保存到hash中；
        // 然后遍历第二个数组，判断hash中是否存在，存在，则push到res数组中，同时value-1
    let hash = {}, res = []
    const len1 = arr1.length, len2 = arr2.length
    for(let i = 0; i <len1; ++i) {
        if(hash[arr1[i]]) {
            hash[arr1[i]]++
        } else {
            hash[arr1[i]] = 1
        }
    }
    for(let j = 0; j < len2; ++j) {
        if(hash[arr2[j]]) {
            res.push(arr2[j])
            hash[arr2[j]]--
        }
    }
    return res

    // 返回值 array
}
const arr1 = [2,3,1,4,2], arr2 = [2,3,9,2]
console.log(interSect(arr1, arr2));
