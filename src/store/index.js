import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    countGet: state => state.count + 2
  },
  mutations: {
    inc (state) {
      state.count++
    },
    dec (state) {
      state.count--
    },
    input (state, payload) {
      state.count += payload
    }
  },
  actions: {
    incAction: ({commit}) => {
      commit('inc')
    },
    decAction: ({commit}) => {
      commit('dec')
    },
    inputAction: ({commit}, payload) => {
      commit('input', payload)
    }
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production'
           ? [createLogger()]
           : []
})
