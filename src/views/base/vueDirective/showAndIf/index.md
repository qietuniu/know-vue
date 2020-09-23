## v-show VS v-if

### 特征

1. 作用：v-if和v-show用来控制元素的渲染。
2. 编译过程：v-show 通过调整 DOM 元素的dispaly属性的元素来控制显隐，始终会被渲染并保留在 DOM 中。v-if 是惰性的，根据判断条件来动态地渲染元素，在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
3. 使用搭配：v-show 不支持 <template> 元素，也不支持 v-else/v-elseif,而v-if支持。
4. 应用场景：v-if在需要时加载可以减轻服务器的压力,但有更高的切换开销；v-show只编译一次可以使客户端操作更加流畅，但有更高的初始渲染开销。频繁切换但场景选择v-show；在运行时条件很少改变或者有安全需求但场景选择v-if。

### 没有在-v-if-v-else-if-v-else-中使用-key-谨慎使用

https://cn.vuejs.org/v2/style-guide/#%E6%B2%A1%E6%9C%89%E5%9C%A8-v-if-v-else-if-v-else-%E4%B8%AD%E4%BD%BF%E7%94%A8-key-%E8%B0%A8%E6%85%8E%E4%BD%BF%E7%94%A8

<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>

<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
那么在上面的代码中切换loginTypeloginType 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，</span>不会被替换掉，仅仅是替换了它的 placeholder`。

这样也不总是符合实际需求，所以Vue为你提供了一种方式来表达这两个元素是完全独立的，不要复用它们。只需添加一个具有唯一值的 key 属性即可：

<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>

<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
现在，每次切换时，输入框都将被重新渲染。
