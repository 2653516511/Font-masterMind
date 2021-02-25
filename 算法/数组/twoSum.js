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
    // const len = arr.length
    // for(let i = 0; i < len - 1; ++i) {
    //     const tem = target - arr[i]
    //     for(let j = i + 1; j < len; ++j) {
    //         if(arr[j] === tem) {
    //             return [i, j]
    //         }
    //     }
    // }
    // return []

        // 2. 利用hash，hash保存 target-当前元素的差: 当前元素的索引
    let hash = {}, res = []
    arr.some((item, index, arr) => {
        // console.log(item);
        const tem = target - item
        // 存在 map的查找O(1)
        if(hash[item] !== undefined) {
            res = [hash[item], index]
            // some方法，返回true时，终止遍历
            return true
        } else {
            // console.log(1);
            // 不存在
            hash[tem] = index
            return false
        }
    })
    return res

    // 返回值 [index1, index2]
}
console.log(twoSum([1,2,5,3,6], 5));

/**
 * 1. 时间复杂度O(n2); 空间复杂度O(1)
 * 2. 时间复杂度O(n), some遍历，map的查找时间复杂度是O(1); 
 *    空间复杂度O(n): 申请的空间与数组的个数成线性相关
 */
