<template>
  <div class="container">
    <span class="red">class</span>
    <ul>
      <li class="bold" :class="{ blue: isActive }">class对象语法</li>
      <li :class="['bold', {'blue': isActive}]">class数组语法</li>
      <li :class="[isActive?'blue':'bold']">class三元运算语法</li>
    </ul>
    <span class="red">style</span>
    <ul>
      <li :style="activeColor">style数组语法</li>
      <li :style="[activeColor, activeFont]">style数组语法</li>
      <li :style="{color: isActive?'#08d':''}">style三元运算语法</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      activeColor: {
        color: '#08d'
      },
      activeFont: {
        fontSize: '18px',
        fontWeight: 'bold'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
.blue {
  color: #08d;
}
</style>
