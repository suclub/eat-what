<template>
  <div class="food">
      <div class="swipe-wrapper">
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
              style: {background: '#ff9a3c', color: '#fff'},
              handler: () => compile(item.date)
            },
            {
              content: '删除',
              style: { background: 'rgb(255, 59, 48)', color: '#fff' },
              handler: () => deleteCell(item.date)
            }
          ]">
          <img src="./more.svg" width="16" height="50">
        </mt-cell-swipe>
      </div>
    <transition name="food">
      <div class="food_com" v-show="comShow" @click="comShow = !comShow">
        <div class="food_wrapper" @click.stop>
          <h2 class="food-title">修改美食</h2>
          <div class="field-wrapper">
            <mt-field class="food-field"  placeholder="名称" v-model="comTitle"></mt-field>
            <mt-field class="food-field" placeholder="分组" v-model="comTag"></mt-field>
          </div>
          <div class="food-btn">
            <mt-button type="primary" class="food-button" @click="comShow = !comShow">取消</mt-button>
            <mt-button type="primary" class="food-button" @click="confirm">确定</mt-button>
          </div>

        </div>
      </div>
    </transition>
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
  width: 100%;
  position: relative;
  top: 5.5rem;
  z-index: -1000;
  .swipe-wrapper {
    .food_text {
      min-height: 3.6rem;
      color: rgb(41, 41, 41);
      font-size: 1.125rem;
      &.swipe-enter-active,
      &.swipe-leave-active {
        transition: opacity 0.2s;
      }
      &.swipe-enter,
      &.swipe-leave-to {
        opacity: 0;
      }
      .mint-cell-wrapper {
        .mint-cell-title {
          font-size: 1.125rem;
        }
      }
      .mint-cell-right {
        .mint-cell-swipe-buttongroup {
          .mint-cell-swipe-button {
            padding: 0 20px;
            line-height: 3.6rem;
          }
        }
      }
    }
  }
  .food_com {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.7);
    z-index: 1000;
    overflow: auto;
    &.food-enter-active,
    &.food-leave-active {
      transition: opacity 0.2s;
    }
    &.food-enter,
    &.food-leave-to {
      opacity: 0;
    }
    .food_wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      width: 80%;
      margin: 46% auto;
      background-color: rgb(255, 251, 250);
      border-radius: 15px;
      .food-title {
        margin-top: 25px;
        font-size: 1.35rem;
        font-weight: 500;
      }
      .field-wrapper {
        margin-top: 25px;
        width: 90%;
        .food-field {
          border: 1px solid rgb(196, 196, 196);
          &:last-child {
            border-top: none;
          }
        }
      }
      .food-btn {
        width: 100%;
        margin-top: 25px;
        font-size: 0;
        .food-button {
          width: 50%;
          height: 45px;
          outline: none;
          border: none;
          border-radius: 0;
          border-top: 1px solid rgb(199, 199, 204);
          background-color: rgb(255, 251, 250);
          color: rgb(255, 111, 60);
          font-size: 1.125rem;
          &:first-child {
            border-bottom-left-radius: 15px;
            border-right: 1px solid rgb(199, 199, 204);
          }
          &:last-child {
            border-bottom-right-radius: 15px;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
