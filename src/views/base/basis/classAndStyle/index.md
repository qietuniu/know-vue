## class与style绑定

### class

在一个自定义组件上用到 class 属性的时候，这些类将被添加到根元素上面，这个元素上已经存在的类不会被覆盖。

1. 对象语法

`:class` 指令也可以与普通的 `class` 属性共存。
  

``` html
  <li class="bold" :class="{ blue: true }">class对象语法</li>
```

2. 数组语法

  

``` html
    <li :class="['bold', {'blue': isActive}]">class数组语法</li>
```

3. 三元运算语法

  

``` html
    <li :class="[true?'blue':'bold']">class三元运算语法</li>
```

### style

Vue会自动侦测需要添加浏览器引擎前缀的 CSS 属性，并添加相应的前缀，如 transform、flex等

1. 对象语法

  

``` javascript
    data() {
        return {
            isActive: true,
            activeColor: {
                color: '#08d'
            },
            activeFont: {
                fontSize: '18px',
                fontWeight: 'bold'
            }
        }
    }
```

  

``` html
  <li :style="activeColor">style数组语法</li>
```

2. 数组语法

  可以使用data属性也可以使用计算属性
  

``` html
    <li :style="[activeColor, activeFont]">style数组语法</li>
```

3. 三元运算语法

   
  

``` html
    <li :style="{color: isActive?'#08d':''}">style三元运算语法</li>
```
