<template>
  <div class="roller">
    <div class="roller-wrap">
      <ul class="roller-content" :style="{ top, transition }">
        <li 
        v-for="(item, index) in rollerList" 
        :key="index" 
        >{{item.title}}</li>
      </ul>
    </div>
    <div class="roller-button">
      <mt-button class="mt-button" @click="start()">{{buttonText}}</mt-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      rollerList: [],
      activeIndex: 0,
      buttonText: '开始',
      drawTime: 1,
      intervalPush: 0,
      timeoutSplice: 0
    }
  },

  computed: {
    top() {
      return -this.activeIndex * 4 + 'rem'
    },
    transition() {
      return this.activeIndex === 0 ? 'none' : 'all 0.1s'
    },
    dataList() {
      return this.$store.state.dataList
    },
    choose() {
      return this.$store.state.choose
    }
  },

  watch: {
    choose: function() {
      this.rollerList = []

      if (this.dataList.length) {
        // 将dataList里的title push到rollerList
        for (let i = 0; i < this.dataList.length; i++) {
          if (this.choose === this.dataList[i].tag) {
            this.rollerList.push({ title: this.dataList[i].title })
          }
          if (this.choose === '') {
            this.rollerList.push({ title: this.dataList[i].title })
          }
        }
      } else {
        this.rollerList.push({ title: '输入食物名称' })
      }

      // 如果rollerList 小于4，则重复push
      if (this.rollerList.length < 4) {
        for (let i = 0; i < 6 - this.rollerList.length; i++) {
          this.rollerList.push({ title: this.rollerList[i].title })
        }
      }

      // 洗牌算法 随机排序
      for (let i = this.rollerList.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1))
        var itemAtIndex = this.rollerList[randomIndex]
        this.rollerList[randomIndex] = this.rollerList[i]
        this.rollerList[i] = itemAtIndex
      }
    },

    dataList: function() {
      this.rollerList = []
      if (this.dataList.length) {
        // 将dataList里的title push到rollerList
        for (let i = 0; i < this.dataList.length; i++) {
          if (this.choose === this.dataList[i].tag) {
            this.rollerList.push({ title: this.dataList[i].title })
          }
          if (this.choose === '') {
            this.rollerList.push({ title: this.dataList[i].title })
          }
        }
      } else {
        this.rollerList.push({ title: '输入食物名称' })
      }

      // 如果rollerList 小于4，则重复push
      if (this.rollerList.length < 4) {
        for (let i = 0; i < 6 - this.rollerList.length; i++) {
          this.rollerList.push({ title: this.rollerList[i].title })
        }
      }

      // 洗牌算法 随机排序
      for (let i = this.rollerList.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1))
        var itemAtIndex = this.rollerList[randomIndex]
        this.rollerList[randomIndex] = this.rollerList[i]
        this.rollerList[i] = itemAtIndex
      }
    }
  },

  created() {
    this.rollerList = []
    if (this.dataList.length) {
      // 将dataList里的title push到rollerList
      for (let i = 0; i < this.dataList.length; i++) {
        if (this.choose === this.dataList[i].tag) {
          this.rollerList.push({ title: this.dataList[i].title })
        }
        if (this.choose === '') {
          this.rollerList.push({ title: this.dataList[i].title })
        }
      }
    } else {
      this.rollerList.push({ title: '输入食物名称' })
    }
    // 如果rollerList 小于4，则重复push
    if (this.rollerList.length < 4) {
      for (let i = 0; i < 6 - this.rollerList.length; i++) {
        this.rollerList.push({ title: this.rollerList[i].title })
      }
    }
    // 洗牌算法 随机排序
    for (let i = this.rollerList.length - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1))
      var itemAtIndex = this.rollerList[randomIndex]
      this.rollerList[randomIndex] = this.rollerList[i]
      this.rollerList[i] = itemAtIndex
    }
  },

  methods: {
    start() {
      this.drawTime++
      this.buttonText = '停止'
      if (this.drawTime % 2 === 0) {
        this.intervalPush = setInterval(_ => {
          this.activeIndex += 1
        }, 100)
        setTimeout(_ => {
          this.timeoutSplice = setInterval(_ => {
            this.rollerList.push(this.rollerList[0])
            this.rollerList.splice(0, 1)
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
.roller-wrap {
  width: 80%;
  height: 8rem;
  margin: 30% auto 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  overflow: hidden;
  background: linear-gradient(#d3d3d3 0%, #ffffff 35%, #ffffff 65%, #d3d3d3 100%);
  .roller-content {
    position: relative;
    margin-top: -2rem;
    li {
      line-height: 4rem;
      text-align: center;
      color: #707274;
      font-size: 2.5rem;
    }
  }
}
.roller-button {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  .mt-button {
    width: 40%;
    height: 2.75rem;
    margin: 3rem auto 0;
    color: #fff;
    font-size: 1rem;
    border: none;
    background-color: #ff6f3c;
  }
}
</style>
