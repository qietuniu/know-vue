## v-for

### v-for为什么使用key

https://cn.vuejs.org/v2/style-guide/#%E4%B8%BA-v-for-%E8%AE%BE%E7%BD%AE%E9%94%AE%E5%80%BC-%E5%BF%85%E8%A6%81

* 必须使用key，且不能是index和random
* diff算法中使用tag和key来判断是否是sameNode
* 减少渲染次数，提升渲染性能

### v-for和v-if哪个优先级高，为什么不建议一起使用

https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7-%E5%BF%85%E8%A6%81
当它们处于同一节点，v-for的优先级比v-if更高，这意味着 v-if将分别重复运行于每个 v-for循环中。当你想为仅有的一些项渲染节点时，这种优先级的机制会十分有用，
而如果你的目的是有条件地跳过循环的执行，那么可以将 v-if 置于外层元素 (或 <template>)上

  

``` 
 <div v-for="item in data" v-if="item.name!='ct1'">
    {{item.name}}
  </div>
  ```

    

``` 
  <div v-for="item in data" :key="item.id">
    <template v-if="item.name!='ct1'">{{item.name}}</template>
  </div>
  ```
