<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>

    <div>vue 的知识库整理</div>
    <div>该项目介绍</div>
    <div>学习资源整合
      xxxx
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
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
