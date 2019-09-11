import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes
})
