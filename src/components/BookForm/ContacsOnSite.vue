<template>
  <div class="on-site-contacts">
    <h4 class="book-form-caption">On Site Contacts</h4>
    <div class="same-as-checkbox">
      <div class="checkbox-container" @click="sameAs = !sameAs">
        <input type="checkbox" v-model="sameAs">
        <i class="fas fa-check" v-show="sameAs"></i>
      </div>
      <span @click="sameAs = !sameAs">[same as booker details]</span>
    </div>
    <custom-input v-for="(input, i) in populateInputs" :key="i" :input="input">
      <i :class="input.iconClass"></i>
    </custom-input>
  </div>
</template>

<script>
  import CustomInput from '../FormComponents/CustomInput'

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

    computed: {
      populateInputs() {
        return this.sameAs ? this.details :  this.contacts
      }
    },

    components: {
      CustomInput
    }
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