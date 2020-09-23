<template>
  <div style="margin-bottom:10px">
    <h1>这里是苹果店铺</h1>
    <el-button @click="reduceApple">拿苹果</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted(){

  },
  methods: {
    reduceApple() {
      this.$emit('reduceApple')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
