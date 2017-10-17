<template>
  <div class="m-header">
    <div class="meun"></div>
    <h1 class="text">文理吃啥</h1>
    <div class="add"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="scss">
  .m-header{
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
      background-image: url(Category.png);
    }
    .add{
      margin-right: .75rem;
      background-image: url(add.png);
    }
    .text{
      display: inline-block;
      vertical-align: top;
      line-height: 2.75rem;
      font-size: 1.125rem;
      color: #ffffff
    }
  }
</style>