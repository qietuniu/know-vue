<template>
  <div>
    控制台查看=》
    <hr/>
    <el-button type="primary" @click="toggle">更改按钮</el-button><el-button  type="primary" @click="goHome">销毁按钮</el-button>
<hr/>
    <span v-show="show">更新示例</span>
  </div>

</template>

<script>

export default {
  props:{
    show:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {

    }
  },
  beforeCreate() {
    // console.log('子beforeCreate')
    console.log('子beforeCreate')
  },
  created() {
    console.log('子created')
  },
  beforeMount() {
    console.log('子beforeMount')
  },
  mounted() {
    console.log('子mounted')
  },
  beforeUpdate() {
    console.log('子beforeUpdate')
  },
  updated() {
    console.log('子updated')
  },
  beforeDestroy() {
    console.log('子beforeDestroy')
  },
  destroyed() {
    console.log('子destroyed')
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    },
    goHome() {
      this.$router.push({name:'Dashboard'})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
