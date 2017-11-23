import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      dataList: [],
      choose: ''
    }
  },

  mutations: {
    addList(state, inputList) {
      var timestamp = Date.parse(new Date())
      state.dataList.push({ title: inputList, tag: state.choose, date: timestamp })
      window.localStorage.setItem('dataList', JSON.stringify(state.dataList))
    },

    deleteList(state, listDate) {
      for (let i = 0; i < state.dataList.length; i++) {
        if (state.dataList[i].date === listDate) {
          state.dataList.splice(i, 1)
        }
      }
      window.localStorage.setItem('dataList', JSON.stringify(state.dataList))
    },

    confirm(state, conList) {
      for (let i = 0; i < state.dataList.length; i++) {
        if (state.dataList[i].date === conList.date) {
          state.dataList.splice(i, 1, conList)
        }
      }
      window.localStorage.setItem('dataList', JSON.stringify(state.dataList))
    },

    choose(state, tagValue) {
      state.choose = tagValue
    },

    initList(state) {
      if (window.localStorage.getItem('dataList')) {
        state.dataList = JSON.parse(window.localStorage.getItem('dataList'))
      } else {
        state.dataList = []
      }
    }
  }
})
