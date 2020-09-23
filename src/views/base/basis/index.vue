<template>
  <div class="dashboard-container">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="基础解答" name="0">
        <base-md/>
      </el-tab-pane>
      <el-tab-pane label="data" name="1">
        <div class="double-container">
          <div class="container-left">
            <vuedata/>
          </div>
          <div class="container-right">
            <vuedata-md/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="name" name="2">
        <div class="double-container">
          <div class="container-left">
            <vuename/>
          </div>
          <div class="container-right">
            <vuename-md/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="props" name="3">
        <div class="double-container">
          <div class="container-left">
            <vueprops/>
          </div>
          <div class="container-right">
            <vueprops-md/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="class与style绑定" name="4">
        <div class="double-container">
          <div class="container-left">
            <classandstyle/>
          </div>
          <div class="container-right">
            <classandstyle-md/>
          </div>
        </div>
      </el-tab-pane>
      <!-- <el-tab-pane label="其他指令" name="4">
        <div class="double-container">
          <div class="container-right">
            动态组件
            v-bind：动态地绑定一个或多个特性，或一个组件 prop 到表达式。
            v-on：用于监听指定元素的DOM事件，比如点击事件。绑定事件监听器。
            v-model：实现表单输入和应用状态之间的双向绑定
            v-pre：跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
            v-once：只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
          </div>
        </div>
      </el-tab-pane>-->
    </el-tabs>
  </div>
</template>

<script>
// import testMd from './test.md'
import BaseMd from './vueBase/index.md'
import vuedataMd from './vueData/index.md'
import vuedata from './vueData'
import vuenameMd from './vueName/index.md'
import vuename from './vueName'
import vuepropsMd from './vueProps/index.md'
import vueprops from './vueProps'
import classandstyleMd from './classAndStyle/index.md'
import classandstyle from './classAndStyle'


export default {
  name: 'ValuePassing',
  components: {
    BaseMd,
    vuedata,
    vuedataMd,
    vuename,
    vuenameMd,
    vuepropsMd,
    vueprops,
    classandstyleMd,
    classandstyle
  },
  data() {
    return {
      activeName: '0'
    }
  },
  mounted() {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
  }
}
</script>

<style lang="scss">
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
