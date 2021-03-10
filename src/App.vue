<template>
  <div id="app">
    <TheHeader />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import TheHeader from "./components/TheHeader";
export default {
  name: "app",
  components: {
    TheHeader,
  },
  data() {
    return {
      log: false,
    };
  },
  mounted() {
    this.logg();
  },
  methods: {
    logg() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.log = true;
        } else {
          this.log = false;
        }
      });
    },
  },
};
</script>

<style></style>
