#常用传值

父子传值，兄弟传值，祖孙传值

### 父子传值

#### 父组件 => 子组件

* 属性props

  
  将父组件的数据通过props传给子组件。
  

``` 
  // parent

  <common-c :num="appleNum" />

  // child

  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  ```

* ref

  通过引用ref拿到子组件内部的数据或者方法

  

``` 
  // parent

  <common-c ref="commonC"  :num="appleNum" @addNumber="addNumber"/>

  this.$refs.commonC.handleToggle()

  ```

#### 子组件 => 父组件

使用$emit触发自定义事件

``` 
// parent

  <common-c @addNumber="addNumber"/>

// child

<el-button @click="addNumber">加苹果</el-button>

addNumber() {
  this.$emit('addNumber')
}

```

### 兄弟传值

常用方法是以父组件作为中转站，子组件1$emit给父组件，父组件$on给子组件2

``` 
// child1

reduceApple() {
  this.$emit('reduceApple')
}

// parent

<common-c1 @reduceApple="reduceApple"/> // child1
<common-c  :num="appleNum"/> // child2

reduceApple() {
  this.appleNum--
}

// child2

props: {
  num: {
    type: Number,
    default: 0
  }
}

```

### 祖孙传值

https://cn.vuejs.org/v2/api/#vm-attrs

`$attrs` 可以获取父作用域传入的值（不包括 `props` 中的）， `$listeners` 相当于父作用域的事件监听器，从而实现祖孙之间的数据通信。

``` 
// 第一代

<common-c2 :info="info" @getName="getName"/>

// 第二代

<Grandson  v-bind="$attrs" v-on="$listeners"/>

// 第三代

<h3>第一代传过来的信息是：{{this.$attrs.info}}</h3>
<el-button @click="getName">名字传给第一代</el-button>

getName() {
  this.$emit('getName','切图妞')
}

```

9. 将组件的所有props传递给子组件

`` `<child v-bind="$props" />` ``

利用v-if可在http请求返回后再显示。这样子组件可以返回的http请求数据。
