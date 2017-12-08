<template>
  <div class="list">
    <m-header></m-header>
    <tag></tag>
    <food></food>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from '../../components/m-header/m-header.vue'
import Tag from '../../components/tag/tag.vue'
import Food from '../../components/food/food.vue'

export default {
  components: {
    MHeader,
    Tag,
    Food
  }
}
</script>

<style scoped lang="scss"></style>
