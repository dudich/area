<template>
  <div>
    <div class="terms-modal-content" v-if="terms">
      <h2 class="text-white mb-4 font-weight-regular">Terms and Conditions</h2>
      <p class="terms-modal-content__text text-white text-xs-left mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Amet, cum excepturi exercitationem fugiat incidunt laborum nihil nisi numquam quam ratione repellendus similique, ut vitae?
        A asperiores hic laborum rem voluptatibus.
      </p>
      <v-layout row justify-space-between>
        <v-flex xs5>
          <v-btn
            class="bg-blue no-text-transform"
            @click="decline"
            round
            dark
            block
            >Decline</v-btn>
        </v-flex>
       <v-flex xs5>
         <v-btn
           class="bg-blue no-text-transform"
           @click="accept"
           round
           dark
           block
         >Accept</v-btn>
       </v-flex>

      </v-layout>
    </div>
    <div class="confirm-modal-content" v-if="!terms">
      <h2 class="text-white mb-4 font-weight-regular">Confirming {{ caption }}</h2>
      <ball-spin-fade-loader color="#289FD9" size="20px"></ball-spin-fade-loader>
    </div>
  </div>
</template>

<script>
  import {
    DECLINE_TERMS,
    ACCEPT_TERMS,
    CLOSE_CONFIRMATION_MODAL
  } from "../../store/actionTypes";

  export default {
  name: 'confirm-modal-content',

  props: {
    terms: {
      type: Boolean,
      required: true
    },
    caption: {
      type: String,
      required: true
    }
  },

  methods: {
    decline() {
      EventBus.$emit(DECLINE_TERMS)
    },
    accept() {
      this.$emit(ACCEPT_TERMS);
      setTimeout(() => EventBus.$emit(CLOSE_CONFIRMATION_MODAL), 3000)
    }
  }
}
</script>

<style lang="scss">
  .confirm-modal-content {
    padding: 120px 0 100px;
  }

  .terms-modal-content {
    padding: 30px 60px;

    &__text {
      font-size: 11px;
    }
  }
</style>