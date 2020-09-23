<template>
  <div class="dashboard-container">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="v-show & v-if" name="first">
        <div class="double-container">
          <div class="container-left">
            <showandif/>
          </div>
          <div class="container-right">
            <showandif-md/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="v-for" name="second">
        <div class="double-container">
          <div class="container-left">
            <vuefor/>
          </div>
          <div class="container-right">
            <vuefor-md/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="v-on" name="third">
        <div class="double-container">
          <div class="container-left">
            <vueon/>
          </div>
          <div class="container-right">
            <vueon-md/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="其他指令" name="fourth">
        <div class="double-container">
          <!-- <div class="container-left">
              <Slots/>
          </div>-->
          <div class="container-right">
            动态组件
            v-bind：动态地绑定一个或多个特性，或一个组件 prop 到表达式。
            v-on：用于监听指定元素的DOM事件，比如点击事件。绑定事件监听器。
            v-model：实现表单输入和应用状态之间的双向绑定
            v-pre：跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
            v-once：只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import testMd from './test.md'
import showandifMd from './showAndIf/index.md'
import showandif from './showAndIf'
import vueforMd from './vueFor/index.md'
import vuefor from './vueFor'
import vueonMd from './vueOn/index.md'
import vueOn from './vueOn'


export default {
  name: 'ValuePassing',
  components: {
    showandif,
    showandifMd,
    vuefor,
    vueforMd,
    vueonMd,
    vueOn
  },
  data() {
    return {
      activeName: 'third'
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
