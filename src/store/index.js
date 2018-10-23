import Vuex from 'vuex'
import Vue from 'vue'

import counter from './counter'
import todo from './todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'counter': counter,
    'todo': todo,
  }
})