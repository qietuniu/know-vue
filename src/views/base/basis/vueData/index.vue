<template>
  <div class="dashboard-container">
    <el-button @click="handleArr">❌改变数组</el-button>
    <el-button type="primary" @click="handleArr1">☑️改变数组</el-button>

    <el-button type="primary" @click="handleObject">❌改变对象</el-button>
    <el-button @click="handleObject1">☑️改变对象</el-button>

    <hr>
    <span>数组数值： {{arr[0]}}, 数组长度{{arr.length}}</span>
    <br>
    <span>对象数值： {{obj.name||''}}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      arr: ['a', 'b', 'c'],
      obj: {}
    }
  },
  methods: {
    handleArr() {
      this.arr[0] = 'a' + new Date().getTime()
      this.arr.length = 5
      // this.$forceUpdate()
    },
    handleArr1() {
      // 方法1
      // this.$set(this.arr, 0, 'a'+ new Date().getTime())
      // 方法2
      this.arr.splice(0, 1, 'a' + new Date().getTime())
      // 该方法改变长度只能减短不能加长
      this.arr.splice(1)
    },
    handleObject() {
      this.obj.name = 'qietuniu' + new Date().getTime()
    },
    handleObject1() {
      // 方法1
      // this.$set(this.obj, name, 'qietuniu'+ new Date().getTime())
      // 方法2
      // this.obj= Object.assign({}, this.obj, {
      //   name: 'qietuniu'+ new Date().getTime()
      // })
      // 方法3
      this.obj = { ...this.obj, name: 'qietuniu' + new Date().getTime() }
    }
  }
}
</script>

<style lang="scss" scoped>
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
