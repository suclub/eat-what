<template>
  <div class="tag">
    <div class="tag_text">分类</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="scss">
  .tag {
    height: 1.875rem;
    text-align: center;
    background-color: #EBEBEB;
    .tag_text { 
      display: flex;
      justify-content: flex-end;
      vertical-align: top;
      width: 80%;
      margin: 0 auto;
      line-height: 1.875rem;
      font-size: .875rem;
      color: #797979;
      background: url(more_unfold.png) no-repeat right;
      background-size: 1.75rem 1.75rem;
      padding-right: 1.625rem;
    }
  }
</style>