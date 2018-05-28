import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Date from '@/components/Date'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Date',
      component: Date
    }
  ]
})
