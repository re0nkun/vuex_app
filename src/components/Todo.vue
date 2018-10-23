<template>
  <div>
    <h3>This is Todo App</h3>
    <p>「{{mystring}}...」</p>
    <input type="text" v-model="mystring">
    <button @click="ADD_TODO(mystring)">追加</button>

    <Leaf v-for="item in todos" :key="item.id" :item="item"></Leaf>
  </div>
</template>

<script>
import Leaf from './Leaf'
import { mapGetters, mapActions } from 'vuex'
import { ADD_TODO, CHANGE_MYSTRING, GET_TODOS } from '../store/mutation-type'

export default {
  name: 'todo',
  components: {
    Leaf
  },
  computed: {
    mystring: {
      get () {
        return this.$store.state.todo.mystring
      },
      set (val) {
        this.$store.commit('todo/CHANGE_MYSTRING', {data: val})
      }
    },
    ...mapGetters('todo', {
      todos: GET_TODOS
    })
  },
  methods: {
    ...mapActions('todo', {
      ADD_TODO
    })
  }
}
</script>

<style scoped>
</style>
