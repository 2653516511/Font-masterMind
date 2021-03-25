// 验证手机号 11位的
let str = '13599853889'

let numberReg = /^1[3456789]\d{9}$/

let res = numberReg.test(str)
console.log(res);

