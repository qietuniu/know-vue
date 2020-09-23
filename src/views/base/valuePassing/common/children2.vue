<template>
  <div>
    <Grandson v-bind="$attrs" v-on="$listeners"/>
  </div>
</template>

<script>
import Grandson from './grandson'

export default {
  data() {
    return {
    }
  },
  components: {
    Grandson
  },
  mounted() {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
