<template>
  <div class="on-site-contacts">
    <h4 class="book-form-caption">On Site Contacts</h4>
    <div class="same-as-checkbox">
      <div class="checkbox-container" @click="populateInputs">
        <input type="checkbox" v-model="sameAs">
        <i class="fas fa-check" v-show="sameAs"></i>
      </div>
      <span @click="populateInputs">[same as booker details]</span>
    </div>
    <div class="book-input">
      <v-text-field
        placeholder="Booker Name"
        single-line
        solo
        v-model="contacts.name"
      ></v-text-field>
      <i class="fas fa-user"></i>
    </div>
    <div class="book-input">
      <v-text-field
        class="book-input"
        placeholder="Email"
        single-line
        solo
        v-model="contacts.email"
      ></v-text-field>
      <i class="fas fa-envelope"></i>
    </div>
    <div class="book-input">
      <v-text-field
        class="book-input"
        placeholder="Phone Number-Day"
        single-line
        solo
        v-model="contacts.phoneDay"
      ></v-text-field>
      <i class="fas fa-phone-square"></i>
    </div>
    <div class="book-input">
      <v-text-field
        class="book-input"
        placeholder="Phone Number-Mobile"
        single-line
        solo
        v-model="contacts.phoneMobile"
      ></v-text-field>
      <i class="fas fa-phone-square"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contacts-on-site',

    props: {
      contacts: {
        type: Object,
        required: true
      },
      details: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        sameAs: false
      }
    },

    methods: {
      populateInputs() {
        this.sameAs = !this.sameAs;
        if (this.sameAs) {
          this.contacts.name = this.details.name;
          this.contacts.email = this.details.email;
          this.contacts.phoneDay = this.details.phoneDay;
          this.contacts.phoneDay = this.details.phoneMobile;
        } else {
          this.contacts.name = this.contacts.email = this.contacts.phoneDay = this.contacts.phoneMobile = '';
        }
      }
    },
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .on-site-contacts {
    position: relative;

    .same-as-checkbox {
      position: absolute;
      top: 5px;
      right: 10px;
      display: flex;

      .checkbox-container {
        width: 25px;
        height: 20px;
        margin-right: 10px;
        border: 2px solid #000;
        background-color: $light-gray;

        input {
          display: none;
        }
      }
    }
  }
</style>