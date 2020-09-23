<template>
  <div>
    <slot :height="height"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 160
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
