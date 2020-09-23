<template>
  <div>
    <label for="name">{{name||'无'}}:</label>
    <input id="name" v-model="name">
    <br>
    <label for="name1">{{name1||'无'}}:</label>
    <input id="name1" :value="name1" @input="name1 = $event.target.value">
    <br>
    <input type="checkbox" v-model="sex">
    <br>
    <input type="checkbox" :checked="sex1" @change="sex1 = $event.target.checked">

    <hr>

    <g-input v-model="child"/>
  </div>
</template>

<script>
import GInput from './GInput'
export default {
  data() {
    return {
      name: '',
      name1: '',
      sex: false,
      sex1: false,
      child: true
    }
  },
  components: {
    GInput
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
