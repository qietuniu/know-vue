<template>
  <div>
    <A>个人信息</A>
    <hr>
    <B>
      <template v-slot:default>切图妞</template>
      <template v-slot:age>18</template>
    </B>
    <hr>
    <C>
      <template v-slot:default="ctx">
        高度{{ctx.height}}
        <br>(该数据是C组件的数据)
      </template>
    </C>
    <el-button @click="showNotice">弹窗</el-button>
  </div>
</template>

<script>
import A from './A'
import B from './B'
import C from './C'

import Notice from "@/components/HandWritting/Notice";
export default {
  components: {
    A,
    B,
    C,
    Notice
  },
  data() {
    return {
      height: 180
    }
  },
  methods: {
    showNotice() {
      debugger
      const notice = this.$create(Notice, {
        title: '标题',
        msg: '校验失败!',
        duration: 1000
      });
      notice.handleShow();
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
