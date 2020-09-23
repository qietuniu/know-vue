<template>
  <div>我的苹果有{{apple}}</div>
</template>

<script>
export default {
  data() {
    return {
      // apple:0
    }
  },
  computed: {
    apple() {
      return this.$store.state.demo.apple
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
