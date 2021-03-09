<template>
  <div>
    <b-navbar relative="top" type="dark" variant="dark">
      <b-navbar-brand href="/">Formulaire</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/admin">Admin</b-nav-item>
          <b-nav-item href="/adminForm">Connectez-vous</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="/adminForm" @click="signOut"
            >Déconnection</b-nav-item
          >
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
          console.log("tu es deco");
        })
        .catch((er) => {
          this.error = er.message;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
