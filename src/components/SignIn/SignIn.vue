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
    <p
      class="sign-in__message text-notification"
      v-if="errors.items.length"
      v-text="errors.items[0]"
    >
    </p>
  </div>
</template>

<script>
  import {
    OPEN_SIGN_IN_MODAL,
    USER_SIGN_IN
  } from "../../store/actionTypes";
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

    computed: {
      user() {
        return this.$store.getters.user
      }
    },

    mounted() {
      EventBus.$on(OPEN_SIGN_IN_MODAL, () => {
        this.agentId.value = '';
        this.password.value = '';
        this.errors.items = [];
      });
    },

    methods: {
      forgotPasswordLink() {
        this.$emit('FORGOT_PASSWORD')
      },
      logIn() {
        this.errors.items = [];
        if(this.agentId.value !== this.user.id) {
          this.errors.items.push('Your user name is incorrect. Please try again.');
        }
        if(this.password.value !== this.user.password) {
          this.errors.items.push('Your password is incorrect. Password must be “X” .Please try again.');
        }
        if (!this.errors.items.length) {
          this.$store.commit(USER_SIGN_IN)
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