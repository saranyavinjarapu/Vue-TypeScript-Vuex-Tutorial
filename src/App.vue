<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="username" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld,
  },
  computed: {
    helloMessage: {
      get(): string {
        return this.$store.state.helloMessage;
      },
    },
    username: {
      get(): string {
        return this.$store.getters.getUserName;
      },
      set(value: string): void {
        this.$store.commit("SET_USERNAME", value);
      },
    },
  },
  mounted() {
    setTimeout(
      function (scope) {
        scope.username = "Hi Bro, SetTimeout is working fine.";
      },
      3000,
      this
    );
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
