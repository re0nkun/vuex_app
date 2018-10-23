import {INCREMENT_COUNTER, DECREMENT_COUNTER, GET_COUNTER} from './mutation-type'

export default {
  namespaced: true,

  state: {
    counter_value: 0
  },

  actions: {
    [INCREMENT_COUNTER] ({commit}) {
      commit(INCREMENT_COUNTER)
    },
    [DECREMENT_COUNTER] ({commit}) {
      commit(DECREMENT_COUNTER)
    }
  },

  mutations: {
    [INCREMENT_COUNTER] (state, payload) {
      state.counter_value +=1
    },
    [DECREMENT_COUNTER] (state, payload) {
      state.counter_value -=1
    }
  },

  getters: {
    [GET_COUNTER] (state) {
      return state.counter_value
    }
  }
}