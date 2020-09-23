<template>
  <div>
    <input :value.sync="name">
    <input :value.sync="name1" @update:value="name1=$event.target.value">
    <input :foo.sync="name1" @update:foo="name1=$event.target.value">
  </div>
</template>

<script>
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

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
