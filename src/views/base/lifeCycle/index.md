## 生命周期

### 生命周期图

![生命周期图](https://cn.vuejs.org/images/lifecycle.png)

### 生命周期详解

• 挂载
初始化事件和生命周期->beforeCreate-> 注入和校验->created->有el或者vm. $mounted时查找模板->有模板直接渲染render函数没有将el外部发Html作为模板变异->beforemounted->创建vm. $el并替换el->mounted->挂载完毕
• 更新
data被修改时，虚拟Dom重新渲染并应用更新，beforeUpdate->updated
• 销毁
调用vm. $destroy，beforeDestroy->解绑销毁子组件以及事件监听器->销毁完毕->destroyed
• 父子组件生命周期
创建初始化从外到内，渲染从内到外
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted

#### beforeCreate

在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

#### created

在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前尚不可用。

#### beforeMount

在挂载开始之前被调用：相关的 render 函数首次被调用。

该钩子在服务器端渲染期间不被调用

#### mounted

实例被挂载后调用，这时 el 被新创建的 vm. $el 替换了。 如果根实例挂载到了一个文档内的元素上，当mounted被调用时vm. $el也在文档内。

注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm. $nextTick
mounted、updated不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用vm. $nextTick 替换掉mounted、updated

#### beforeUpdate

数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行

#### updated

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用 vm. $nextTick

#### beforeDestroy

实例销毁之前调用。在这一步，实例仍然完全可用。

该钩子在服务器端渲染期间不被调用。

#### destroyed

实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

该钩子在服务器端渲染期间不被调用。

#### activated

#### deactivated

### 父子生命周期

* 父beforeCreate
* 父created
* 父beforeMount
* 子beforeCreate
* 子created
* 子beforeMount
* 子mounted
* 父mounted
* 父beforeUpdate
* 子beforeUpdate
* 子updated
* 父updated
* 父beforeDestroy
* 子beforeDestroy
* 子destroyed
* 父destroyed

### 生命周期为什么不能使用箭头函数？

所有的生命周期钩子自动绑定 this 上下文到实例中，因此你可以访问数据，对属性和方法进行运算。这意味着你不能使用箭头函数来定义一个生命周期方法 (例如 created: () => this. fetchTodos())。这是因为箭头函数绑定了父上下文，因此 this 与你期待的 Vue 实例不同，this. fetchTodos 的行为未定义。

8\. ajax请求放在哪个生命周期

mounted，整个加载完成和dom渲染，之前的生命周期会使得逻辑更混乱
js是单线程，ajax异步获取数据

13. 什么时候使用beforeDestroy

• 解绑自定义事件 event. $off
• 清除定时器
• 解绑自定义DOM事件，window scroll等

异步渲染；data改变之后，DOM不会立刻渲染；$nextTick会在DOM渲染完成之后被触发，以获取最新的DOM
页面渲染时会讲data的修改做整合，多次data修改只会渲染一次。

• 创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el还没有。
• 载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data. message还未替换。在mounted阶段，vue实例挂载完成，data. message成功渲染。
• 更新前/后：当data变化时，会触发beforeUpdate和updated方法。
• 销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在
• beforecreate : 可以在这加个loading事件，在加载实例时触发
• created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用
• mounted : 挂载元素，获取到DOM节点
• updated : 如果对数据统一处理，在这里写上相应函数
• beforeDestroy : 可以做一个确认停止事件的确认框

• nextTick : 更新数据后立即操作dom
Vue在观察到数据变化时并不是直接更新DOM，而是开启一个队列，并缓冲在同一个事件循环中发生的所以数据改变。在缓冲时会去除重复数据，从而避免不必要的计算和DOM操作。然后，在下一个事件循环tick中，Vue刷新队列并执行实际（已去重的）工作。所以如果你用一个for循环来动态改变数据100次，其实它只会应用最后一次改变，如果没有这种机制，DOM就要重绘100次，这固然是一个很大的开销。

Vue会根据当前浏览器环境优先使用原生的Promise. then和MutationObserver，如果都不支持，就会采用setTimeout代替。
知道了Vue异步更新DOM的原理，上面示例的报错也就不难理解了。事实上，在执行this. showDiv = true时，div仍然还是没有被创建出来，直到下一个vue事件循环时，才开始创建。$nextTick就是用来知道什么时候DOM更新完成的，所以上面的示例代码需要修改为：

<table><thead><tr><th>生命周期钩子函数（11个）</th><th style="text-align: center; ">类型</th><th>详细</th></tr></thead><tbody><tr><td>beforeCreate</td><td style="text-align: center; ">Function</td><td>在<code>实例初始化之后</code>，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。</td></tr><tr><td>created</td><td style="text-align: center; ">Function</td><td>在<code>实例创建完成后</code>被立即调用。在这一步，实例已完成以下的配置：<code>数据观测 (data observer)</code>， <code>属性和方法的运算</code>，<code>watch/event 事件回调</code>。然而，挂载阶段还没开始，$el 属性目前不可见。</td></tr><tr><td>beforeMount</td><td style="text-align: center; ">Function</td><td>在<code>挂载开始之前</code>被调用：相关的 render 函数首次被调用。</td></tr><tr><td>mounted</td><td style="text-align: center; ">Function</td><td><code>el</code> 被新创建的 <code>vm. $el</code> 替换，并<code>挂载到实例上去之后</code>调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm. $el 也在文档内。</td></tr><tr><td>beforeUpdate</td><td style="text-align: center; ">Function</td><td><code>数据更新时调用</code>，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。<strong>该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。</strong></td></tr><tr><td>updated</td><td style="text-align: center; ">Function</td><td>由于数据更改导致的<code>虚拟 DOM 重新渲染和打补丁</code>，在这<code>之后</code>会<code>调用</code>该钩子。</td></tr><tr><td>activated</td><td style="text-align: center; ">Function</td><td><code>keep-alive 组件激活时调用</code>。<strong>该钩子在服务器端渲染期间不被调用。</strong></td></tr><tr><td>deactivated</td><td style="text-align: center; ">Function</td><td><code>keep-alive 组件停用时调用</code>。<strong>该钩子在服务器端渲染期间不被调用。</strong></td></tr><tr><td>beforeDestroy</td><td style="text-align: center; ">Function</td><td>实例销毁之前调用。在这一步，实例仍然完全可用。<strong>该钩子在服务器端渲染期间不被调用。</strong></td></tr><tr><td>destroyed</td><td style="text-align: center; ">Function</td><td>Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。<strong>该钩子在服务器端渲染期间不被调用。</strong></td></tr><tr><td>errorCaptured（2. 5. 0+ 新增）</td><td style="text-align: center; ">(err: Error, vm: Component, info: string) =&gt; ?boolean</td><td>当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。</td></tr></tbody></table>

## vue请求数据放在created好还是mounted里好

）mounted

　　如果把所有请求放在created里面的话, 请求过多会, 加载太慢会导致页面出现短暂的白屏情况, 一般上我写的话, 接口不复杂会放created里面, 接口多复杂的话会放在mounted里面. 

（2）mounted

　　created 是加载DOM, html之后 就马上执行, 比如初始化, 获取屏幕高度调整, 赋值等等, 而mounted就是执行包括js之后, 准备开始调用方法, 也就是说 类似传统开发那样, 先加载jquery 再调用插件
