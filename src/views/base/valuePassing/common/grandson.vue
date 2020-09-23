<template>
  <div>
    <h2>这里是第三代</h2>
    <h3>第一代传过来的信息是：{{this.$attrs.info}}</h3>
    <el-button @click="getName">名字传给第一代</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    getName() {
      this.$emit('getName', '切图妞')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
