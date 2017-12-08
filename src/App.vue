<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  created: function() {
    return this.$store.commit('initList')
  }
}
</script>

<style scoped lang="scss"></style>
