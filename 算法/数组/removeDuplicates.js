/**
 * 从排序数组中删除重复项
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 *  给定数组 nums = [1,1,2]
    函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
    你不需要考虑数组中超出新长度后面的元素。
 * @param {array} arr 
 */
const removeDuplicates = (arr) => {
    // 边界条件
    if(arr.length === 0) {
        return 0
    }

    // 主逻辑
        // 1. 因为是排好序的，直接for循环，判断下一项是否与该项相等，相等删除，i不加1，不等 i加1
    // const len = arr.length
    /**
     * 注意：这里需要清楚，数组是增、删的，for循环需要 动态获取 到 数组长度，
     *      所以不能 提前获取arr.length，
     */
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i + 1] === arr[i]) {
    //         arr.splice(i + 1, 1)
    //         i--
    //     }
    // }
    // return arr.length

        // 2. 利用count记录最后不重复的数，并且count作为数组的下标。
        //  count初值为0，当前的数如果与arr[count]相等，count不变，不等，则count加1
    let count = 0
    for(let i = 1; i < arr.length; ++i) {
        if(arr[count] !== arr[i]) {
            ++count
        }
    }
    return count + 1

    // 返回值 number
}
const arr = [1,2,2,3]
console.log(removeDuplicates(arr));
/**
 * 1. 时间复杂度 O(n); 空间复杂度 O(1)
 * 2. 时间复杂度 O(n); 空间复杂度 O(1)
 */
