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
      <mt-button class="mt-button" @click="start()" :disabled="dataList.length === 0">{{buttonText}}</mt-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      rollerList: [],
      activeIndex: 0,
      buttonText: '帮我决定',
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
          } else {
            this.rollerList.push({ title: this.dataList[i].title })
          }
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
      } else {
        this.rollerList.push({ title: '想不好吃啥?' })
        this.rollerList.push({ title: '点击右上角' })
        this.rollerList.push({ title: '让你不再纠结' })
      }
    },

    dataList: function() {
      this.rollerList = []
      if (this.dataList.length) {
        // 将dataList里的title push到rollerList
        for (let i = 0; i < this.dataList.length; i++) {
          if (this.choose === this.dataList[i].tag) {
            this.rollerList.push({ title: this.dataList[i].title })
          } else {
            this.rollerList.push({ title: this.dataList[i].title })
          }
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
      } else {
        this.rollerList.push({ title: '想不好吃啥?' })
        this.rollerList.push({ title: '点击右上角' })
        this.rollerList.push({ title: '让你不再纠结' })
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
        } else {
          this.rollerList.push({ title: this.dataList[i].title })
        }
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
    } else {
      this.rollerList.push({ title: '想不好吃啥?' })
      this.rollerList.push({ title: '点击右上角' })
      this.rollerList.push({ title: '让你不再纠结' })
    }
  },

  methods: {
    start() {
      this.drawTime++
      this.buttonText = '就这个了'
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
        this.buttonText = '帮我决定'
        this.activeIndex = 0
        clearInterval(this.intervalPush)
        clearInterval(this.timeoutSplice)
      }
    }
  }
}
</script>

<style lang="scss">
.roller {
  position: fixed;
  top: 5.5rem;
  left: 0;
  width: 100%;
  height: 120%;
  .roller-wrap {
    width: 100%;
    height: 12rem;
    margin: 35% auto 0;
    overflow: hidden;
    .roller-content {
      position: relative;
      li {
        line-height: 4rem;
        text-align: center;
        color: rgb(225, 225, 225);
        font-size: 2.5rem;
      }
      li:nth-child(2) {
        color: rgb(45, 45, 45);
        font-weight: 600;
        font-size: 3rem;
      }
    }
  }
  .roller-button {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    .mt-button {
      width: 70%;
      height: 4rem;
      margin-top: 25%;
      color: #fff;
      font-size: 2.25rem;
      font-weight: 600;
      letter-spacing: 2px;
      border: none;
      background: linear-gradient(#ff6f3c 30%, #ff843c 70%);
      border-radius: 2rem;
      box-shadow: 0px 3px 10px 3px #d6d6d6;
    }
  }
}
</style>
