## name

### 命名规范

建议name首字母为大写

* 当 `name:'List'` 时，组件可书写成 `<List />` 或者 `<list />` 

* 当 `name:'list'` 时，组件只能书写成 `<list />` 

组件使用时命名：

* kebab-case：字母全小写且必须包含一个连字符

`name:'ListTree'` => `<list-tree />` 
  

* PascalCase：每一个单字的首字母都采用大写字母

`name:'ListTree'` => `<ListTree />` 

> 直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的

### 作用

1、 组件模板递归调用自身

``` html
    <ul>
        <li v-for="(item, index) of list" :key="index">
            {{item.title}}
            <div v-if="item.children">
                <List :list="item.children" />
            </div>
        </li>
    </ul>
```

``` javascript
    name: 'List',
        props: {
            list: {
                type: Array,
                default: function() {
                    return [{
                            title: '1',
                            children: [{
                                    title: '1-1'
                                },
                                {
                                    title: '1-2'
                                },
                                {
                                    title: '1-3'
                                }
                            ]
                        },
                        {
                            title: '2',
                            children: [{
                                    title: '2-1',
                                    children: [{
                                            title: '2-1-1'
                                        },
                                        {
                                            title: '2-1-2'
                                        },
                                        {
                                            title: '2-1-3'
                                        }
                                    ]
                                },
                                {
                                    title: '2-2'
                                },
                                {
                                    title: '2-3'
                                }
                            ]
                        }
                    ]
                }
            }
        }
```

2、 便于调试

vue-devtools中有名字的组件有更友好的警告信息，未命名组件将显示成 <AnonymousComponent>

3、 作为keep-alive 的 include 和 exclude 的参数

详情请见keep-alive
