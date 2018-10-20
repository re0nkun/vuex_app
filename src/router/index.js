import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Counter from '@/components/Counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/counter',
      path: '/',
      name: 'Counter',
      component: Counter
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
