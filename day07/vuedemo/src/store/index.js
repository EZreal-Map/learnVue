import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [
      {
        id: 1000,
        title: '低帮城市休闲户外鞋天然牛皮COOLMAX纤维',
        img: 'https://yanxuan-item.nosdn.127.net/3a56a913e687dc2279473e325ea770a9.jpg',
        price: 128,
        count: 1
      },
      {
        id: 1002,
        title: '低帮城市休闲户外鞋天然牛皮COOLMAX纤维',
        img: 'https://yanxuan-item.nosdn.127.net/3a56a913e687dc2279473e325ea770a9.jpg',
        price: 129,
        count: 1
      },
      {
        id: 1003,
        title: '低帮城市休闲户外鞋天然牛皮COOLMAX纤维',
        img: 'https://yanxuan-item.nosdn.127.net/3a56a913e687dc2279473e325ea770a9.jpg',
        price: 130,
        count: 1
      },
      {
        id: 1004,
        title: '低帮城市休闲户外鞋天然牛皮COOLMAX纤维',
        img: 'https://yanxuan-item.nosdn.127.net/3a56a913e687dc2279473e325ea770a9.jpg',
        price: 130,
        count: 1
      }
    ],
    sumCount: 0,
    sumPrice: 0
  },
  getters: {
  },
  mutations: {
    addGoodCount (state, item) {
      // console.log(item)
      item.count += 1
    },
    minusGoodCount (state, item) {
      // console.log(item)
      item.count -= 1
    },
    getSumCount (state) {
      state.sumCount = state.goods.reduce(
        (accumulateCount, item) =>
          accumulateCount + item.count, 0)
      // console.log(state.sumCount)
      // return state.sumCount
    },
    getSumPrice (state) {
      state.sumPrice = state.goods.reduce(
        (accumulateCount, item) =>
          accumulateCount + item.count * item.price, 0)
      // console.log(state.sumCount)
      // return state.sumCount
    }
  },
  actions: {
  },
  modules: {
  }
})
