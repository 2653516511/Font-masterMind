/**
 * 反转字符串
 * @param {Array} arr 
 */
const reverseString = (arr) => {
    // 边界
    if(arr.length === 0) {
        return arr
    }

    // 主逻辑
        // 1. 直接首位替换
    // for(let i = 0; i < arr.length/2; i++) {
    //     // 利用es6的解构赋值
    //     // [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]

    //     // 借助中间值赋值
    //     const tem = arr[i]
    //     arr[i] = arr[arr.length - i - 1]
    //     arr[arr.length - i - 1] = tem
    // }

        // 2. 利用双指针
    // let low = 0, high = arr.length - 1
    // while(low < high) {
    //     [arr[low], arr[high]] = [arr[high], arr[low]]
    //     low ++
    //     high --
    // }

        // 3. 利用数组的reverse函数
    arr.reverse()

    // 返回值 arr
    return arr
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));

/**
 * 1. 2. 时间复杂度O(n)，空间复杂度O(1)
 * 3. 时间复杂度O(n)：reverse函数的时间复杂度是O(n)
 */
