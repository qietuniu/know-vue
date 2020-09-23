## v-model

### model
v-model 是vue的一个语法糖，用于在表单控件或者在组件上创建双向绑定。双向绑定即修改model后界面view会自动更新，如果用户更新了view，model的数据也会自动更新

给组件添加 v-model 属性时，默认会把 value 作为组件的属性，然后把 'input' 值作为给组件绑定事件时的事件名

在一个组件中，引入一个自定义组件input. vue。然后需要在父组件中操作input的输入框内容。父组件(index. vue)的子组件实例上定义了v-model；input. vue组件中定义一个props，有一个value值，另外input标签的input事件绑定了一个事件名为input 的 $emit。

组件中有两个input，一个使用v-model，另一个就是双向数据绑定的实际原理，使用input标签的input事件做实时监听。
刚刚的示例是基于input标签实现的，那么如果是其他的表单标签呢：

v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。
v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

text 和 textarea 元素使用 value 属性和 input 事件；
checkbox 和 radio 使用 checked 属性和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。

####修饰符

v-model. lazy  #惰性事件，不自动更新（一般用于注册时输入完成时验证，可以提高一点点性能）
v-model. trim #去除左右两边的空格
v-model. number #将字符串自动转换成整行

#### 什么是v-model

v-model用于表单数据的双向绑定，其实它就是一个语法糖

v-model很好地体现了vue双向绑定的理念。
单向绑定非常简单，就是把Model绑定到View，当我们用JavaScript代码更新Model时，View就会自动更新。有单向绑定，就有双向绑定。
如果用户更新了View，Model的数据也自动被更新了，这种情况就是双向绑定。
什么情况下用户可以更新View呢？填写表单就是一个最直接的例子。当用户填写表单时，View的状态就被更新了，如果此时MVVM框架可以自动更新Model的状态，那就相当于我们把Model和View做了双向绑定。
双向数据绑定=单向数据绑定+UI事件监听

vue绑定事件

1. 通过指令 v-on：事件名=“函数名”绑定事件 eg:<button v-on:click="doThis"></button>
2. 通过语法 @事件名=“函数名”绑定事件 eg:<button @click. stop="doThis"></button>

####双向绑定原理

双向绑定的原理：通过Observer把数据劫持（Object. defineProperty()），加入到订阅器（Dep）, 订阅器收集订阅者（watch），视图通过编译（Compile）
解析指令（Directive）等一系列操作收集给订阅者，最后通过触发数据变化update通知所有的订阅者完成数据驱动。
直白的理解为：Object. defineProperty()重新定义了set和get方法，修改触发set方法赋值。获取触发get方法取值，并通过数据劫持发布信息。

6. 双向数据绑定V-model的实现原理

• input元素的value = this. name
• 绑定input事件:this. name = $event. target. value
• data更新触发re-render

语法糖
https://blog.csdn.net/WangYangsea/article/details/94474476
https://segmentfault.com/a/1190000018893494
https://www.jianshu.com/p/8e2b5e04a1f7

#sync
`update:my-prop-name` 
官网：
https://www.jianshu.com/p/d42c508ea9de
https://www.cnblogs.com/wuyuchao/p/9186790.html
sync修饰符类似于v-model，能用于修改传递到子组件到属性

textarea， checkbox，radio，select
修饰符lazy，number，trim

比如颜色选择器
自定义

``` 
<template>
    <input type="text"
         :value="text"
         @input="$emit('change', $event.target.value)"/>    
</template>
<script>
export default {
    model: {
    prop: 'text',
    event: 'change'
  },
  props: {
    text: String,
    default() {
        return ''
    }
  }
}
</script>
```
