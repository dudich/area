<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" :width="width">
      <component :is="currentView" @FORGOT_PASSWORD="changeView"></component>
    </v-dialog>
  </div>
</template>

<script>
  import {OPEN_SIGN_IN_MODAL} from "../../store/actionTypes";
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
        currentView: SignIn
      }
    },

    mounted() {
      EventBus.$on(OPEN_SIGN_IN_MODAL, () => this.dialog = true);
      //EventBus.$on('update:returnValue', () => this.currentView = SignIn);
    },

    methods: {
      changeView() {
        this.currentView = ForgotPassword;
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
    border-radius: 50px;
    background-color: $dark-blue;
  }
</style>