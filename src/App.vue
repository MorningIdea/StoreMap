<template>
  <div id="app">
    <Dheader></Dheader>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    'Dheader': (resolve) => {
      require(['./components/Header'], resolve)
    }
  }
}
</script>

<style>
#app {
  width:100%;
  height: 100%;
  /*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  */
}
</style>
