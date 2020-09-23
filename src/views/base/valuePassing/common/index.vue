<template>
  <div>
    <common-c ref="commonC" :num="appleNum" @addNumber="addNumber"/>
    <el-button @click="handleToggle">显隐操作（ref）</el-button>
    <hr>
    <common-c1 @reduceApple="reduceApple"/>
    <hr>
    <common-c2 :info="info" @getName="getName"/>
    <h2>这里是第一代</h2>
    <h3>第三代的名字是：{{name||'未知'}}</h3>
  </div>
</template>

<script>
import commonC from './children'
import commonC1 from './children1'
import commonC2 from './children2'
export default {
  components: {
    commonC,
    commonC1,
    commonC2
  },
  data() {
    return {
      appleNum: 1,
      info: '我是第一代的信息',
      name: ''
    }
  },
  methods: {
    handleToggle() {
      this.$refs.commonC.handleToggle()
    },
    addNumber() {
      // debugger
      this.appleNum++
    },
    reduceApple() {
      if (this.appleNum < 1) return this.$message('苹果没库存了');
      this.appleNum--
    },
    getName(name) {
      this.name = name
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
