<template>
  <div>
    <A />
    <hr/>
    <B />
  </div>
</template>

<script>
import A from './A'
import B from './B'
export default {
  components: {
    A,
    B
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
      if(this.appleNum<1) return this.$message('苹果没库存了');
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
