import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity1', city)
  //   }
  // },
  mutations: mutations
  // 类似计算属性
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
