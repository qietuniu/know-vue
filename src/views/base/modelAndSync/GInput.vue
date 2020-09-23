<template>
  <div>
    <input type="checkbox" :checked="value" @change="handleInput">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.checked)
    }
  }
}

// Vue.component('my-input', {
//                 template: '<div><input type="text" ref="input" :value="value" @input="doThis"/></div>',
//                 props: {
//                     value: String
//                 },
//                 methods: {
//                     doThis() {
//                         this.$emit('input', this.$refs.input.value);
//                     }
//                 }
//             });
</script>

<style lang="scss" scoped>
</style>
