<template>
  <ol>
    <li>
      prop 用来传递一个初始值：
      <span class="red">{{initialCounter}}</span>
    </li>
    <li>
      prop 以一种原始的值传入且需转换：
      <span class="red">{{txt}}</span> =>
      <span class="red">{{normalizedTxt}}</span>
    </li>
  </ol>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  props: {
    initialCounter: {
      type: Number,
      default: 0
    },
    txt: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      counter: this.initialCounter
    }
  },
  computed: {
    normalizedTxt: function () {
      return this.txt.toLowerCase()
    }
  }
}
</script>

