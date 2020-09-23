<template>
  <div class="container">
    <child :txt="txt" :initial-counter="3"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Child from './child'
export default {
  name: 'Dashboard',
  components: {
    Child
  },
  data() {
    return {
      txt: 'Hello World'
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

