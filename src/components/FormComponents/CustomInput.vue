<template>
  <div class="custom-input">
    <v-text-field
      :placeholder="input.placeholder"
      :type="type"
      :rules="rules"
      single-line
      solo
      v-model="input.value"
      @input="updateValue"
    ></v-text-field>
    <slot></slot>
  </div>
</template>

<script>
  import {UPDATE_INPUT_VALUE} from "../../store/actionTypes";

  export default {
    name: 'custom-input',

    props: {
      input: {
        type: Object,
        required: true
      },
      type: {
        type: String,
        default: 'text'
      },
      rules: {
        type: Array,
        required: false
      }
    },

    methods: {
      updateValue() {
        this.$emit(UPDATE_INPUT_VALUE, this.input.value);
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .custom-input {
    position: relative;

    .v-input__slot {
      border: 1px solid #000;
      border-radius: 0 !important;
      background-color: $light-gray !important;
      box-shadow: none !important;

      input {
        color: $grey;

        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: $grey;
          opacity: 1; /* Firefox */
        }
        &::-ms-input-placeholder { /* Microsoft Edge */
          color: $grey;
        }
      }
    }

    i {
      position: absolute;
      top: 10px;
      left: -35px;
      font-size: 28px;
      color: #000;
    }
  }

  .sign-in,
  .forgot-password {
    .custom-input {
      .v-input__slot {
        border: 1px solid #fff;
        border-radius: 0 !important;
        background-color: transparent !important;
        box-shadow: none !important;

        input {
          color: #fff;

          &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #fff;
            opacity: 1; /* Firefox */
          }
          &::-ms-input-placeholder { /* Microsoft Edge */
            color: #fff;
          }
        }
      }

      .v-messages {
        display: none;
      }
    }
  }
</style>