<template>
  <div class="contact-form">
    <p class="contact-form__caption" v-html="caption"></p>
    <form>
      <v-text-field
        v-validate="'required|max:10'"
        v-model="name"
        :counter="10"
        :error-messages="errors.collect('name')"
        label="Name"
        data-vv-name="name"
        required
      ></v-text-field>
      <v-text-field
        v-validate="'required|email'"
        v-model="email"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
      ></v-text-field>

      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
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

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = '',
        this.email = '',
        this.select = null,
        this.checkbox = null,
        this.$validator.reset()
      }
    }
  }
</script>