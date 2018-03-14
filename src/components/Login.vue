<template>
  <div class="parentDiv">
      <div>
        <!-- getters 里边初始化注入v-model -->
        <h2>{{pageInfo}}</h2>
        <div>帐 号：<input type="text" class="iptUser" v-model="pageUser.userName"/></div>
        <div>密 码：<input type="password" class="iptUser" v-model="pageUser.passWord"/></div>
      </div>
      <div class="tips">{{isTips}}</div>
      <div class="sub"><button @click="login" class="btn">登录</button></div>
      <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import Loading from './Loading.vue'
  export default {
    name: 'Login',
    data(){
      return {
        pageInfo:"LOGIN PAGE",
      }
    },
    created:function(){
       //console.log("create...")
    },
    components:{
      Loading
    },
    methods: {
      ...mapActions([ 'login'])
    },
    mounted(){
      //console.log("mounted...")
    },

    updated:function(){
      //console.log("updated...")
    },

    computed: {
      ...mapGetters({pageUser:'stateUser', isLoading:'stateLoading', isTips:"stateTips"}) //引入getters.js的 stateUser
    }
  }
</script>

<style>
  body{ font-size: 14px; padding: 0; margin: 0;}
  .topMenu{ padding: 20px 0;}
  .iptUser{width: 300px; height: 30px; margin:20px 0; padding-left: 5px; font-size:16px; background: #fff; border: #ccc solid 1px; line-height: 30px;}
  .parentDiv{ width:400px; height: 100%; margin:0 auto;}
  .tips{ padding: 10px 0; color: #f04d4e;}
  .sub{ width: 100%; text-align: center;}
  .btn{ width: 80px; height: 30px; margin: 20px auto;  background: #0a80db; cursor: pointer; border: none; color: #fff;}
</style>
