<template>
  <div class="dashboard-container">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="常用传值" name="first">
        <div class="double-container">
          <div class="container-left">
            <common/>
          </div>
          <div class="container-right">
            <common-md/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="EventBus通讯" name="second">
        <div class="double-container">
          <div class="container-left">
            <Bus/>
          </div>
          <div class="container-right">
            <bus-md/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="插槽slot" name="third">
        <div class="double-container">
          <div class="container-left">
            <Slots/>
          </div>
          <div class="container-right">
            <slot-md/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="vuex状态管理" name="fourth">
        <div class="double-container">
          <div class="container-left">
            <Vuex/>
          </div>
          <div class="container-right">
            <vuex-md/>
          </div>
        </div>
      </el-tab-pane>

      <!-- <el-tab-pane label="依赖注入" name="five">
        <div class="double-container">
          <div class="container-left">
              <Vuex/>
          </div>
          <div class="container-right">
            <vuex-md />
            https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5
          </div>
        </div>
      </el-tab-pane>-->
    </el-tabs>
  </div>
</template>

<script>
// import testMd from './test.md'
import CommonMd from './common/common.md'
import Common from './common'
import BusMd from './bus/bus.md'
import Bus from './bus'
import SlotMd from './slot/slot.md'
import Slots from './slot'
import VuexMd from './vuex/vuex.md'
import Vuex from './vuex'


export default {
  name: 'ValuePassing',
  components: {
    Common,
    CommonMd,
    Bus,
    BusMd,
    SlotMd,
    Slots,
    Vuex,
    VuexMd
  },
  data() {
    return {
      activeName: 'fourth'
    }
  },
  mounted() {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
  }
}
</script>

<style lang="scss">
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
