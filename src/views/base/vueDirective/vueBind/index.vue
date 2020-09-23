<template>
  <div class="dashboard-container">
    <el-button v-show="show" @click="show = !show">v-show切换1</el-button>
    <el-button v-show="!show" @click="show = !show">v-show切换2</el-button>
    <el-button v-if="show1" @click="show1 = !show1">v-if切换1</el-button>
    <el-button v-else @click="show1 = !show1">v-if切换2</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      show: true,
      show1: true
    }
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
