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
    height: 30px;
    text-align: center;
    background-color: #EBEBEB;
    .tag_text { 
      display: flex;
      justify-content: flex-end;
      vertical-align: top;
      width: 80%;
      margin: 0 auto;
      line-height: 30px;
      font-size: 14px;
      color: #797979;
      background: url(more_unfold.png) no-repeat right;
      background-size: 28px 28px;
      padding-right: 26px;
    }
  }
</style>