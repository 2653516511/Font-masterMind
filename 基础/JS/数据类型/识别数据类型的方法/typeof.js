// 1. 对于基本数据类型，除了null，typeof都可以识别
typeof 2      //number
typeof 'string'    //string
typeof undefined    //undefined
typeof true     //boolean
typeof Symbol()     //symbol        node环境下运行报错，node还不支持symbol？？？

// 2. typeof将null识别为object
typeof null     //object
    /**为什么会识别成object呢？
     * 1. js在最初使用时，是在32位操作系统上使用的，为了性能高，使用低位存储类型，000开头的表示对象，而null表示全为0，所以识别为object
     * 2. 原型链的终端是object.prototype.__proto__ = null，所以null的类型判断为object
     */

// 3. 对于引用数据类型
typeof []   //object
typeof {}   //object
typeof Function   //function

console.log(typeof [] );