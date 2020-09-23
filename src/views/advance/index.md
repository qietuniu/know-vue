## 原理

### vue.js的两个核心是什么？

1、数据驱动，也叫双向数据绑定。

Vue.js数据观测原理在技术实现上，利用的是ES5Object.defineProperty和存储器属性: getter和setter（所以只兼容IE9及以上版本），可称为基于依赖收集的观测机制。核心是VM，即ViewModel，保证数据和视图的一致性。

2、组件系统。

.vue组件的核心选项:

1、模板（template）：模板声明了数据和最终展现给用户的DOM之间的映射关系。
2、初始数据（data）：一个组件的初始数据状态。对于可复用的组件来说，这通常是私有的状态。
3、接受的外部参数(props)：组件之间通过参数来进行数据的传递和共享。
4、方法（methods）：对数据的改动操作一般都在组件的方法内进行。
5、生命周期钩子函数（lifecycle hooks）：一个组件会触发多个生命周期钩子函数，最新2.0版本对于生命周期函数名称改动很大。
6、私有资源（assets）：Vue.js当中将用户自定义的指令、过滤器、组件等统称为资源。一个组件可以声明自己的私有资源。私有资源只有该组件和它的子组件可以调用。
等等。


## 响应式原理
https://cn.vuejs.org/v2/guide/reactivity.html
监听data变化
组件渲染和更新

组件data的数据一旦变化，立刻触发视图的更新。数据驱动视图的第一步
• Object.defineProperty
• 如何实现响应式
监听对象，监听数组
复杂对象，深度监听
http-server -p 8002

## 描述组件渲染和更新的过程
• 初次渲染
• 解析模板为render函数（开发环境已完成vue-loader，自己写时可能在浏览器中）
• 触发响应式，监听data属性getter，setter
• 执行render函数，生成vnode，patch（elem，vnode）。执行render函数时会触发getter
• 更新过程
• 修改data，触发setter（在getter被监听）
• 重新执行render函数，生成newVnode
• patch(vnode,newVnode)

## vnode描述DOM结构

## 监听data变化的核心API

Object.defineProperty
深度监听
监听数组
缺点

defineProperty缺点：
• 深度监听需要一次性递归
• 无法监听新增属性/删除属性（vue.set,Vue,delete）
• 无法原生监听数组
proxy缺点：
存在浏览器兼容问题，不能polyfill

```
const proxyData = new Proxy(data,{
	// 返回结果
	get(target, key, receiver) {
		const result = Reflect.get(target, key, receiver)
		return result
	},
	// 设置成功
	get(target, key, val, receiver) {
		const result = Reflect.set(target, key, val, receiver)
		return result
	},
	// 是否删除成功
	deleteProperty(target, key) {
		const result = Reflect.deleteProperty(target, key, receiver)
		return result
	},
})
```

## vue怎么监听数组变化
Object.defineProperty无法监听数组变化
重新定义原型，重写push，pop等方法实现监听
proxy可以原生监听

## diff算法过程
22. 复杂度
O（n）简化版，在三个方面做出来调整

27. vdom，diff算法
patch(elem,vnode)
patch(vnode,newVnode)
snabbdom
dom操作耗费性能，h，vnode，patch，diff，key。
存在价值
• js模拟dom结构
• diff的key
• 两个js对象也可以做diff，https://github.com/cujojs/jiff
• 两棵树做diff：
• 只比较同一层级，不跨级
• tag不相同则删除重建，不再深度比较
• tag和key，两者相同则认为是相同节点不再深度比较
• patchVnode，addVnodes，removeVnodes，updateChildren（key），


## 为什么是异步渲染
合并data修改，提高渲染效率
## 性能优化
• 合理使用v-show，v-if
• 合理使用computed
• v-for时加key，避免和v-if一起使用
• 自定义事件和DOM事件及时销毁
• 合理使用异步组件
• 可以使用keep-alive
• data层级不太太深，深度监听的时候一次性完成
• 使用vue-loader做模板编译
• webpack优化
• 通用优化

问题一：vue中对象更改检测的注意事项

由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：

var vm = new Vue({
  data: {
    a: 1
  }
})
// `vm.a` 现在是响应式的

vm.b = 2
// `vm.b` 不是响应式的

对于已经创建的实例，Vue 不能动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, key, value)方法向嵌套对象添加响应式属性。例如，对于：

var vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})
你可以添加一个新的 age 属性到嵌套的 userProfile对象：

Vue.set(vm.userProfile, 'age', 27)
你还可以使用 vm.$set实例方法，它只是全局Vue.set 的别名：

vm.$set(vm.userProfile, 'age', 27)
有时你可能需要为已有对象赋予多个新属性，比如使用 Object.assign()或 _.extend()。在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性，不要像这样：

Object.assign(vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
应该这样做：

vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})

## 组件化和MVVM

主要目的是分离视图和模型
降低代码耦合，提高视图或者逻辑的重用性
提高了模块的可测试性

传统组件只是静态渲染，更新依赖于操作DOM
数据驱动视图-mvvm
数据驱动视图 - react setState
view 通过vm的dom监听改变model；model通过vm的指令机制改变视图
view=template
model=data
vm = 两边的方法指令

## 28. 模板渲染/编译(组件渲染和更新)
指令，插值，表达式
• with语法
• 将{}内自由变量当作obj的属性来查找
• 找不到匹配的属性会报错
• 打破了作用域规则，易读性变差
const obj= {a:1}
with(obj) {
    console.log(a)
    console.log(b) // 报错
}
• vue template complier 将模板编译撑render函数
• h=createElement函数
• 编译为render函数，执行render函数返回vnode
• 基于vnode再执行patch和diff
• 使用webpack vue-loader，会在开发环境下编译模板
• 执行render函数生产vnode


## 29. 组件渲染过程
• 初次渲染
• 解析模板为render函数（开发环境已完成vue-loader，自己写时可能在浏览器中）
• 触发响应式，监听data属性getter，setter
• 执行render函数，生成vnode，patch（elem，vnode）。执行render函数时会触发getter
• 更新过程
• 修改data，触发setter（在getter被监听）
• 重新执行render函数，生成newVnode
• patch(vnode,newVnode)


## 
## 
## 
## 
