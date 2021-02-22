// instanceof的实现。原理：原型链的向上查找
function MyInstanceof(left, right) {
    // 首先left必须是一个引用类型
    if(typeof left !== 'object' || left === null) return false
    while(left) {
        // 找到相同的原型对象
        if(left == right.prototype) return true
        // 一次在left的原型链上查找
        // left = left.prototype
        // getPrototypeOf是Object自带的方法，拿到参数的原型对象
        left = Object.getPrototypeOf(left)
    }
    // 找到终点，还没有找到
    return false
}
// 测试一下
console.log(MyInstanceof(22, Number));  //false
console.log(MyInstanceof(new Number(22), Number));  //true

// 基本数据类型
1 instanceof Number;         //false
'd' instanceof String;       //false

// 引用数据类型
[] instanceof Array;       //true
[] instanceof Object;      //true
new Date() instanceof Date;      //true
new Date() instanceof Object;    //true
null instanceof Object;      //false