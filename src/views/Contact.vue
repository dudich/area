<template>
  <div class="contact bg-dark-blue">
    <contact-map></contact-map>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 xl4 offset-md0 offset-xl2 class="pa-3">
          <contact-text></contact-text>
        </v-flex>

        <v-flex xs12 sm6 xl4 class="pa-3">
          <contact-form></contact-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import ContactForm from '../components/Contact/ContactForm'
  import ContactText from '../components/Contact/ContactText'
  import ContactMap from '../components/Contact/ContactMap'

  export default {
    name: 'contact',

    components: {
      ContactForm,
      ContactText,
      ContactMap
    }
  }
</script>