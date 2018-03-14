<template>
    <div class="topMenu">
      <ul>
        <li v-for="bar in barList" @click="choiceUrl(bar.url)">
          <router-link :to="{ path:bar.url, query:{userId:123666} }"  :class="curUrl===bar.url?'selected':''">{{bar.title}}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>

  import router from '../router'; //引入路由对象
  export default {
    name: 'Login',
    data(){
      return {
        curUrl:"",
        pageInfo:"LOGIN PAGE",
        barList: [{
          title: '登录B',
          url: '/Login2',
        }, {
          title: '说你好',
          url: '/HelloWorld',
        }, {
          title: '登录A',
          url: '/Login',
        }]
      }
    },
    mounted () {
      console.log("nav  mounted...")
      var curPath = this.$route.path
      console.log(router) //得到整个路由对象
      var routeArr = router.options.routes; //路由数组
      var len = routeArr.length;
      if(len > 0){
          for(var i=0; i<len; i++){
             var path = routeArr[i].path;
             if(curPath === path){
               this.curUrl =  path;
               break;
             }
          }
      }
    },
    methods: {
      choiceUrl (url) {
        console.log("url=" + url)
        this.curUrl = url;
      }
    }
  }
</script>

<style>
  body{ font-size: 14px; padding: 0; margin: 0;}
  li,ol,ul{ list-style: none;}
  a{ text-decoration: none}
  .topMenu{ width: 100%; display: inline-block; padding: 20px 0; background: #f0f3f5}
  .topMenu ul{ width: 360px; margin: 0 auto;}
  .topMenu li{ float:left; margin-right: 30px;}
  .topMenu li a{ color:#aaa;}
  .topMenu li a.selected{ color: #27a}
</style>
