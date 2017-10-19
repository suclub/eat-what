<template>
  <div class="m-header">
    <div class="header-style">
      <div class="meun" @click="menuShow = !menuShow"></div>
      <h1 class="text">文理吃啥</h1>
      <div class="add" @click="addShow = !addShow"></div>
    </div>
    <transition name="menu">
      <div class="header-menu" @click="menuShow = !menuShow" v-show="menuShow">
        <div class="menu-content" @click.stop>
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
        <div class="add-wrapper" >
          <input type="text" @click.stop>
          <button class="add-confirm" @click="addShow = !addShow">确定</button>
        </div>
        <div class="close" @click="addShow = !addShow">
          <div></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        addShow: false,
        menuShow: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .header-style{
    display: flex;
    justify-content: space-between;
    height: 2.75rem;
    text-align: center;
    background-color: #4EA4F5;
    font-size: 0;
    .meun, .add {
      display: inline-block;
      vertical-align: top;
      margin: .44rem;
      width: 30px;
      height: 30px;
      background-size: 30px 30px;
    }
    .meun{
      margin-left: .75rem;
      background-image: url(Category.svg);
    }
    .add{
      margin-right: .75rem;
      background-image: url(add.svg);
    }
    .text{
      display: inline-block;
      vertical-align: top;
      line-height: 2.75rem;
      font-size: 1.125rem;
      color: #ffffff
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
    background: rgba(7, 17, 27, 0.5);
    &.menu-enter-active{
      transition: all 0.4s ease;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    &.menu-enter,&.menu-leave-to {
      opacity: 0;
      transform: translate3d(-24px, 0, 0);
    }
    &.menu-leave-active{
      transition: all 0.4s ease;
    }
    .menu-content {
      width: 45%;
      height: 100%;
      background: rgba(101, 162, 239, 0.9);
      box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
      .menu-wrapper{
        padding-top: 2.75rem;
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
    &.add-enter-active{
      transition: all 0.4s ease;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    &.add-enter,&.add-leave-to {
      opacity: 0;
      transform: translate3d(24px, 0, 0);
    }
    &.add-leave-active{
      transition: all 0.4s ease;
    }
    .add-wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      margin-top: 50%;
      input {
        width: 60%;
        height: 2.5rem;
        border: none;
        border-radius: 1.25rem;
        outline:none;
        background-color: #EBEBEB;
        padding: 0 1.25rem;
        font-size: 1rem;
      }
      button{
        width: 25%;
        height: 2.5rem;
        border: none;
        border-radius: 1.25rem;
        outline:none;
        margin-top: 2.5rem;
        background-color: #4EA4F5;
        color: #fff;
        font-size: 1rem;
      }
    }
    .close{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2.5rem;
      div{
        background: url(close.svg) no-repeat;
        background-size: 2.5rem 2.5rem;
        width: 2.5rem;
        height: 2.5rem;
        margin: -2.5rem auto 0 auto;
      }
    }
  }
</style>