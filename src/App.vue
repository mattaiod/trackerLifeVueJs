<template>
  <v-app id="app">
    <v-main>
      <Menu class="d-flex justify-center"/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  name: 'App',

  components: {
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
