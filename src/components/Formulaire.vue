<template>
  <div>
    <h3 class="mt-5 text-center mb-5">
      Formulaire digitalisation
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
          value="true"
          unchecked-value="false"
        >
          Vente, promotion - Site e-commerce ou promotionnel
        </b-form-checkbox>
        <!-- checkbox 2-->
        <b-form-checkbox
          id="checkbox2"
          v-model="totalForm.question1[1]"
          name="checkbox2"
          value="true"
          unchecked-value="false"
        >
          Vente, promotion - Contenus
        </b-form-checkbox>
        <!-- checkbox 3-->
        <b-form-checkbox
          id="checkbox-3"
          v-model="totalForm.question1[2]"
          name="checkbox-3"
          value="true"
          unchecked-value="false"
        >
          Vente, promotion - Paiement en ligne
        </b-form-checkbox>
        <!-- checkbox 4-->
        <b-form-checkbox
          id="checkbox-4"
          v-model="totalForm.question1[3]"
          name="checkbox-4"
          value="true"
          unchecked-value="false"
        >
          Vente, promotion - Place de marché
        </b-form-checkbox>
        <!-- checkbox 5-->
        <b-form-checkbox
          id="checkbox-5"
          v-model="totalForm.question1[4]"
          name="checkbox-5"
          value="true"
          unchecked-value="false"
        >
          Vente, promotion - Visibilité internet
        </b-form-checkbox>
        <!-- checkbox 6-->
        <b-form-checkbox
          id="checkbox-6"
          v-model="totalForm.question1[5]"
          name="checkbox-6"
          value="true"
          unchecked-value="false"
        >
          Gestion - Solution de réservation, prise de rendez-vous
        </b-form-checkbox>
        <!-- checkbox 7-->
        <b-form-checkbox
          id="checkbox-7"
          v-model="totalForm.question1[6]"
          name="checkbox-7"
          value="true"
          unchecked-value="false"
        >
          Gestion - Gestion des stocks, des commandes, des livraisons
        </b-form-checkbox>
        <!-- checkbox 8-->
        <b-form-checkbox
          id="checkbox-8"
          v-model="totalForm.question1[7]"
          name="checkbox-8"
          value="true"
          unchecked-value="false"
        >
          Gestion - Logiciel de caisse
        </b-form-checkbox>
        <!-- checkbox 9-->
        <b-form-checkbox
          id="checkbox-9"
          v-model="totalForm.question1[8]"
          name="checkbox-9"
          value="true"
          unchecked-value="false"
        >
          Gestion - Hébergement, stockage de données, gestion du nom de domaine,
          outils de cybersécurité
        </b-form-checkbox>
        <!-- checkbox 10-->
        <b-form-checkbox
          id="checkbox-10"
          v-model="totalForm.question1[9]"
          name="checkbox-10"
          value="true"
          unchecked-value="false"
        >
          Relation client - Gestion des clients
        </b-form-checkbox>
        <!-- checkbox 11-->
        <b-form-checkbox
          id="checkbox-11"
          v-model="totalForm.question1[10]"
          name="checkbox-11"
          value="true"
          unchecked-value="false"
        >
          Relation client - Outil de gestion en masse des courriers
          électroniques, de lettres d'information
        </b-form-checkbox>

        <!--pour le test-->
        <div>
          State: <strong>{{ totalForm.question1 }}</strong>
        </div>
      </div>

      <!-- QUESTION 2 -->

      <div class="question py-3 px-3 my-4">
        <b-form-group>
          <p>
            <strong>Question 2 : </strong>Votre entreprise est immatriculée en
            France ?
          </p>
          <b-form-radio v-model="totalForm.question2" value="true"
            >Oui</b-form-radio
          >
          <b-form-radio v-model="totalForm.question2" value="false"
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
          <b-form-radio v-model="totalForm.question3" value="true"
            >Oui</b-form-radio
          >
          <b-form-radio v-model="totalForm.question3" value="false"
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
          <b-form-radio v-model="totalForm.question4" value="true"
            >Oui</b-form-radio
          >
          <b-form-radio v-model="totalForm.question4" value="false"
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
          <b-form-radio v-model="totalForm.question5" value="true"
            >Oui</b-form-radio
          >
          <b-form-radio v-model="totalForm.question5" value="false"
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
            v-model="totalForm.form.name"
            required
          >
          </b-form-input>
          <b-form-input
            placeholder="Email"
            class="my-2"
            type="email"
            v-model="totalForm.form.email"
            required
          ></b-form-input>
          <b-form-input
            v-model="totalForm.form.phone"
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
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ totalForm }}</pre>
      </b-card>
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
          (this.checkbox1 = false),
          (this.checkbox2 = false),
          (this.checkbox3 = false),
          (this.checkbox4 = false),
          (this.checkbox5 = false),
          (this.checkbox6 = false),
          (this.checkbox7 = false),
          (this.checkbox8 = false),
          (this.checkbox9 = false),
          (this.checkbox10 = false),
          (this.checkbox11 = false),
        ],
        question2: true,
        question3: true,
        question4: true,
        question5: true,
        form: {
          name: "",
          email: "",
          phone: "",
        },
      },
      errors: [],
    };
  },
  methods: {
    // submitForm(event) {
    //   event.preventDefault();
    //   this.verifyForm()
    //     .then(() => {
    //       //emplacement de l'envoi au back (par exemple la bdd)
    //       console.log({ ...this.form }); //"..." form es6 pour ne pas récuperer les getteur et setteur
    //     })
    //     .catch(() => {
    //       console.log("error");
    //     });
    // },
    verifyForm() {
      this.errors = [];
      if (!this.totalForm.form.name) {
        this.errors.push("Nom manquant ! ");
      }
      if (!this.totalForm.form.email) {
        this.errors.push("Email manquant ! ");
      }
      if (!this.totalForm.email.includes("@")) {
        this.errors.push("Email non conforme ! ");
      }
      if (!this.totalForm.form.phone) {
        this.errors.push("Téléphone manquant ! ");
      }
    },
    submitForm(e) {
      e.preventDefault();
      this.verifyForm();
      axios
        .post(
          "https://formulaire-prime-48b56-default-rtdb.europe-west1.firebasedatabase.app/users.json",
          this.totalForm
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.question {
  background-color: rgba(240, 127, 14, 0.24);
  border-radius: 25px;
}
</style>
