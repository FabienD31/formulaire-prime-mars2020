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
        <b-navbar-nav class="ml-auto h1 off">
          <b-icon-power href="/" @click="signOut" variant="info"></b-icon-power>
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
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Tu es deconnecté");
        })
        .catch((er) => {
          this.error = er.message;
        });
    },
  },
};
</script>

<style scoped>
.off :hover {
  cursor: pointer;
}
</style>
