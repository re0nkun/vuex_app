<template>
  <div class="center">
    <div class="lhand" 
          v-bind:class="{done: item.is_done}"
          @click="DONE_TODO(item)">{{item.todo}}</div>
    <div class="rhand">
      <button @click="REMOVE_TODO(item)">削除</button>
    </div>
    <div class="cls"></div>
  </div>
</template>

<script>
import { DONE_TODO, REMOVE_TODO} from '../store/mutation-type'
import { mapActions } from 'vuex'

export default {
  name: "Leaf",
  props: ['item'],
  methods: {
    ...mapActions('todo', {
      DONE_TODO,
      REMOVE_TODO
    })
  }
}
</script>

<style scoped>
.center {
  margin: 0 auto;
  overflow: hidden;
  width: 20%;
}

div.done {
  text-decoration: line-through;
}
 
div.lhand {
  float: left;
  /* width: 40%; */
}
 
div.rhand {
  float: right;
  /* width: 15%; */
}
</style>