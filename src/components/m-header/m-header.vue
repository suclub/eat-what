<template>
  <div class="m-header">
    <div class="header-style">
      <div class="meun" @click="menuShow = !menuShow"></div>
      <h1 class="text">文理吃啥</h1>
      <div class="add" @click="addShow = !addShow"></div>
    </div>
    <transition name="bag">
      <div class="menu-bag" @click="menuShow = !menuShow" v-show="menuShow"></div>
    </transition>
    <transition name="content">
      <div class="menu-content" @click="menuShow = !menuShow" v-show="menuShow">
        <router-link tag="div" class="menu-item" to="/select">
          <i class="icon-sel"></i>
          <span class="menu-link">选择</span>
        </router-link>
        <router-link tag="div" class="menu-item" to="/list">
          <i class="icon-list"></i>
          <span class="menu-link">列表</span>
        </router-link>
      </div>
    </transition>
    <transition name="add">
      <div class="header-add" v-show="addShow" @click="addShow = !addShow">
        <div class="add-wrapper" @click.stop>
          <h2 class="add-title">添加美食</h2>
          <mt-field class="add-field" placeholder="给自己多一点选择？" v-model="inputText"></mt-field>
          <div class="add-btn">
            <mt-button type="primary" class="add-button" name="list" @click="cancel">取消</mt-button>
            <mt-button type="primary" class="add-button" name="list" @click="confirm" v-bind:class="{'addClass': inputText === ''}" :disabled="inputText === ''">确定</mt-button>
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
      addShow: false,
      menuShow: false,
      inputText: '',
      inputList: ''
    }
  },
  methods: {
    confirm() {
      this.inputList = this.inputText
      this.$store.commit('addList', this.inputList)
      this.inputText = ''
      this.addShow = !this.addShow
    },
    cancel() {
      this.addShow = !this.addShow
      this.inputText = ''
    }
  }
}
</script>

<style lang="scss">
.header-style {
  display: flex;
  justify-content: space-between;
  height: 2.75rem;
  width: 100%;
  text-align: center;
  background-color: rgb(255, 111, 60);
  font-size: 0;
  position: fixed;
  top: 0;
  .meun,
  .add {
    display: inline-block;
    vertical-align: top;
    margin: 0.44rem;
    width: 30px;
    height: 30px;
    background-size: 30px 30px;
  }
  .meun {
    margin-left: 1.05rem;
    background-image: url(Category.svg);
    &:active {
      background-image: url(Category_2.svg);
    }
  }
  .add {
    margin-right: 0.9rem;
    background-image: url(add.svg);
    &:active {
      background-image: url(add_2.svg);
    }
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 2.75rem;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #ffffff;
  }
}
.menu-content {
  width: 33.3%;
  height: 100%;
  background: rgb(255, 111, 60);
  padding-top: 3.6rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  box-shadow: 0px 0px 16px 3px rgb(1, 1, 1);
  &.content-enter-active {
    transition: all 0.4s ease;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  &.content-enter,
  &.content-leave-to {
    opacity: 0;
    transform: translate3d(-24px, 0, 0);
  }
  &.content-leave-active {
    transition: all 0.4s ease;
  }
  .menu-item {
    height: 5.75rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0;
    .menu-link {
      width: 100%;
      text-align: center;
      color: rgb(255, 252, 232);
      font-size: 1.125rem;
    }
    .icon-sel {
      background: url(success.svg) center -1rem no-repeat;
      background-size: 6rem 6rem;
      width: 100%;
      height: 100%;
    }
    .icon-list {
      background: url(Viewlist.svg) center -1rem no-repeat;
      background-size: 6rem 6rem;
      width: 100%;
      height: 100%;
    }
    &.router-link-active {
      &.menu-item {
        font-weight: 700;
      }
      .icon-sel {
        background: url(success_2.svg) center -1rem no-repeat;
        background-size: 6rem 6rem;
        width: 100%;
        height: 100%;
      }
      .icon-list {
        background: url(Viewlist_2.svg) center -1rem no-repeat;
        background-size: 6rem 6rem;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.menu-bag {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 80;
  &.bag-enter-active,
  &.bag-leave-active {
    transition: opacity 0.2s;
  }
  &.bag-enter,
  &.bag-leave-to {
    opacity: 0;
  }
}
.header-add {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(7, 17, 27, 0.7);
  &.add-enter-active,
  &.add-leave-active {
    transition: opacity 0.2s;
  }
  &.add-enter,
  &.add-leave-to {
    opacity: 0;
  }
  .add-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 46% auto;
    background-color: rgb(255, 251, 250);
    border-radius: 15px;
    .add-title {
      margin-top: 25px;
      font-size: 1.35rem;
      font-weight: 500;
    }
    .add-field {
      width: 90%;
      margin-top: 25px;
      border: 1px solid rgb(196, 196, 196);
    }
    .add-btn {
      width: 100%;
      margin-top: 25px;
      font-size: 0;
      .add-button {
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
      .addClass {
        color: rgb(196, 196, 196);
      }
    }
  }
}
</style>
