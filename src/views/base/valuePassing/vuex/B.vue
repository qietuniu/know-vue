<template>
  <div>
    <el-button @click="handleApple(true)">加苹果</el-button>
    <el-button @click="handleApple()">减苹果</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleApple(type) {
      this.$store.dispatch('CHANGE_APPLE', type)

      // this.$store.dispatch('ToggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
