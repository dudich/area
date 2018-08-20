<template>
  <div class="custom-texarea">
    <v-textarea
      :placeholder="placeholder"
      v-model="value"
      :rows="9"
      solo
      @input="updateValue"
    ></v-textarea>
    <slot></slot>
  </div>
</template>

<script>
  import {UPDATE_INPUT_VALUE} from "../../store/actionTypes";

  export default {
    name: 'custom-textarea',

    props: {
      placeholder: {
        type: String,
        default: 'Comment'
      },
      value: {
        type: String,
        required: true
      }
    },

    methods: {
      updateValue() {
        this.$emit(UPDATE_INPUT_VALUE, this.value)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .custom-texarea {
    position: relative;
    border: 1px solid #000 !important;


    .v-input__slot {
      margin-bottom: -19px;
      background-color: $light-gray !important;
    }

    textarea {
      height: 100%;
      //resize: none;
    }

    .fas {
      position: absolute;
      top: 10px;
      left: -35px;
      font-size: 28px;
      color: #000;
    }
  }
</style>