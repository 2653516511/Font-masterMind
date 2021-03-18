
const myApply = function(ctx, args) {
    ctx = ctx ? Object(ctx) : window
    ctx.origin = this
    // 判断args的类型
    if(typeof(args) !== 'object') {
        throw TypeError('expected an Object')
    }
    if(Array.isArray(args)) {
        args.length = 0
    }

    let res = eval('ctx.origin(' + args + ')')
    delete ctx.origin
    return res
}
