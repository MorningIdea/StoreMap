<template>
  <div class="parentDiv2">
      <h3>User Center</h3>
      <p>welcome，{{user}}</p> <!-- 这里的user是从下面computed的user()方法中得到 -->
      <div style="background: #eee">
          <ul id="example-1">
              <!-- mounted发送action请求，computed接受数据变更。 -->
              <li v-for="item in tempList">
              <!-- <li v-for="item in stateDataList"> -->
                  <span>{{ item.title }}</span><i>{{ item.dates }}</i><em>{{ item.url }}</em>
              </li>
          </ul>
      </div>
      <p><a href="javascript:void(0);" @click="logout">退出</a></p>
  </div>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from "vuex";
  export default {
      data(){
          return{
              list:[]
          }
      },

      mounted: function () {
          this.showDataList();//发送请求，获取列表数据
      },

      computed:{
        user:function (){
          //return this.$store.state.user; //刷新浏览器页面，值会消失
          return sessionStorage.getItem("userName")
        },
        //...mapGetters(["stateDataList"])
        ...mapGetters({
          tempList:'stateDataList' //根据getters的stateDataList，赋值给tempList
        })
      },

      methods:{
          ...mapActions(["showDataList","logout"])
      }
  }
</script>

<style>

</style>
