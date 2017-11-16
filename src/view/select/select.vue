<template>
  <div class="select">
    <m-header></m-header>
    <tag></tag>
    <rooler></rooler>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from '../../components/m-header/m-header.vue'
import Tag from '../../components/tag/tag.vue'
import Rooler from '../../components/roller/roller.vue'

export default {
  components: {
    MHeader,
    Tag,
    Rooler
  }
}
</script>

<style scoped lang="scss">
.select {
  height: 0;
}
</style>
