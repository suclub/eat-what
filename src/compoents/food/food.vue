<template>
  <div class="food">
    <mt-cell-swipe class="food_text" v-for="(item, index) in food_list" :key="index"
      :right="[
      {
        content: '编辑',
        style: {background:'#4EA4F5', color: '#fff'}
      },
      {
        content: '删除',
        style: { background: 'red', color: '#fff' },
        handler: () => this.$messagebox('delete')
      }]">
      {{item.data}}
    </mt-cell-swipe>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import { CellSwipe } from 'mint-ui'

Vue.component(CellSwipe.name, CellSwipe)

export default {
  data () {
    return {
      food_list: [
        { data: '东门黄焖鸡' },
        { data: '魏家凉皮' },
        { data: '二楼套饭' }
      ]
    }
  }
}
</script>

<style lang="scss">
  .food{
    width: 80%;
    margin: 2px auto;
    .mint-cell{
      .mint-cell-wrapper{
        .mint-cell-title{
          flex: none;
        }
      }
    }
  }
</style>