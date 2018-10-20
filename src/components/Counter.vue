<template>
  <div>
    <h3>This is Counter App</h3>
    <h4>{{counter}}</h4>
    <button @click="INCREMENT_COUNTER">+++</button>
    <button @click="DECREMENT_COUNTER">---</button>
  </div>
</template>

<script>
import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_COUNTER } from '../store/mutation-types'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'counter',
  computed: {
    ...mapGetters('counter',{
      counter: GET_COUNTER
    })
  },
  methods: {
    ...mapActions('counter',[
      INCREMENT_COUNTER,
      DECREMENT_COUNTER
    ])
  }
}
</script>

