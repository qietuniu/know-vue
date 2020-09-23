## 基础解答

### vue的模板下为什么有且只能有一个根元素

官方回应是取决于 `diff算法` 的编写方式，树状的数据结构需要通过根元素进行遍历对比。

``` html
<body>
    <div id="app"></div>
</body>
```

``` javascript
new Vue({
    el: '#app'
})
```

``` html
<template>
    <div />
</template>
```

多个根元素会导致难以指定vue实例的根节点，vue在body里定义一个元素，将其绑定处理成程序的入口。template下也一样，通过唯一的根节点，递归遍历整个vue树下的所有节点并处理为vdom，渲染成真正的HTML后直接替换原来位置。

[官方解答->](https://github.com/vuejs/vue/issues/7088)

### vue的优缺点

优点：

* 渐进式框架：轻量高效，简单易用。
* MVVM的架构：数据驱动视图，方便测试。
* 组件化：组件可复用，易维护，便于协同开发，提高开发效率。
* 虚拟DOM：减少浏览器资源损耗，渲染更快
* 前后端分离：服务器相对压力小。

  
缺点：

* 不支持IE9以下浏览器
* 首次加载耗时比较多。
* SEO问题，不利于百度，360等搜索引擎收录。

### Vue. use()

Vue. use() 是Vue的一个全局注册方法，主要用来注册插件，默认第一个参数是它接受的参数类型必须是Function或者是Object，如果是个对象，必须提供install方法，install方法默认第一个参数为 Vue, 其后的参数为注册时传入的arguments。如果是 Function 那么这个函数就被当做 install 方法。同一个插件 Vue. use 会自动阻止多次注册。除了在注册插件中使用 Vue. use 外，我们还可以在 directive注册、filters注册、components注册等条件下使用。
有的时候我们会遇到某些时候引入插件是并没有使用 Vue. use ，比如使用 axios 的时候，原因是 axios 没有 install 方法，所以也就不需要使用 Vue. use 来全局注册。
