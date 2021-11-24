//vux状态管理
import {
  createStore
} from 'vuex'

const store = createStore({
  state: {
    userName: 'gaoyuan'
  },
  getters: {
    userName: state => {
      return state.userName
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
})

export default store