/**
 * 1. 首先，'a'是一个字符，基本数据类型，无原型、方法
 * 2. 其次，'a'可以使用String上的任何方法
 */

// 该语句在执行的时候，做了以下几件事：
var str = new Object('a')
str.toString()
str = null

/**
 * 1. 创建Object类实例。为什么不是String，而是Object呢？因为基本数据类型中的Symbol和BigInt，不能使用new，ES6规范不建议使用new创建基本类型的包装类
 * 2. 调用实例方法
 * 3. 执行完后销毁该实例
 * 
 * 这是一个 "基本包装类型" 的过程，基本包装类型即属于基本数据类型，有Number String Boolean
 *      参见 JavaScript高级程序设计（第三版）P118
 */
