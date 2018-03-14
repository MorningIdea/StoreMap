import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import LoginVueResource from '@/components/Login-vue-resource'
import UserCenter from '@/components/UserCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/Login2',
      name: 'Login222',
      component: LoginVueResource,
    },
    {
      path: '/UserCenter',
      name: 'UserCenterAAA',
      component: UserCenter,
      meta:{
        requireAuth:true
      }
    }
  ]
})
