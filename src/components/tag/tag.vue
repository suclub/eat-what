<template>
  <div class="tag">
    <mt-button class="tag-button" size="small" v-bind:class="{'on': tagValue == ''}" @click="chooseAll()"  >
      {{tagAll}}
    </mt-button><mt-button 
    class="tag-button" 
    size="small" 
    v-for="(item, index) in tagKind" 
    v-if="item.tag !== ''" 
    :key="index" 
    v-bind:class="{'on': item.tag == tagValue}" 
    @click="tagChoose(index)">{{item.tag}}
    </mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tagList: [],
      tagKind: [],
      tagValue: '',
      tagAll: '全部'
    }
  },

  methods: {
    tagChoose(index) {
      this.tagValue = this.tagKind[index].tag
      this.$store.commit('choose', this.tagValue)
    },

    chooseAll() {
      this.tagValue = ''
      this.$store.commit('choose', this.tagValue)
    }
  },

  computed: {
    dataList() {
      return this.$store.state.dataList
    },
    choose() {
      return this.$store.state.choose
    }
  },
  watch: {
    dataList: function() {
      this.tagList = []
      this.tagKind = []
      // 收集所有tag
      for (let i = 0; i < this.dataList.length; i++) {
        this.tagList.push({ tag: this.dataList[i].tag })
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

  created() {
    this.tagValue = this.choose
    // 收集所有tag
    for (let i = 0; i < this.dataList.length; i++) {
      this.tagList.push({ tag: this.dataList[i].tag })
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

<style lang="scss">
.tag {
  position: fixed;
  top: 2.75rem;
  background-color: #ff9a3c;
  height: 2.75rem;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  .tag-button {
    border: none;
    border-radius: 0;
    height: 100%;
    width: 4rem;
    background-color: #ff9a3c;
    color: #fff;
  }
  .on {
    background-color: #ff6f3c;
  }
  .mint-button--default {
    box-shadow: none;
  }
}
</style>
