## v-on
• event参数，自定义参数
fun(params, $event)
event. __proto__. constructor: 原生对象
event. target 原生对象
event. currentTarget 事件被注册到当前元素
• 事件修饰符，按键修饰符
不使用这些修饰符的时候，我们自己怎么做
• 观察事件被绑定在那里

 如果是在自己封装的组件或者是使用一些第三方的UI库时，会发现并不起效果，这时就需要用`·. native修饰符了，如：

//使用示例：
<el-input
  v-model="inputName"
  placeholder="搜索你的文件"
  @keyup. enter. native="searchFile(params)"
  >
</el-input>

v-on可以监听多个方法，但是同一种事件类型的方法只能监听一个

showEvent(event){

    //获取自定义data-id
	console.log(event.target.dataset.id)

   //阻止事件冒泡

    event.stopPropagation(); 
    //阻止默认
    event.preventDefault()

}
按键修饰符:

在监听键盘事件时，我们经常需要检查常见的键值。Vue允许为 v-on在监听键盘事件时添加按键修饰符：

<!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
<input v-on:keyup. 13="submit">
记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：

<input v-on:keyup. enter="submit">
<!-- 缩写语法 -->
<input @keyup. enter="submit">
全部的按键别名：

. enter
. tab
. delete (捕获“删除”和“退格”键)
. esc
. space
. up
. down
. left
. right
可以通过全局 config. keyCodes 对象自定义按键修饰符别名：

// 可以使用 `v-on:keyup.f1` 
Vue. config. keyCodes. f1 = 112
系统修饰键：

2. 1. 0 新增

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

. ctrl
. alt
. shift
. meta
注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

例如：

<!-- Alt + C -->
<input @keyup. alt. 67="clear">

<!-- Ctrl + Click -->
<div @click. ctrl="doSomething">Do something</div>

请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup. ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup. 17。

. exact 修饰符

2. 5. 0 新增

. exact修饰符允许你控制由精确的系统修饰符组合触发的事件。

<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click. ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click. ctrl. exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click. exact="onClick">A</button>
鼠标按钮修饰符：

2. 2. 0 新增

. left
. right
. middle
这些修饰符会限制处理函数仅响应特定的鼠标按钮。
