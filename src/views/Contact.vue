<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6>

      </v-flex>

      <v-flex xs12 md6>
        <contact-form></contact-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ContactForm from '../components/ContactForm'

  export default {
    name: 'contact',

    components: {
      ContactForm
    }
  }
</script>