<template>
  <div>
    <b-navbar relative="top" type="dark" variant="dark">
      <b-navbar-brand to="/">Formulaire</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="loggedIn" to="/DataForm">Données</b-nav-item>
          <b-nav-item v-if="!loggedIn" to="/adminForm">Admin</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-if="loggedIn" class="ml-auto h1 off">
          <b-icon-power to="/" @click="signOut" variant="white"></b-icon-power>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase";
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
        await firebase.auth().signOut();
        this.$router.push("/");
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
