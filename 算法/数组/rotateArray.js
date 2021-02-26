/**
 * 旋转图像
 * 给定一个 n × n 的二维矩阵表示一个图像，将图像顺时针旋转 90 度。
 * 必须在原地旋转图像，需要直接修改输入的二维矩阵，不要使用另一个矩阵来旋转图像。
 * 给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 * @param {array} arr 
 */
const rotateArray = (arr) => {
    // 边界条件
    if(arr.length === 0) {
        return arr
    }

    // 主逻辑
        // 1. 利用旋转的四个节点进行交换
    // const len = arr.length      //数组的维度
    // for(let i = 0; i < Math.floor(len / 2); i++) {
    //     for(let j = 0; j < Math.floor((len + 1) / 2); ++j) {
    //         const temArr = [
    //             arr[i][j], arr[len - j - 1][i],
    //             arr[len - i - 1][len - j - 1],
    //             arr[j][len - i - 1]
    //         ]
    //         arr[i][j] = temArr[1]
    //         arr[len - j - 1][i] = temArr[2]
    //         arr[len - i - 1][len - j - 1] = temArr[3]
    //         arr[j][len - i - 1] = temArr[0]
    //     }
    // }
    // return arr

        // 2. 直接第一行成为最后一列
    const n = arr.length, m = arr[0].length
    let res = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for(let i = 0; i < n; ++i){
        for(let j = 0; j < m; ++j) {
            // console.log(i, j, arr[i][j], res[j][n - i - 1]);
            res[j][n - i - 1] = arr[i][j]
        }
    }
    return res

    // 返回值 arr
}
let arr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotateArray(arr));
