## props

### props的写法与属性

HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名。

* `type` 

  可以是下列原生构造函数中的一种： `String` 、 `Number` 、 `Boolean` 、 `Array` 、 `Object` 、 `Date` 、 `Function` 、 `Symbol` 、任何自定义构造函数、或上述内容组成的数组。会检查一个 prop 是否是给定的类型，否则抛出警告。

* `default` : `any` 

  为该 prop 指定一个默认值。如果该 `prop` 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。

* `required` : `Boolean` 

  定义该 prop 是否是必填项。在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出。

> truthy（真值）指的是在布尔值上下文中，转换后的值为真的值

* `validator` : `Function` 

  自定义验证函数会将该 `prop` 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出。你可以在这里查阅更多 prop 验证的相关信息。

``` javascript
  Vue.component('my-component', {
      props: {
          // 基础的类型检查 ( `null` 和 `undefined` 会通过任何类型验证)
          propA: Number,
          // 多个可能的类型
          propB: [String, Number],
          // 必填的字符串
          propC: {
              type: String,
              required: true
          },
          // 带有默认值的数字
          propD: {
              type: Number,
              default: 100
          },
          // 带有默认值的对象
          propE: {
              type: Object,
              // 对象或数组默认值必须从一个工厂函数获取
              default: function() {
                  return {
                      message: 'hello'
                  }
              }
          },
          // 自定义验证函数
          propF: {
              validator: function(value) {
                  // 这个值必须匹配下列字符串中的一个
                  return ['success', 'warning', 'danger'].indexOf(value) !== -1
              }
          }
      }
  })
```

### props验证

基础的类型检查 ( `null` 和 `undefined` 会通过任何类型验证), type 可以是下列原生构造函数中的一个：

* `String` 
* `Number` 
* `Boolean` 
* `Array` 
* `Object` 
* `Date` 
* `Function` 
* `Symbol` 

  
额外的，type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认。例如，给定下列现成的构造函数来验证 author prop 的值是否是通过 new Person 创建的。：

``` javascript
props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    list: Object,
    callback: Function,
    contactsPromise: Promise, // or any other constructor
    age: {
        type: Number,
        default: 0,
        required: true,
        validator: function(value) {
            return value >= 0
        }
    },
    author: Person
}

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}
```

### 单向数据流

所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

这里有两种常见的试图改变一个 prop 的情形：

#### prop 用来传递一个初始值

子组件希望将prop作为本地数据来使用。在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值：

``` javascript
  props: ['initialCounter'],
      data: function() {
          return {
              counter: this.initialCounter
          }
      }
```

#### prop 以一种原始的值传入且需转换

在这种情况下，最好使用这个 prop 的值来定义一个计算属性：

``` javascript
  props: ['txt'],
      computed: {
          normalizedTxt: function() {
              return this.txt.trim().toLowerCase()
          }
      }
```
