<template>
  <div class="m-header">
    <div class="header-style">
      <div class="meun" @click="menuShow = !menuShow"></div>
      <h1 class="text">文理吃啥</h1>
      <div class="add" @click="addShow = !addShow"></div>
    </div>

    <transition name="menu">
      <div class="header-menu" @click="menuShow = !menuShow" v-show="menuShow">
        <div class="menu-content">
          <div class="menu-wrapper">
            <router-link tag="div" class="menu-item" to="/select">
              <span class="menu-link icon-sel">选择</span>
            </router-link>
            <router-link tag="div" class="menu-item" to="/list">
              <span class="menu-link icon-list">列表</span>
            </router-link>
          </div>
        </div>
      </div>
    </transition>

    <transition name="add">
      <div class="header-add" v-show="addShow" @click="addShow = !addShow">
        <div class="add-wrapper" @click.stop>
          <mt-field class="add_field" placeholder="请输入食物名称" v-model="inputText"></mt-field>
          <mt-button type="primary" class="add-confirm" name="list" @click="confirm">确定</mt-button>
        </div>
        <div class="close">
          <div></div>
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
      inputText: null,
      inputList: null
    }
  },
  methods: {
    confirm() {
      this.inputList = this.inputText
      if (this.inputList) {
        this.$store.commit('addList', this.inputList)
      }
      this.inputText = ''
      this.addShow = !this.addShow
    }
  }
}
</script>

<style scoped lang="scss">
.header-style {
  display: flex;
  justify-content: space-between;
  height: 2.75rem;
  text-align: center;
  background-color: #ff6f3c;
  font-size: 0;
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
    margin-left: 0.75rem;
    background-image: url(Category.svg);
    &:active {
      background-image: url(Category_2.svg);
    }
  }
  .add {
    margin-right: 0.75rem;
    background-image: url(add.svg);
    &:active {
      background-image: url(add_2.svg);
    }
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 2.75rem;
    font-size: 1.125rem;
    color: #ffffff;
  }
}
.header-menu {
  position: absolute;
  z-index: 80;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(7, 17, 27, 0.7);
  &.menu-enter-active {
    transition: all 0.4s ease;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  &.menu-enter,
  &.menu-leave-to {
    opacity: 0;
    transform: translate3d(-24px, 0, 0);
  }
  &.menu-leave-active {
    transition: all 0.4s ease;
  }
  .menu-content {
    width: 45%;
    height: 100%;
    background: #ff9a3c;
    box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
    padding-top: 2.75rem;
    z-index: 50;
    .menu-item {
      height: 2.75rem;
      padding-left: 1rem;
      vertical-align: top;
      line-height: 2.75rem;
      .menu-link {
        padding-left: 1.75rem;
        color: #fff;
        font-size: 1.125rem;
      }
      &.router-link-active {
        &.menu-item {
          background-color: #ff6f3c;
        }
      }
      .icon-sel {
        background: url(success.svg) no-repeat;
        background-size: 1.125rem 1.125rem;
        background-position: 0 50%;
      }
      .icon-list {
        background: url(Viewlist.svg) no-repeat;
        background-size: 1.125rem 1.125rem;
        background-position: 0 50%;
      }
    }
  }
}
.header-add {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(7, 17, 27, 0.7);
  &.add-enter-active {
    transition: all 0.4s ease;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  &.add-enter,
  &.add-leave-to {
    opacity: 0;
    transform: translate3d(24px, 0, 0);
  }
  &.add-leave-active {
    transition: all 0.4s ease;
  }
  .add-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 85%;
    margin: 46% auto;
    padding: 10% 0;
    background-color: #ff9a3c;
    border-radius: 4px;
    .add_field {
      width: 90%;
      height: 2.5rem;
      border: none;
      border-radius: 4px;
      outline: none;
      // padding: 0 1.25rem;
      // font-size: 1rem;
    }
    button {
      width: 25%;
      height: 2.5rem;
      outline: none;
      margin-top: 1.5rem;
      background-color: #ff6f3c;
      color: #fff;
      font-size: 1rem;
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
</style>
