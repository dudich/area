<template>
  <div class="sign-in">
    <h2 class="text-white mb-4 font-weight-bold">Corporate Sign In</h2>
    <custom-input :input="agentId"></custom-input>
    <custom-input :input="password"></custom-input>
    <v-btn
      class="btn font-weight-bold no-text-transform mt-0 mb-3"
      @click="logIn"
      white
      block
    >Sign-In</v-btn>
    <p class="sign-in__link text-white font-weight-bold" @click="forgotPasswordLink">Forgot password</p>
    <p class="sign-in__message text-notification">Error signing in. Please try again.</p>
  </div>
</template>

<script>
  import CustomInput from '../../components/FormComponents/CustomInput'

  export default {
    name: 'sign-in',

    data() {
      return {
        agentId: {
          value: '',
          placeholder: 'Agent ID'
        },

        password: {
          value: '',
          placeholder: 'Password'
        }
      }
    },

    methods: {
      forgotPasswordLink() {
        this.$emit('FORGOT_PASSWORD')
      },
      logIn() {
        this.errors.items = [];
        if (!this.errors.items.length) {
          return true
        }
      },
    },

    components: {
      CustomInput
    }

  }
</script>

<style lang="scss">
  .sign-in {
    width: 50%;
    padding: 40px 0;
    margin: 0 auto;

    .v-text-field__slot input {
      color: #fff !important;
    }

    &__link {
      margin-bottom: 0;
      cursor: pointer;
    }

    .btn {
      border-radius: 0;
    }
  }
</style>