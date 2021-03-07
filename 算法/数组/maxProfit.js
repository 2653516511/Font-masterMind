/**
 * 买卖股票的最佳时机
 * 输入: [7,1,5,3,6,4]
    输出: 7
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

 * 输入: [1,2,3,4,5]
    输出: 4
    解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 * @param {array} arr 
 */
const maxProfit = (arr = []) => {
    // 边界条件
    if(arr.length <= 1) {
        return 0
    }

    // 主逻辑
        // 1. 给定两个指针，从后向前 判断是否是递减的，满足则其中一个指针继续左移，否则计算差值，另一个指针换位置
    const len = arr.length
    let pro = len - 2, fix = len - 1
    let count = 0
    while(pro >= 0) {
        if(arr[pro] > arr[pro + 1]) {
            count += arr[fix] - arr[pro + 1]
            fix = pro
        }
        pro--
    }
    count += arr[fix] - arr[pro + 1]
    return count

    // 返回值 number
} 
// const arr = [1,2,3,4,5]
// const arr = [7,1,5,3,6,4]
const arr = [7,6,4,3,1]
console.log(maxProfit(arr));
 