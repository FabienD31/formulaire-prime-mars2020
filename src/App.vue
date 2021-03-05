<template>
  <div id="app">
    <TheHeader />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
#app {
  background-color: rgba(7, 7, 7, 0.185);
}
</style>
