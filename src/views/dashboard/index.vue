<template>
  <div class="dashboard-container">
    <el-row>
      <el-col :span="6" v-for="item in list" :key="item.name" :offset="1">
        <a :href="item.url" target="_blank">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" class="image" style="width:100%">
            <div style="padding: 14px;">
              <span>{{item.name}}</span>
              <!-- <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              </div>-->
            </div>
          </el-card>
        </a>
      </el-col>
    </el-row>
    <!-- <div>vue 的知识库整理</div>
    <div>该项目介绍
      版本：
      内容：

    </div>
    <div>学习资源整合
      xxxx
    </div>
    <div>
      待办：
      <ul>
        <li>slot全局</li>
        <li>v-model多个组件的实例</li>
        <li>vue配置</li>
      </ul>
    </div>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      currentDate: new Date().toLocaleDateString(),
      list: [{
        name: '切图妞博客',
        url: 'https://www.qietuniu.com',
        img: 'http://img.qietuniu.com/blog.png'
      }, {
        name: '切图妞Github',
        url: 'https://www.qietuniu.com',
        img: 'http://img.qietuniu.com/blog.png'
      }, {
        name: '切图妞知否',
        url: 'https://segmentfault.com/u/qietuniu/articles',
        img: 'http://img.qietuniu.com/blog.png'
      }]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>
<style lang="scss">
.dashboard .el-card__body {
  .image {
    width: 100%;
  }
}
</style>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
