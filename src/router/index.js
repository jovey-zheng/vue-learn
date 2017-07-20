import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Counter from '@/components/Counter'
import Transform from '@/components/transform'
import Preview from '@/components/preview'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/counter',
      component: Counter
    },
    {
      path: '/transform',
      component: Transform
    },
    {
      path: '/preview',
      component: Preview
    }
  ]
})
