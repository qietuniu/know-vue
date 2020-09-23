<template>
  <div>
    我的名字：
    <slot></slot>
    <hr>我的年龄：
    <slot name="age"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
