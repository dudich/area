<template>
  <v-layout class="confirm-dialog bg-dark-blue pt-5" row>
    <v-flex xl6 offset-xl3>
    <v-container>
      <v-layout align-center justify-center row wrap>
        <v-flex xs12 sm5 md3 lg3>
          <p class="confirm-dialog__message text-light-green font-weight-bold" v-html="confirmMessage"></p>
        </v-flex>
        <v-flex xs12 sm2 md2 lg1>
          <div class="confirm-dialog__print text-xs-center">
            <i class="fas fa-print mb-2"></i>
            <span class="font-weight-bold">PDF</span>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'confirm-dialog',

    computed: {
      confirmMessage() {
        return this.$route.path === `/hold/${ this.$route.params.id }` ?
          'Hold Confirmed. <br> ' +
          'This will be valid from 24 hours.' :
          `Booking Confirmed! <br>
           Your booking confirmation has been emailed to you.<br>
            We will be in touch within the next 48 hours to talk about your catering options`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .confirm-dialog {
    &__print {
      color: #fff;
      cursor: pointer;

      i {
        font-size: 60px;
      }

      span {
        display: block;
        font-size: 18px;
      }
    }
  }
</style>