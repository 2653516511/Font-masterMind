/**
 * 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
 * 输入: [0,1,0,3,12]  输出: [1,3,12,0,0]
 * 说明
        必须在原数组上操作，不能拷贝额外的数组。
        尽量减少操作次数。
   注意事项
        由于题目要求必须在原数组上操作，数组的 filter Api 或是 sort 算法，都是不必考虑的。
        切记不要边遍历数组边修改数组长度，如：splice，push，pop等。
 * @param {array} nums 
 */
const moveZeroes = (nums) => {
    // 边界条件
    if(nums.length === 0) {
        return nums
    }

    // 主逻辑
        // 1. 利用双指针，left和right，right指向当前值，如果不为0，和left的数交换，同时left加1，left则永远指向非0的下一个值
    let left = 0, right = 0
    while(left <= right && right < nums.length) {
        if(nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            ++left
        }
        ++right
    }

    // 返回值 array nums
    return nums
}
const nums = [1,2,3,0,3,4]
console.log(moveZeroes(nums));
