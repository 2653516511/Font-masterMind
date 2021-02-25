/**
 * 两数之和等于目标值
 * @param {array} arr 
 * @param {number} target 
 */
const twoSum = (arr, target) => {
    // 边界条件
    if(arr.length === 0) {
        return []
    }

    // 主逻辑
        // 1. 暴力解法，依次遍历当前元素与剩余元素，符合则直接返回，否则继续比较
    const len = arr.length
    for(let i = 0; i < len - 1; ++i) {
        const tem = target - arr[i]
        for(let j = i + 1; j < len; ++j) {
            if(arr[j] === tem) {
                return [i, j]
            }
        }
    }
    return []

    // 返回值 [index1, index2]
}
console.log(twoSum([1,2,5,3,6], 5));

/**
 * 1. 时间复杂度O(n2); 空间复杂度O(1)
 */
