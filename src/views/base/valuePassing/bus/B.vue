<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import {
  EventBus
} from "./event-bus.js"
export default {
  data() {
    return {
      msg: '暂无消息'
    }
  },
  mounted() {
    EventBus.$on('sendMsg', msg => {
      this.msg = msg
    })
  },
  beforeDestroy() {
    EventBus.$off('sendMsg')
  }
}
</script>

<style lang="scss" scoped>
</style>
