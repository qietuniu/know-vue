##插槽slot

在 2. 6. 0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute

 v-slot只有在 只能添加在 <template> 上 (只有一种例外情况)

https://cn.vuejs.org/v2/api/#v-slot
https://cn.vuejs.org/v2/guide/components-slots.html

### 使用

定义一个vue对象作为eventBus，让其代为订阅发布事件，AB页面通过EventBus文件，分别调用Bus事件触发和监听来实现通信和参数传递。

#### 常用

* EventBus

  

``` javascript
import Vue from 'vue'
export const EventBus = new Vue()
```

* 发送消息

  
`EventBus.$emit(channel: string, callback(payload1,…))` 

  

``` 
  // A页面
  
  <el-button @click="sendMsg">发送消息给B</el-button>

  import { EventBus } from "./event-bus.js"

  sendMsg() {
    EventBus.$emit('sendMsg','我是来自A的消息')
  }

  ```

 

* 监听接收消息

`EventBus.$on(channel: string, callback(payload1,…))` 

  

``` 
  // B页面
  
  mounted(){
    EventBus.$on('sendMsg', msg => {
      this.msg = msg
    })
  },

  ```

#### 全局

* 创建全部EventBus

  

``` 
    // main.js

    Vue.prototype.$bus = new Vue()

  ```

  发布订阅模式相当于
  

``` 
  var EventBus = new Vue();
  
  Object.defineProperties(Vue.prototype, {
    $bus: {
      get: function () {
        return EventBus
      }
    }
  })

  ```

* 使用

  
  

``` 
  this.$bus.$emit('name', {});
  
  this.$bus.$on('name',($event) => {})

  this.$bus.$off('name')

  ```

### 问题

* 多次触发

  B页面接收事件的组件没挂载之前仍会接受 $emit，在排队等待dom挂载后集中接收之前发出的全部事件，导致多次触发。
  处理方法：在生命周期的beforeDestroy中，将事件销毁。
  

``` 
  beforeDestroy () {
    EventBus.$off('sendMsg')
  }
  ```

  https://github.com/vuejs/vue/issues/3399
  

* 路由跳转情况下未生效

  
  vue-router切换的时候，会先加载新的组件，当新的组件渲染好但是还没mount的时候，销毁旧组件，然后再挂载新组件，也就是说当B页面的生命周期进行到beforeMount的时候，下一步走到的就是A页面的beforeDestory或者destroyed方法里面。

  Dom渲染完毕后再处理回调
  

``` 
  this.$nextTick(()=> {

  })
  ```

  

* 复杂情况难维护

`eventbus` 在复杂情况下使用不太方便，若使用不慎易造成难以维护的灾难，需要更完善的Vuex作为状态管理中心，将通知的概念上升到共享状态层次。

https://blog.csdn.net/i168wintop/article/details/95107935
