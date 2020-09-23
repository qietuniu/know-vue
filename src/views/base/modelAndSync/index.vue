<template>
  <div class="dashboard-container">
    <div class="double-container">
      <div class="container-left">
        <A/>
      </div>
      <div class="container-right">
        <Md/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Md from './index.md'
import A from './A'
import B from './B'

export default {
  name: 'Dashboard',
  components: {
    Md,
    A,
    B
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
