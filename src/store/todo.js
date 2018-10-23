import { ADD_TODO, DONE_TODO, REMOVE_TODO, CHANGE_MYSTRING, GET_TODOS } from './mutation-type'

export default {
  namespaced: true,
  state: {
    items: [
      {todo: 'aaa', is_done: false},
      {todo: 'bbb', is_done: true}
    ],
    mystring: ''
  },
  actions: {
    [ADD_TODO] ({commit}, newValue) {
      let newItem = {
        todo: newValue,
        is_done: false
      }
      commit(ADD_TODO, {data: newItem})
      commit(CHANGE_MYSTRING, {data: ''})
    },

    [DONE_TODO] ({commit}, selItem) {
      commit(DONE_TODO, {data: selItem})
    },
    [REMOVE_TODO] ({commit}, selItem) {
      commit(REMOVE_TODO, {data: selItem})
    }
  },
  mutations: {
    [ADD_TODO] (state, payload) {
      state.items.push(payload.data)
    },

    [DONE_TODO] (state, payload) {
      state.items.map(item => {
        if (item.todo == payload.data.todo) {
          item.is_done = !item.is_done
        }
      })
    },
    [REMOVE_TODO] (state, payload) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].todo == payload.data.todo) {
          state.items.splice(i, 1)
          break
        }
      }
    },

    [CHANGE_MYSTRING] (state, payload) {
      state.mystring = payload.data
    }
  },
  getters: {
    [GET_TODOS] (state) {
      return state.items
    }
  }
}