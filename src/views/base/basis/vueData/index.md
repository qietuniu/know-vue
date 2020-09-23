## data

### data 为什么是一个函数

`export default` 导出的是个类，注册组件其实并不产生新的组件类，但会产生一个可以用来实例化的新方式，使用组件才是真正创建一个组件实例。
每个组件进行实例化时执行data，当data为对象时每个组件data共享，导致数据可能被另外的组件修改，而data为方法时，data就会存在在闭包当中，每个实例的data属性是独立的，不会相互影响。这是因为js本身的特性带来的，跟vue本身设计无关。

错误：
使用原型链定义data，如果两个实例同时引用一个对象，那么当你修改其中一个属性的时候，另外一个实例也会跟着改。

``` javascript
var MyComponent = function() {}
MyComponent.prototype.data = {
    b: 1,
}
var component1 = new MyComponent()
var component2 = new MyComponent()
component1.data.b = 5
console.log(component2.data.b) // 5
```

正确：
形成闭包，数据不再互相影响

``` javascript
var MyComponent = function() {
    this.data = this.data()
}
MyComponent.prototype.data = function() {
    return {
        b: 1,
    }
}
var component1 = new MyComponent()
var component2 = new MyComponent()
component1.data.b = 5
console.log(component2.data.b) // 1
```

### 修改数据未更新

vue监听不到深层次的对象属性或者数组值的改变，除了通过数组的变异方法触发视图更新，还可以使用替换的方法去改变对象存储的地址而不是单单改变数值。

#### 数组

变异方法：

* `push()` 
* `pop()` 
* `shift()` 
* `unshift()` 
* `splice()` 
* `sort()` 
* `reverse()` 

替换数组：

* `filter()` 
* `concat()` 
* `slice()` 

``` javascript
  this.arr[0] = 'a' + new Date().getTime()
  this.arr.length = 5
```

1. `$set` 方法

   
  

``` javascript
    this.$set(this.arr, 0, 'a' + new Date().getTime())
```

2. 使用变异方法 `splice` 等

   
  

``` javascript
    this.$set(this.arr, 0, 'a' + new Date().getTime())
  // 该方法改变长度只能减短不能加长
    this.arr.splice(1)
  ```

3. `$forceUpdate` 强制更新（通用但暴力）迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

   
  

``` javascript
    this.arr[0] = 'a' + new Date().getTime()
    this.arr.length = 5
    this.$forceUpdate()
```

#### 对象

vue在进行初始化实例时进行数据双向绑定，使用 `Object.defineProperty()` 对属性遍历添加 `getter` / `setter` 方法，所以属性必须在 `data` 对象上存在时才能进行上述过程！
vue初始化实例后，再去给实例对象添加属性时并没有添加 `getter` 和 `setter` 的方法，所以改变属性值和添加属性值时只可以看到数据改变，页面数据并没有更新! 这时用 `$set` 属性就可以使页面数据的更新！

``` javascript
  this.obj.name = 'qietuniu' + new Date().getTime()
```

1. `$set` 方法

   
  

``` javascript
    this.$set(this.obj, name, 'qietuniu' + new Date().getTime())
```

2. `Object.assign` 

   
  

``` javascript
    this.obj = Object.assign({}, this.obj, {
        name: 'qietuniu' + new Date().getTime()
    })
```

3. `...` 扩展运算符

   
   

``` javascript
    this.obj = {
        ...this.obj,
        name: 'qietuniu' + new Date().getTime()
    }
```

4. `$forceUpdate` 强制更新

   
