// v8中关于数组的源码
// src/objects/js-array.h

// The JSArray describes JavaScript Arrays
//  Such an array can be in one of two modes:
//    - fast, backing storage is a FixedArray and length <= elements.length();
//       Please note: push and pop can be used to grow and shrink the array.
//    - slow, backing storage is a HashTable with numbers as keys.
class JSArray: public JSObject {
    public:
    // [length]: The length property.
    DECL_ACCESSORS(length, Object)

    // Number of element slots to pre-allocate for an empty array.
    static const int kPreallocatedArrayElements = 4;
};

/**
 * 可以看出，js继承了JSObject，所以数组是对象的一个子，也是以k-v的方式存储。
 * 数组的存储方式有两种：
 *      fast：存储结构是FiredArray。线性方式，直接根据索引进行定位，新创建的数组就是快数组(FastElements)。使用push、pop等操作，length <= elements.length()
 *      slow：基于Hash表实现。存储在hash表中，无需大块的连续空间，节约内存，但是效率较慢。
 * 二者相互转变：
 *      快 -> 慢: 源码中
 *          插入的 index - 当前的capacity >= kMaxGap(1024) 时，也就是至少有了 1024 个断层，会转变为慢数组
 *          新容量 >= 3 * 扩容后的容量 * 2
 *      慢 -> 快:
 *  快数组以空间换时间，申请连续内存，调高效率；
 *  慢数组以时间换空间，无需连续空间，节省内存，但效率较低。
 */
