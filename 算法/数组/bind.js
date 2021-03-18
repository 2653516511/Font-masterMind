
const bind = function(ctx) {
    ctx = ctx ? Object(ctx) : window
    ctx.origin = this
    // get the first arguments
    let args = Array.prototype.slice.call(arguments, 1)

    let _protoFn = new function() {}
    _protoFn.prototype = this.prototype

    let res = function() {
        let newArgs = [].slice.call(arguments)
        return ctx.origin.apply(this instanceof res ? this : res, args.concat(newArgs))
    }

    res.prototype = new _protoFn()

    delete ctx.origin
    return res

}
