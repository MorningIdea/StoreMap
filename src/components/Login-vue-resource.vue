<template>
  <div class="parentDiv">
      <div>
        <h2>{{pageInfo}}</h2>
        <div>帐 号：<input type="text" class="iptUser" v-model="iptUserName"/></div>
        <div>密 码：<input type="password" class="iptUser" v-model="iptUserPwd"/></div>

      </div>
      <div class="tips">{{isTips}}</div>
      <div class="sub"><button @click="login" class="btn">登录</button></div>
      <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
  import Loading from './Loading.vue'
  export default {
    name: 'Login',
    components:{
      Loading
    },
    data(){
         return{
           pageInfo:"Vue-Resource TEST",
           iptUserName:"",
           iptUserPwd:"",
           isTips:"",
           isLoading:false
         }
    },

    methods:{
        login:function(){
            if(this.iptUserName.trim() == "" || this.iptUserPwd== ""){
              this.isTips = "请输入用户名和密码！";
              return false;
            }

            this.isLoading = true;
            var successCallback = function(response){
                this.isLoading = false;
                var data = response.data;
                var result = data.result;
                if(result == true) {
                  this.isTips = "";
                  sessionStorage.setItem("userName", this.iptUserName);
                  this.$router.push({path: "/UserCenter", query: {usrName: this.iptUserName}});
                }else{
                  this.isTips = data.tips;
                  return false;
                }
            }
            var errorCallback = function(error){
               this.isLoading = false;
               this.isTips = error;
            }

            var params = {
              userName:this.iptUserName,
              userPwd:this.iptUserPwd
            }
            this.$http.post('http://localhost/1ajaxPHPTest/login.php', params).then(successCallback, errorCallback);
        }
    }
  }
</script>

<style>
  body{ font-size: 14px; padding: 0; margin: 0;}
  .iptUser{width: 300px; height: 30px; margin:20px 0; padding-left: 5px; font-size:16px; background: #fff; border: #ccc solid 1px; line-height: 30px;}
  .parentDiv{ width:400px; height: 100%; margin:0 auto;}
  .tips{ padding: 10px 0; color: #f04d4e;}
  .sub{ width: 100%; text-align: center;}
  .btn{ width: 80px; height: 30px; margin: 20px auto;  background: #0a80db; cursor: pointer; border: none; color: #fff;}
</style>
