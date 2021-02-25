/**
 * 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素
 * 输入: [2,2,1]  输出: 1
 * @param {array} arr 
 */
const singleNumber = (arr) => {
    // 边界条件
    if(arr.length === 0) {
        return
    }

    // 主逻辑
        // 1. 直接利用map和filter，嵌套遍历，得到一个存在多个集合的数组。类似[ [ 4 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ] ]
    // const arrNums = arr.map(item => {
    //     return arr.filter(a => {
    //         return a === item
    //     })
    // })
    // // console.log(arrNums);
    // return arrNums.find(item => item.length === 1)[0]

        // 2. 利用异或运算符比较
    return arr.reduce((accumulator, currentItem) => 
                        accumulator ^ currentItem)

    // 返回 item
}
console.log(singleNumber([4,1,2,1,2]));

/**
 * 1. 时间复杂度O(n2)，map和filter两层；空间复杂度O(n)
 * 2. 时间复杂度O(n), reduce一层；空间复杂度O(1)
 */

 /**
  * 异或操作(^)补充：
  *     2^3: 2的二进制是10, 3的二进制是11, 
  *             上下运算，相同为0，不同为1
  *         10
  *         11
  *        —————
  *         01
  *     即2^3 = 1
  * 异或运算符可以将两个数字比较，由于有一个数只出现了一次，其他数皆出现了两次，
  * 类似乘法法则无论先后顺序，最后相同的数都会异或成0，唯一出现的数与0异或就会得到其本身，该方法是最优解，直接通过比较的方式即可得到只出现一次的数字
  */
