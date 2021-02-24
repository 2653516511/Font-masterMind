/** $broadcast ---- 向下广播
 * this.$children.$children.$children....
 */
Vue.prototype.$broadcast = function $broadcast(eventName, data) {
    const broadcast = function() {
        this.$children.forEach((child) => {
            child.$emit(eventName, data)
            if(child.$children) {
                $broadcast.call(child, eventName, data)
            }
        })
        broadcast.call(this, eventName, data)
    }
}

