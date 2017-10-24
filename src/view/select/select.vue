<template>
  <div class="select">
    <mheader></mheader>
    <rooler></rooler>
  </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from '../../compoents/m-header/m-header.vue'
  import Rooler from '../../compoents/roller/roller.vue'

  export default {
    components: {
      Mheader,
      Rooler
    }
  }
</script>

<style scoped lang="scss">
  .select{
    min-height: 100vh;
  }
</style>