<template>
  <div class="my-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <!-- <th></th> -->
          <th>Nom</th>
          <th>Téléphone</th>
          <th>Email</th>
          <th>Q1</th>
          <th>Q2</th>
          <th>Q3</th>
          <th>Q4</th>
          <th>Q5</th>
        </tr>
      </thead>
      <tbody v-for="(item, itemIndex) in forms" v-bind:key="itemIndex">
        <!-- <th>
          <b-icon-trash-fill type="button" @click="del"> </b-icon-trash-fill>
        </th> -->
        <td>{{ item.user.name }}</td>
        <td>{{ item.user.phone }}</td>
        <td>{{ item.user.email }}</td>
        <td>{{ item.question1 }}</td>
        <td>{{ item.question2 }}</td>
        <td>{{ item.question3 }}</td>
        <td>{{ item.question4 }}</td>
        <td>{{ item.question5 }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";
export default {
  data() {
    return {
      forms: [
        {
          email: null,
          name: null,
          phone: null,
        },
      ],
      question1: [],
      question2: null,
      question3: null,
      question4: null,
      question5: null,
    };
  },
  mounted() {
    this.getSecrets();
    axios
      .get(
        "https://formulaire-prime-48b56-default-rtdb.europe-west1.firebasedatabase.app/users.json"
      )
      .then((response) => (this.forms = response.data))
      .catch((error) => console.log(error));
  },
  methods: {
    async getSecrets() {
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      this.secrets = await this.$axios.get(
        "http://localhost:8080/DataForm",
        config
      );
      this.secrets = this.secrets.data;
    },
    // del() {
    //   axios
    //     .delete(
    //       "https://formulaire-prime-48b56-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    //     )
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error));
    // },
  },
};
</script>
<style scoped>
table :hover {
  background-color: #fce1cb;
}
</style>
