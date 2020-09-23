<template>
  <div v-if="show" class="noticeWrapper">
    <h3>{{title}}</h3>
    {{msg}}
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      msg: {
        type: String,
        default: ""
      },
      duration: {
        type: Number,
        default: 1000
      }
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      handleShow() {
        this.show = true
        setTimeout(()=>{
          this.show = false
        },this.duration)
      }
    }
  }
</script>

<style lang="scss" scoped>
.noticeWrapper {
  position: fixed;
  top: 10px;
  width: 50%;
  left: 25%;
  background: #fff;
  border: 1px solid #eee;
}
</style>
