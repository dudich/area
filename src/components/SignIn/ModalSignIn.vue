<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" :width="width">
      <i class="fas fa-times text-white" @click="closeModal"></i>
      <component :is="currentView" @FORGOT_PASSWORD="changeView"></component>
    </v-dialog>
  </div>
</template>

<script>
  import {
    OPEN_SIGN_IN_MODAL,
    CLOSE_SIGN_IN_MODAL
  } from "../../store/actionTypes";
  import SignIn from "./SignIn"
  import ForgotPassword from "./ForgotPassword"

  export default {
    name: 'modal-sign-in',

    props: {
      width: {
        type: Number,
        required: true
      }
    },

    data() {
      return {
        dialog: false,
        currentView: null
      }
    },

    mounted() {
      EventBus.$on(OPEN_SIGN_IN_MODAL, () => {
        this.dialog = true;
        this.currentView = SignIn;
      });
      EventBus.$on(CLOSE_SIGN_IN_MODAL, () => {
        this.dialog = false;
      });
    },

    methods: {
      changeView() {
        this.currentView = ForgotPassword;
      },
      closeModal() {
        this.dialog = false;
      }
    },

    components: {
      SignIn,
      ForgotPassword
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .v-dialog {
    position: relative;
    border-radius: 50px;
    background-color: $dark-blue;

    .fas.fa-times {
      position: absolute;
      right: 30px;
      top: 15px;
      font-size: 25px;
      cursor: pointer;
    }
  }
</style>