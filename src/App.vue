<template>
  <div id="app">
    <transition name="view" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  created: function() {
    return this.$store.commit('initList')
  }
}
</script>

<style scoped lang="scss">
.view-enter,
.view-leave-to {
  opacity: 0.1;
}
.view-leave-active,
.view-enter-active {
  transition: opacity 0.2s;
}
</style>
