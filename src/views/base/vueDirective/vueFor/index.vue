<template>
  <div class="dashboard-container">
    <div>错误</div>
    <br>
    <div v-for="item in data" v-if="item.name!='ct1'">{{item.name}}</div>
    <br>
    <div>正确</div>
    <br>
    <div v-for="item in data" :key="item.id">
      <template v-if="item.name!='ct1'">{{item.name}}</template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      data: [{
        id: 1,
        name: 'ct1'
      }, {
        id: 2,
        name: 'ct2'
      }, {
        id: 3,
        name: 'ct3'
      }, {
        id: 4,
        name: 'ct4'
      }, {
        id: 5,
        name: 'ct5'
      },],
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
