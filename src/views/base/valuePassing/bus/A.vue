<template>
  <div>
    <el-button @click="sendMsg">发送消息给B</el-button>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js"
export default {
  data() {
    return {}
  },
  methods: {
    sendMsg() {
      EventBus.$emit('sendMsg', '我是来自A的消息')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
