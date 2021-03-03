/**
 * 接雨水
 * @param {array} arr 
 */
const maxWater = (arr) => {
    // 边界条件
    if(arr.length <= 2) {
        return 0
    }

    // 主逻辑
        // 1. 计算i的盛水量，最后相加起来，就是总的盛水量了。
        // i的盛水量：min(max(i的左边的数)，max(i的右边的数)) - i的数
    // let count = 0       //盛水总量
    // const len = arr.length
    // for(let i = 1; i < len; ++i) {
    //     // 左边最大值
    //     let l_max = Math.max(...arr.slice(0, i))
    //     // 右边最大值
    //     let r_max = Math.max(...arr.slice(i + 1))
    //     // 计算i处的盛水量
    //     let temp = Math.min(l_max, r_max) - arr[i]
    //     if(temp > 0) {
    //         count += temp
    //     }
    // }
    // return count

        // 2. 思路不变，写法不同，时间复杂度不同
        // 将计算最大数最小数的程序提出来
    // const lrMinNum = function(nums1, nums2) {
    //     // 边界条件
    //     if(nums1.length === 0 && nums2.length === 0) {
    //         return 0
    //     }
    //     // 主逻辑
    //     // const res = Math.max(...nums)
    //     let res = 0, res1 = 0, res2 = 0
    //     for(let i = 0; i < nums1.length; ++i) {
    //         res1 = Math.max(res1, nums1[i])
    //     }
    //     for(let j = 0; j < nums2.length; ++j) {
    //         res2 = Math.max(res2, nums2[j])
    //     }

    //     // 返回值 number
    //     return res = Math.min(res1, res2)
    // }
    // let count = 0       //盛水总量
    // const len = arr.length
    // for(let i = 1; i < len; ++i) {
    //     const temp = lrMinNum(arr.slice(0, i), arr.slice(i + 1))
    //     if(temp - arr[i] > 0) {
    //         count += temp - arr[i]
    //     }
    // }
    // return count

        // 3. 使用双指针, 最优解法
    const len = arr.length
    let count = 0

    let left = 0, right = len - 1
    let l_max = arr[0], r_max = arr[len - 1]

    while(left <= right) {
        l_max = Math.max(l_max, arr[left])
        r_max = Math.max(r_max, arr[right])

        if(l_max < r_max) {
            count += l_max - arr[left]
            left++
        } else {
            count += r_max - arr[right]
            right--
        }
    }
    return count

    // if(arr.length === 0) {
    //     return 0
    // }
    // const n = arr.length
    // let res = 0

    // let left = 0
    // let right = n - 1

    // let l_max = arr[0]
    // let r_max = arr[n - 1]
    
    // while (left <= right) {
    //     l_max = Math.max(l_max, arr[left])
    //     r_max = Math.max(r_max, arr[right])

    //     if(l_max < r_max) {
    //         res += l_max - arr[left]
    //         left++
    //     } else {
    //         res += r_max - arr[right]
    //         right--
    //     }
    // }
    // return res
    // 返回值 number
}
// const arr = [0,1,0,2,1,0,1,3,2,1,2,1]
// const arr = [4,2,0,3,2,5]
const arr = [1,8,6,2,5,4,8,3,7]
console.log(maxWater(arr));
/**
 * 1. 时间复杂度O(n2); 空间复杂度O(1)
 * 2. 时间复杂度O(n); 空间复杂度O(1)
 * 
 */
