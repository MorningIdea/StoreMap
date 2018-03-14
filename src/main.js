// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

//VueResource Test
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true; //允许json application/x-www-form-urlencoded作为MIME type
Vue.http.options.emulateHTTP = true; //Web服务器处理PUT, PATCH和DELETE这种REST风格的请求

// 全局导航钩子
router.beforeEach((to, from, next) => {
  //console.log("aa " + sessionStorage.getItem("userName"))
  if (to.meta.requireAuth) {
    if(sessionStorage.getItem("userName") == null) {
      next({
        path: '/Login',
        query: {
          redirect:to.fullPath
        }
      })
    }else{
      next();
    }
  }
  else {
    next();
  }
})


//判断object是否为空
function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
