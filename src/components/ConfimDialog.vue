<template>
  <v-container>
    <v-layout>
      <v-flex xs6 sm4 offset-xs3 offset-sm4>
        <p v-text="confirmMessage"></p>
      </v-flex>
      <v-flex xs6 sm2 offset-xs3 offset-sm0>
        <i class="fas fa-print"></i>
        <span>PDF</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'confirm-dialog',

    computed: {
      confirmMessage() {
        return this.$route.path === `/hold/${ this.$route.params.id }` ? 'Hold Confirmed. This will be valid from 24 hours.' : 'Booking Confirmed! Tour booking confirmation has been emailed to you. We will be in touch within the next 48 hours' +
          'to talk about your catering options'
      }
    }
  }
</script>