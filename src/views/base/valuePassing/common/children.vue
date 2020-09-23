<template>
  <div style="margin-bottom:10px">
    <h1>苹果仓库有{{num}}个苹果🍎</h1>
    <el-button v-show="show" @click="addNumber">加苹果</el-button>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    handleToggle() {
      this.show = !this.show
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    addNumber() {
      this.$emit('addNumber')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
