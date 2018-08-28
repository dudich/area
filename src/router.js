import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/select-event',
      name: 'select-event',
      component: () => import('./views/SelectEvent')
    },
    {
      path: '/select-package',
      name: 'select-package',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SelectPackage')
    },
    {
      path: '/hold/:id',
      name: 'hold',
      component: () => import('./views/Hold')
    },
    {
      path: '/book/:id',
      name: 'book',
      component: () => import('./views/Book')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact')
    }
  ]
})
