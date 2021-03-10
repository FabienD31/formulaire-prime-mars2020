<template>
  <div>
    <b-navbar relative="top" type="dark" variant="dark">
      <b-navbar-brand href="/">Formulaire</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/DataForm">Data</b-nav-item>
          <b-nav-item href="/admin">Admin</b-nav-item>
          <b-nav-item href="/adminForm">Connectez-vous</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-if="loggedIn" class="ml-auto h1 off">
          <b-icon-power href="/" @click="signOut" variant="info"></b-icon-power>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      error: false,
      loggedIn: false,
    };
  },
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      });
    },
    async signOut() {
      try {
        const off = await firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({ path: "/" });
          });
        console.log(off);
      } catch (er) {
        this.error = er.message;
      }
    },
  },
};
</script>

<style scoped>
.off :hover {
  cursor: pointer;
}
</style>
