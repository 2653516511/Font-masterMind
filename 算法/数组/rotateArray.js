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
    const len = arr.length      //数组的维度
    for(let i = 0; i < len; i++) {
        for(let j = i; j < len - i - 1; ++j) {
            const temArr = [
                arr[i][j], arr[i][len - i - 1],
                arr[]
            ]
        }
    }

    // 返回值 arr
}
