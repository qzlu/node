import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import notFound from './views/404.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
            path:"/user/:id",
            component:() => import("./views/user.vue")
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
        path:"/chat",
        name:"chat",
        component: () => import("./views/chat.vue")
    },
    {
        path:"*",
        name:'notFound',
        component:notFound,
        meta: {
            title: '404-页面丢了'
        }
    },

  ]
})
