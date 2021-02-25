/**
 * 旋转数组：给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
 *  输入: [1,2,3,4,5,6,7] 和 k = 3
 *  输出: [5,6,7,1,2,3,4]
    解释:
    向右旋转 1 步: [7,1,2,3,4,5,6]
    向右旋转 2 步: [6,7,1,2,3,4,5]
    向右旋转 3 步: [5,6,7,1,2,3,4]
 * @param {Array} arr 
 * @param {number} k 
 */
const rotate = (arr, k) => {
    // 边界条件
    if(arr.length === 0) {
        return arr
    }

    // 主逻辑
        //1. 元素移位，亦即数组后几位移至前几位
    // const len = arr.length
    // k = k % len
    // 直接在arr上移动, 时复 & 空复 为O(1)
    // arr.unshift(...arr.splice(len - k), k)

    // const trans = arr.splice(len - k, k)
    // 直接利用es6的解构赋值
    // arr.unshift(...trans)
    // 使用for循环，将trans中的元素依次倒着放到arr开头
    // for(let i = trans.length - 1; i >= 0; i--) {
    //     arr.unshift(trans[i])
    // }
    // 利用数组的unshift方法和pop方法
    // for(let i = 1; i <= k; ++i) {
    //     const tem = arr.pop()
    //     arr.unshift(tem)
    // }

        // 2. 将数组整体向后移，然后将移动的元素放到前面
    const len = arr.length
    k = k % len
    for(let i = len - 1; i >= 0; i--) {
        arr[i + k] = arr[i]
    }
    for(let j = k - 1; j >= 0; j--) {
        arr[j] = arr[len + j]
        arr.pop()
    }

    // 返回值 array, 也可以不用返回值，modify arr in-place instead
    return arr
}

console.log(rotate([1,2,3,4,5], 2));
