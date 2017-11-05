<template>
  <div class="roller">
    <div class="roller-wrap">
      <ul class="roller-content" :style="{ top, transition }">
        <li 
        v-for="(item, index) in rollerList" 
        :key="index" 
        v-if="choose == '' ? true : item.tag == choose">{{item.title}}</li>
      </ul>
    </div>
    <div class="roller-button">
      <mt-button class="mt-button" @click="start()">{{buttonText}}</mt-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import _ from 'lodash'
import { Button } from 'mint-ui'

Vue.component(Button.name, Button)

export default {
  data () {
    return {
      rollerList: 0,
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
      return this.activeIndex === 0 ? 'none' : 'all 0.1s'
    },
    dataList () {
      return this.$store.state.dataList
    },
    choose () {
      return this.$store.state.choose
    }
  },

  created () {
    console.log(_.isEmpty() ? 'Lodash is available here!' : 'Uh oh..')
    this.rollerList = _.cloneDeep(this.dataList)
  },

  methods: {
    start () {
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
  .mt-button {
    width: 40%;
    height: 2.75rem;
    margin: 3rem auto 0;
    color: #fff;
    font-size: 1rem;
    border: none;
    background-color: #FF6F3C;
  }
}

</style>