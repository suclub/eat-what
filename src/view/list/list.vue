<template>
  <div class="list">
    <mheader></mheader>
    <tag></tag>
    <food></food>
  </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from '../../compoents/m-header/m-header.vue'
  import Tag from '../../compoents/tag/tag.vue'
  import Food from '../../compoents/food/food.vue'

  export default {
    components: {
      Mheader,
      Tag,
      Food
    }
  }
</script>

<style scoped lang="scss">
  .list{
    min-height: 100vh;
  }
</style>