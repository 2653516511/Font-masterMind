/** 1. 创建一个事件总线并将其导出
 *  */ 
// event-bus.js
import Vue from 'vue'
export const EventBus = new Vue()

/** 2. 发布事件
 *  */
// A组件
<template>
    <div>
        <h1>A组件</h1>
        <button @click='emitEvent'>发布事件</button>
    </div>
</template>
<script>
    import { EventBus } from './event-bus.js'
    export default {
        name: 'componentA',
        methods: {
            emitEvent () {
                EventBus.$emit('eventBusData', {    //消息名为eventBusData
                    // 消息内容
                    eventBusData: 'eventBus传递数据'
                })
            }
        }
    }
</script>

/** 3. 订阅事件
 *  */
// B组件
<template>
    <div>
        <h1>B组件</h1>
        <button @click='receiveEvent'>接受事件</button>
    </div>
</template>
<script>
    import { EventBus } from './event-bus.js'
    export default {
        name: 'componentB',
        mounted() {
            EventBus.$on('eventBusData', data => {
                // 获取到emit的数据，即data
                console.log(data.eventBusData);
            })
        }
    }
</script>
