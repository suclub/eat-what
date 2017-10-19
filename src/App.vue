<template>
  <div id="app">
    <transition name="view" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
}
</script>

<style scoped lang="scss">
    .view-enter {
      opacity: 0;
      transform: translate3d(-24px, 0, 0);
    }
    .view-leave-to {
      opacity: 0;
      transform: translate3d(24px, 0, 0);
    }
    .view-leave-active, .view-enter-active {
      transition: all .5s ease;
    }
</style>
