
<template>
  <ul>
    <li v-for="(item, index) of list" :key="index">
      {{item.title}}
      <div v-if="item.children">
        <list-tree :list="item.children"/>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListTree',
  props: {
    list: {
      type: Array,
      default: function () {
        return [
          {
            title: '1',
            children: [
              { title: '1-1' },
              { title: '1-2' },
              { title: '1-3' }
            ]
          },
          {
            title: '2',
            children: [
              {
                title: '2-1',
                children: [
                  { title: '2-1-1' },
                  { title: '2-1-2' },
                  { title: '2-1-3' }
                ]
              },
              { title: '2-2' },
              { title: '2-3' }
            ]          }
        ]
      }
    }
  }
}
</script>
