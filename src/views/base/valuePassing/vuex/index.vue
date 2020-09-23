<template>
  <div>
    <A/>
    <hr>
    <B/>
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
      height: 180
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
