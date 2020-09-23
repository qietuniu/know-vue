<template>
  <div class="dashboard-container">
    <div class="double-container">
      <div class="container-left">
        <child :show="show" @toggle="toggle"/>
      </div>
      <div class="container-right">
        <Md/>
      </div>
    </div>
  </div>
</template>

<script>
import child from './child'
import Md from './index.md'
export default {
  components: {
    child,
    Md
  },
  data() {
    return {
      show: true
    }
  },
  beforeCreate() {
    console.log('父beforeCreate')
  },
  created() {
    console.log('父created')
  },
  beforeMount() {
    console.log('父beforeMount')
  },
  mounted() {
    console.log('父mounted')
  },
  beforeUpdate() {
    console.log('父beforeUpdate')
  },
  updated() {
    console.log('父updated')
  },
  beforeDestroy() {
    console.log('父beforeDestroy')
  },
  destroyed() {
    console.log('父destroyed')
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
