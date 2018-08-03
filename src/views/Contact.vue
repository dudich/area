<template>
  <div class="contact">
    <contact-map></contact-map>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 class="pa-3">
          <contact-text></contact-text>
        </v-flex>

        <v-flex xs12 md6 class="pa-3">
          <contact-form></contact-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import ContactForm from '../components/ContactForm'
  import ContactText from '../components/ContactText'
  import ContactMap from '../components/ContactMap'

  export default {
    name: 'contact',

    components: {
      ContactForm,
      ContactText,
      ContactMap
    }
  }
</script>