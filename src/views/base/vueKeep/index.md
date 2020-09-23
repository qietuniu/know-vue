## keep-alive与动态组件

12. 何时使用keep-alive

• 缓存组件不需要重复渲染
• 多个静态tab页面的切换
• 优化性能

缓存组件。频繁切换不需要重复渲染
生命周期
vue常见性能优化

keep-alive：主要用于保留组件状态或避免重新渲染。

比如： 有一个列表页面和一个 详情页面，那么用户就会经常执行打开详情=>返回列表=>打开详情这样的话 列表 和 详情 都是一个频率很高的页面，那么就可以对列表组件使用<keep-alive></keep-alive>进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染。

include: 字符串或正则表达式。只有匹配的组件会被缓存。

exclude：字符串或正则表达式。任何匹配的组件都不会被缓存。

2、用法：

包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition>相似，<keep-alive>是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

当组件在<keep-alive> 内被切换，在 2. 2. 0 及其更高版本中，activated 和 deactivated生命周期 将会在 树内的所有嵌套组件中触发。

<!-- 基本 -->
<keep-alive>
  <component :is="view"></component>
</keep-alive>

<!-- 多个条件判断的子组件 -->
<keep-alive>
  <comp-a v-if="a > 1"></comp-a>
  <comp-b v-else></comp-b>
</keep-alive>

<!-- 和 `<transition>` 一起使用 -->
<transition>
  <keep-alive>

    <component :is="view"></component>

  </keep-alive>
</transition>
注意：<keep-alive>是用在其一个直属的子组件被开关的情形。如果你在其中有 v-for 则不会工作。如果有上述的多个条件性的子元素，<keep-alive> 要求同时只有一个子元素被渲染。

3、include 和 exclude 属性的使用：

2\. 1\. 0 新增

include 和 exclude 属性允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示：

<!-- 逗号分隔字符串 -->
<keep-alive include="a, b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind` ) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind` ) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>
匹配首先检查组件自身的 name 选项，如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配。

不会在函数式组件中正常工作，因为它们没有缓存实例。
