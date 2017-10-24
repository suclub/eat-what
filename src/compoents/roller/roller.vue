<template>
  <div class="roller">
    <div class="roller-wrap">
      <ul class="roller-content" :style="{ top, transition}">
        <li v-for="(item, index) in prizeList" :key="index" >{{item.data}}</li>
      </ul>
    </div>
    <div class="roller-button">
      <button @click="start()">{{buttonText}}</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
      prizeList: [
        { data: '黄焖鸡' },
        { data: '刀削面' },
        { data: '大盘鸡' },
        { data: '凉皮' },
        { data: '串串' }
      ],
      activeIndex: 0,
      buttonText: '开始',
      drawTime: 1,
      intervalPush: 0,
      timeoutSplice: 0
    }
  },
  computed: {
    top () {
      return -this.activeIndex * 4 + 'rem'
    },
    transition () {
      return this.activeIndex === 0 ? 'none' : 'top 0.1s'
    }
  },
  methods: {
    start () {
      this.drawTime++
      console.log(this.drawTime)
      this.buttonText = '停止'
      if (this.drawTime % 2 === 0) {
        this.intervalPush = setInterval(_ => {
          this.prizeList.push(this.prizeList[0])
          this.activeIndex += 1
        }, 100)
        setTimeout(_ => {
          this.timeoutSplice = setInterval(_ => {
            this.prizeList.splice(0, 1)
            this.activeIndex = 0
          }, 100)
        }, 50)
      } else {
        this.buttonText = '开始'
        clearInterval(this.intervalPush)
        clearInterval(this.timeoutSplice)
      }
    }
  }
}
</script>

<style lang="scss">
.roller-wrap{
  width: 80%;
  height: 4rem;
  margin: 30% auto 0;
  border-top: 1px solid #EBEBEB;
  border-bottom: 1px solid #EBEBEB;
  overflow: hidden;
  .roller-content{
    position: relative;
    li {
      line-height: 4rem;
      text-align: center;
      color: #707274;
      font-size: 1.25rem;
    }
  }
}
.roller-button {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  button {
    width: 40%;
    height: 2.75rem;
    margin: 3rem auto 0;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 1.375rem;
    outline:none;
    background-color: #4EA4F5;
  }
}

</style>