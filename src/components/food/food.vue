<template>
  <div class="food">
    <mt-cell-swipe
      class="food_text"
      v-for="(item, index) in dataList"
      v-if="choose == '' ? true : item.tag == choose"
      :key="index"
      :title="item.title"
      :id="item.date"
      :right="[
        {
          content: '编辑',
          style: {background: '#FF9A3C', color: '#fff'},
          handler: () => compile(item.date)
        },
        {
          content: '删除',
          style: { background: 'red', color: '#fff' },
          handler: () => deleteCell(item.date)
        }
      ]">
      <img src="./more.svg" width="16" height="16">
    </mt-cell-swipe>
    <div class="food_com" v-show="comShow" @click="comShow = !comShow">
      <div class="food_wrapper" @click.stop>
        <mt-field class="food_field" label="名称:" v-model="comTitle"></mt-field>
        <mt-field class="food_field" label="分类:" v-model="comTag"></mt-field>
        <mt-button class="food_button" type="primary" @click="confirm">确定</mt-button>
        <!-- <mt-button class="food_button" type="default" @click="comShow = !comShow">取消</mt-button> -->
      </div>
      <div class="close">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      food_list: null,
      active: 'tab-container1',
      comShow: false,
      comTitle: null,
      comTag: null,
      foodDate: null,
      conList: null
    }
  },

  methods: {
    deleteCell(date) {
      this.$store.commit('deleteList', date)
    },
    compile(date) {
      this.comShow = !this.comShow
      this.foodDate = date
      for (let i = 0; i < this.dataList.length; i++) {
        if (this.dataList[i].date === date) {
          this.comTitle = this.dataList[i].title
          this.comTag = this.dataList[i].tag
        }
      }
    },
    confirm() {
      this.conList = { title: this.comTitle, tag: this.comTag, date: this.foodDate }
      this.$store.commit('confirm', this.conList)
      this.comShow = !this.comShow
    }
  },

  computed: {
    dataList() {
      return this.$store.state.dataList
    },

    choose() {
      return this.$store.state.choose
    }
  }
}
</script>

<style lang="scss">
.food {
  width: 80%;
  margin: 0 auto;
  padding-top: 1.875rem;
  .food_com {
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.7);
    .food_wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      width: 85%;
      margin: 46% auto;
      padding: 10% 0 5% 0;
      background-color: #ff9a3c;
      border-radius: 4px;
      .food_field {
        width: 90%;
        border-radius: 4px;
        margin: 4px auto;
      }
      .food_button {
        margin: 10px;
        width: 30%;
        background-color: #ff6f3c;
      }
    }
    .close {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2.5rem;
      div {
        background: url(close.svg) no-repeat;
        background-size: 2.5rem 2.5rem;
        width: 2.5rem;
        height: 2.5rem;
        margin: -2.5rem auto 0 auto;
        &:active {
          background-image: url(close_2.svg);
        }
      }
    }
  }
}
</style>
