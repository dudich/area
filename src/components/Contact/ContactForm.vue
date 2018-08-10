<template>
  <div class="contact-form">
    <p class="contact-form__caption text-xs-left text-green" v-html="caption"></p>
    <form>
      <v-text-field
        v-validate="'required|max:10'"
        v-model="name"
        :counter="10"
        :error-messages="errors.collect('name')"
        label="Your Name"
        data-vv-name="name"
        color="light-green"
        required
        autofocus
      ></v-text-field>
      <v-text-field
        v-validate="'required|email'"
        v-model="email"
        :error-messages="errors.collect('email')"
        label="Your Email"
        data-vv-name="email"
        color="light-green"
        required
      ></v-text-field>
      <v-text-field
        v-validate="'required'"
        v-model="phone"
        :error-messages="errors.collect('phone')"
        label="Your Phone"
        data-vv-name="phone"
        color="light-green"
        required
      ></v-text-field>
      <v-text-field
        v-validate="'required'"
        v-model="subject"
        :error-messages="errors.collect('subject')"
        label="Your Subject"
        data-vv-name="subject"
        color="light-green"
        required
      ></v-text-field>
      <v-textarea
        v-validate="'required'"
        v-model="message"
        :error-messages="errors.collect('message')"
        data-vv-name="message"
        label="Your Message"
        color="light-green"
        height="80"
        required
      ></v-textarea>

      <v-btn class="bg-light-dark font-weight-bold" dark round @click="submit">Send</v-btn>
      <v-btn class="bg-light-dark font-weight-bold" dark round @click="clear">Clear</v-btn>
    </form>
  </div>
</template>

<script>
  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      caption: 'Send us message',

      name: '',
      email: '',
      subject: '',
      message: '',
      phone: '',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          }
        }
      }
    }),

    mounted() {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit() {
        this.$validator.validateAll()
      },
      clear() {
        this.name = '',
          this.email = '',
          this.subject = '',
          this.phone = '',
          this.message = '',
          this.$validator.reset()
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/variables';

  .contact-form {

    &__caption {
      margin-bottom: 25px;
    }

    .v-input {
      margin-bottom: 28px;
      &__slot {

        &:before {
          border-color: $light-gray!important;
        }

        input {
          color: white!important;
        }
      }

      .v-label {
        color: $grey;
      }
    }
  }
</style>