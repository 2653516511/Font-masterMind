/** $dispatch ----向上派发
 * this.$parent.$parent.$parent....
 */
Vue.Prototype.$dispatch = function $dispatch(eventName, data) {
    let parent = this.$parent
    while(parent) {
        parent.$emit(eventName, data)
        parent = parent.$parent
    }
}
