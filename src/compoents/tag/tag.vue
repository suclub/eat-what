<template>
  <div class="tag">
    <mt-button class="tag-button" size="small" @click="chooseAll()">
      {{tagAll}}
    </mt-button><mt-button 
    class="tag-button" 
    size="small" 
    v-for="(item, index) in tagKind" 
    v-if="item.tag !== ''" 
    :key="index" 
    @click="tagChoose(index)">
      {{item.tag}}
    </mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { Button } from 'mint-ui'

  Vue.component(Button.name, Button)

  export default {
    data () {
      return {
        tagList: [],
        tagKind: [],
        tagValue: null,
        tagAll: '全部'
      }
    },

    methods: {
      tagChoose (index) {
        this.tagValue = this.tagKind[index].tag
        this.$store.commit('choose', this.tagValue)
      },

      chooseAll () {
        this.tagValue = ''
        this.$store.commit('choose', this.tagValue)
      }
    },

    computed: {
      dataList () {
        return this.$store.state.dataList
      }
    },
    watch: {
      dataList: function () {
        this.tagList = []
        this.tagKind = []
        // 收集所有tag
        for (let i = 0; i < this.dataList.length; i++) {
          this.tagList.push({tag: this.dataList[i].tag})
        }
        // 去除重复的tag
        for (let i = 0; i < this.tagList.length; i++) {
          for (let j = i + 1; j < this.tagList.length; j++) {
            if (this.tagList[i].tag === this.tagList[j].tag) {
              j = ++i
            }
          }
          this.tagKind.push(this.tagList[i])
        }
      }
    },
    created () {
      // 收集所有tag
      for (let i = 0; i < this.dataList.length; i++) {
        this.tagList.push({tag: this.dataList[i].tag})
      }
      // 去除重复的tag
      for (let i = 0; i < this.tagList.length; i++) {
        for (let j = i + 1; j < this.tagList.length; j++) {
          if (this.tagList[i].tag === this.tagList[j].tag) {
            j = ++i
          }
        }
        this.tagKind.push(this.tagList[i])
      }
    }
  }
</script>

<style scoped lang="scss">
.tag {
  background-color: #FF9A3C;
  height: 2.65rem;
  overflow-x: auto;
  white-space:nowrap;
  &::-webkit-scrollbar{
    display:none;
  }
  .tag-button {
    border: none;
    height: 100%;
    background-color: #FF9A3C;
    color: #fff;
  }
  .mint-button--default {
    box-shadow: none;
  }
}
</style>