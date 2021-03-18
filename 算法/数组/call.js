/**
 * fn.call(_this, 2,3,2)
 * @param {*} ctx 
 */
function myCall(ctx) {
    // 保存ctx
    ctx = ctx ? Object(ctx) : window

    ctx.origin = this
    let arr = []
    for(let i = 0; i < arguments.length; ++i) {
        arr.push('arguments[' + i + ']')
    }
    let res = eval('ctx.origin(' + arr + ')')

    delete ctx.origin
    return res
    
}
