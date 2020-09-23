## v-bind
### 

7. 插值，表达式；指令，动态属性；v-html

• 文本插值：{{}}
• js表达式：只能是表达式（比如三元），不能是js语句
• 动态属性：:id = "a"

. prop - 被用于绑定 DOM 属性 (property)。(差别在哪里？)
. camel - (2. 1. 0+) 将 kebab-case 特性名转换为 camelCase. (从 2. 1. 0 开始支持)
. sync (2. 3. 0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器。

传入一个对象的所有属性：

如果你想要将一个对象的所有属性都作为 prop 传入，你可以使用不带参数的 v-bind (取代 v-bind:prop-name)。

例如，对于一个给定的对象 post：

post: {
  id: 1, 
  title: 'My Journey with Vue'
}
下面的模板：

<blog-post v-bind="post"></blog-post>
等价于：

<blog-post
  v-bind:id="post. id"
  v-bind:title="post. title"

> </blog-post>
