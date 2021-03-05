<template>
  <div>
    <TheHeader />
    <h3 class="mt-5 text-center mb-5">
      Formulaire digitalisation
    </h3>
    <h6><strong>Question 1 : </strong></h6>
    <p>
      En terme de digitalisation, vous souhaitez réaliser quels type de travaux
      ?
      <small>(plusieurs choix possibles)</small>
    </p>
    <!-- checkbox 1-->
    <b-form-checkbox
      id="checkbox1"
      v-model="question1[0]"
      name="checkbox1"
      value="true"
      unchecked-value="false"
    >
      Vente, promotion - Site e-commerce ou promotionnel
    </b-form-checkbox>
    <!-- checkbox 2-->
    <b-form-checkbox
      id="checkbox2"
      v-model="question1[1]"
      name="checkbox2"
      value="true"
      unchecked-value="false"
    >
      Vente, promotion - Contenus
    </b-form-checkbox>
    <!-- checkbox 3-->
    <b-form-checkbox
      id="checkbox-3"
      v-model="question1[2]"
      name="checkbox-3"
      value="true"
      unchecked-value="false"
    >
      Vente, promotion - Paiement en ligne
    </b-form-checkbox>
    <!-- checkbox 4-->
    <b-form-checkbox
      id="checkbox-4"
      v-model="question1[3]"
      name="checkbox-4"
      value="true"
      unchecked-value="false"
    >
      Vente, promotion - Place de marché
    </b-form-checkbox>
    <!-- checkbox 5-->
    <b-form-checkbox
      id="checkbox-5"
      v-model="question1[4]"
      name="checkbox-5"
      value="true"
      unchecked-value="false"
    >
      Vente, promotion - Visibilité internet
    </b-form-checkbox>
    <!-- checkbox 6-->
    <b-form-checkbox
      id="checkbox-6"
      v-model="question1[5]"
      name="checkbox-6"
      value="true"
      unchecked-value="false"
    >
      Gestion - Solution de réservation, prise de rendez-vous
    </b-form-checkbox>
    <!-- checkbox 7-->
    <b-form-checkbox
      id="checkbox-7"
      v-model="question1[6]"
      name="checkbox-7"
      value="true"
      unchecked-value="false"
    >
      Gestion - Gestion des stocks, des commandes, des livraisons
    </b-form-checkbox>
    <!-- checkbox 8-->
    <b-form-checkbox
      id="checkbox-8"
      v-model="question1[7]"
      name="checkbox-8"
      value="true"
      unchecked-value="false"
    >
      Gestion - Logiciel de caisse
    </b-form-checkbox>
    <!-- checkbox 9-->
    <b-form-checkbox
      id="checkbox-9"
      v-model="question1[8]"
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
      v-model="question1[9]"
      name="checkbox-10"
      value="true"
      unchecked-value="false"
    >
      Relation client - Gestion des clients
    </b-form-checkbox>
    <!-- checkbox 11-->
    <b-form-checkbox
      id="checkbox-11"
      v-model="question1[10]"
      name="checkbox-11"
      value="true"
      unchecked-value="false"
    >
      Relation client - Outil de gestion en masse des courriers électroniques,
      de lettres d'information
    </b-form-checkbox>

    <!--pour le test-->
    <div>
      State: <strong>{{ question1 }}</strong>
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader";
export default {
  components: TheHeader,
  data() {
    return {
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
