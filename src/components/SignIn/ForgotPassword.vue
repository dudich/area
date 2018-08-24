<template>
  <div class="forgot-password">
    <h2 class="text-white mb-4 font-weight-bold">Forgot Password</h2>
    <custom-input :input="email"></custom-input>
    <v-btn class="btn font-weight-bold no-text-transform" white block @click="sentPassword">Get Password</v-btn>
    <p
      class="forgot-password__error text-notification"
      v-if="passwordSent"
    >A password reset email has benn sent to you</p>
    <p
      class="forgot-password__message text-notification"
      v-if="errors.items.length"
      v-text="errors.items[0]"
    >
    </p>
  </div>
</template>

<script>
  import CustomInput from '../../components/FormComponents/CustomInput'

  export default {
    name: 'forgot-password',

    data() {
      return {
        email: {
          value: '',
          placeholder: 'Email Address'
        },
        passwordSent: false
      }
    },

    methods: {
      sentPassword() {
        this.errors.items = [];
        this.passwordSent = false;

        if (!this.email.value) {
          this.errors.items.push('Need email address');
        } else if (!this.validEmail(this.email.value)) {
          this.errors.items.push('Need valid email address');
        }

        if (!this.errors.items.length) {
          this.passwordSent = true;
        }
      },
      validEmail: function (email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    },

    components: {
      CustomInput
    }

  }
</script>

<style lang="scss">
  .forgot-password {
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
      margin-top: 0;
      margin-bottom: 30px;
      border-radius: 0;
    }
  }
</style>