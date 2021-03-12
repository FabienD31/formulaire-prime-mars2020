<template>
  <div>
    <h3 class="mt-5 text-center mb-5">
      Etes-vous éligible au chèque numérique de 500 € ?
    </h3>
    <b-form @submit="submitForm" class="">
      <div class="question py-3 px-3">
        <h6><strong>Question 1 : </strong></h6>
        <p>
          En terme de digitalisation, vous souhaitez réaliser quels type de
          travaux ?
          <small>(plusieurs choix possibles)</small>
        </p>
        <!-- checkbox 1-->
        <b-form-checkbox
          id="checkbox1"
          v-model="totalForm.question1[0]"
          name="checkbox1"
          value="oui"
          unchecked-value="NON"
        >
          Vente, promotion - Site e-commerce ou promotionnel
        </b-form-checkbox>
        <!-- checkbox 2-->
        <b-form-checkbox
          id="checkbox2"
          v-model="totalForm.question1[1]"
          name="checkbox2"
          value="oui"
          unchecked-value="NON"
        >
          Vente, promotion - Contenus
        </b-form-checkbox>
        <!-- checkbox 3-->
        <b-form-checkbox
          id="checkbox-3"
          v-model="totalForm.question1[2]"
          name="checkbox-3"
          value="oui"
          unchecked-value="NON"
        >
          Vente, promotion - Paiement en ligne
        </b-form-checkbox>
        <!-- checkbox 4-->
        <b-form-checkbox
          id="checkbox-4"
          v-model="totalForm.question1[3]"
          name="checkbox-4"
          value="oui"
          unchecked-value="NON"
        >
          Vente, promotion - Place de marché
        </b-form-checkbox>
        <!-- checkbox 5-->
        <b-form-checkbox
          id="checkbox-5"
          v-model="totalForm.question1[4]"
          name="checkbox-5"
          value="oui"
          unchecked-value="NON"
        >
          Vente, promotion - Visibilité internet
        </b-form-checkbox>
        <!-- checkbox 6-->
        <b-form-checkbox
          id="checkbox-6"
          v-model="totalForm.question1[5]"
          name="checkbox-6"
          value="oui"
          unchecked-value="NON"
        >
          Gestion - Solution de réservation, prise de rendez-vous
        </b-form-checkbox>
        <!-- checkbox 7-->
        <b-form-checkbox
          id="checkbox-7"
          v-model="totalForm.question1[6]"
          name="checkbox-7"
          value="oui"
          unchecked-value="NON"
        >
          Gestion - Gestion des stocks, des commandes, des livraisons
        </b-form-checkbox>
        <!-- checkbox 8-->
        <b-form-checkbox
          id="checkbox-8"
          v-model="totalForm.question1[7]"
          name="checkbox-8"
          value="oui"
          unchecked-value="NON"
        >
          Gestion - Logiciel de caisse
        </b-form-checkbox>
        <!-- checkbox 9-->
        <b-form-checkbox
          id="checkbox-9"
          v-model="totalForm.question1[8]"
          name="checkbox-9"
          value="oui"
          unchecked-value="NON"
        >
          Gestion - Hébergement, stockage de données, gestion du nom de domaine,
          outils de cybersécurité
        </b-form-checkbox>
        <!-- checkbox 10-->
        <b-form-checkbox
          id="checkbox-10"
          v-model="totalForm.question1[9]"
          name="checkbox-10"
          value="oui"
          unchecked-value="NON"
        >
          Relation client - Gestion des clients
        </b-form-checkbox>
        <!-- checkbox 11-->
        <b-form-checkbox
          id="checkbox-11"
          v-model="totalForm.question1[10]"
          name="checkbox-11"
          value="oui"
          unchecked-value="NON"
        >
          Relation client - Outil de gestion en masse des courriers
          électroniques, de lettres d'information
        </b-form-checkbox>
      </div>

      <!-- QUESTION 2 -->

      <div class="question py-3 px-3 my-4">
        <b-form-group>
          <p>
            <strong>Question 2 : </strong>Votre entreprise est immatriculée en
            France ?
          </p>
          <b-form-radio v-model="totalForm.question2" value="oui"
            >Oui</b-form-radio
          >
          <b-form-radio v-model="totalForm.question2" value="NON"
            >Non</b-form-radio
          >
        </b-form-group>

        <div class="mt-3">
          Selected: <strong>{{ totalForm.question2 }}</strong>
        </div>
      </div>

      <!-- QUESTION 3 -->

      <div class="question py-3 px-3 my-4">
        <b-form-group>
          <p>
            <strong>Question 3 : </strong>Vous réalisez un chiffre d'affaires
            annuel inférieur à 2 millions d'euros HT ?
          </p>
          <b-form-radio v-model="totalForm.question3" value="oui"
            >Oui</b-form-radio
          >
          <b-form-radio v-model="totalForm.question3" value="NON"
            >Non</b-form-radio
          >
        </b-form-group>

        <div class="mt-3">
          Selected: <strong>{{ totalForm.question3 }}</strong>
        </div>
      </div>

      <!-- QUESTION 4 -->

      <div class="question py-3 px-3 my-4">
        <b-form-group>
          <p><strong>Question 4 : </strong>Vous avez moins de 11 salariés ?</p>
          <b-form-radio v-model="totalForm.question4" value="oui"
            >Oui</b-form-radio
          >
          <b-form-radio v-model="totalForm.question4" value="NON"
            >Non</b-form-radio
          >
        </b-form-group>

        <div class="mt-3">
          Selected: <strong>{{ totalForm.question4 }}</strong>
        </div>
      </div>

      <!-- QUESTION 5 -->

      <div class="question py-3 px-3 my-4">
        <b-form-group>
          <p>
            <strong>Question 5 : </strong>Vous avez subi une interdiction
            d'accueil du public lors du confinement de novembre 2020 ?
          </p>
          <b-form-radio v-model="totalForm.question5" value="oui"
            >Oui</b-form-radio
          >
          <b-form-radio v-model="totalForm.question5" value="NON"
            >Non</b-form-radio
          >
        </b-form-group>

        <div class="mt-3">
          Selected: <strong>{{ totalForm.question5 }}</strong>
        </div>
      </div>

      <!-- QUESTION 6 -->
      <div class="question py-3 px-3">
        <p>
          <strong>Question 6 : </strong>Pour vous envoyer les résultats du test
          nous avons besoin :
        </p>
        <b-form class="mx-5">
          <b-form-input
            placeholder="Nom"
            class="my-2"
            type="text"
            v-model="totalForm.user.name"
            required
          >
          </b-form-input>
          <b-form-input
            placeholder="Email"
            class="my-2"
            type="email"
            v-model="totalForm.user.email"
            required
          ></b-form-input>
          <b-form-input
            v-model="totalForm.user.phone"
            placeholder="Téléphone"
            class="my-2"
            type="tel"
            required
          ></b-form-input>
        </b-form>
      </div>
      <div
        v-if="errors.length"
        class="alert alert-danger my-3 text-center"
        role="alert"
      >
        <div v-for="error in errors" :key="error">{{ error }}</div>
      </div>
      <div class="text-center">
        <b-button
          type="submit"
          variant="success"
          class="my-4 justify-content-center"
          >Valider</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      totalForm: {
        question1: [
          (this.checkbox1 = "NON"),
          (this.checkbox2 = "NON"),
          (this.checkbox3 = "NON"),
          (this.checkbox4 = "NON"),
          (this.checkbox5 = "NON"),
          (this.checkbox6 = "NON"),
          (this.checkbox7 = "NON"),
          (this.checkbox8 = "NON"),
          (this.checkbox9 = "NON"),
          (this.checkbox10 = "NON"),
          (this.checkbox11 = "NON"),
        ],
        question2: "oui",
        question3: "oui",
        question4: "oui",
        question5: "oui",
        user: {
          name: "",
          email: "",
          phone: "",
        },
      },
      errors: [],
    };
  },
  methods: {
    verifyForm() {
      this.errors = [];
      if (this.totalForm.user.name === "") {
        this.errors.push("Nom manquant ! ");
      } else if (this.totalForm.user.email === "") {
        this.errors.push("Email manquant ! ");
      } else if (!this.totalForm.user.phone) {
        this.errors.push("Téléphone manquant ! ");
      } else if (this.totalForm.user.phone.length != 10) {
        this.errors.push("Le numéro doit comporter 10 chiffres");
      } else if (this.totalForm.user.email.includes("@") === false) {
        this.errors.push("L'adresse email n'est pas valide");
      } else {
        return true;
      }
    },
    submitForm(e) {
      e.preventDefault();
      if (this.verifyForm() === true) {
        alert("Le formulaire a été envoyé avec succès !");
        axios.post(
          "https://formulaire-prime-48b56-default-rtdb.europe-west1.firebasedatabase.app/users.json",
          this.totalForm
        );
      }
    },
  },
};
</script>

<style scoped>
.question {
  background-color: #fcd21d;
  border-radius: 25px;
}
</style>
