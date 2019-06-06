<template>
  <router-view v-if="!$route.meta.keepAlive"></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  created() {
    var s = '123123';
    s.startsWith('123');
    s.padStart('123');
  },
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
