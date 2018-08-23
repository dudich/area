<template>
  <div class="custom-select">
    <v-select
      v-model="state"
      :items="input.items"
      :label="input.label"
      :name="input.name"
      @change="updateValue"
      outline
      append-icon="$vuetify.icons.dropdown"
    ></v-select>
    <slot></slot>
  </div>
</template>

<script>
  import {UPDATE_SELECT_VALUE} from "../../store/actionTypes";

  export default {
    name: 'custom-select',

    props: {
      input: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        state: this.input.select
      }
    },

    methods: {
      updateValue() {
        this.$emit(UPDATE_SELECT_VALUE, this.state)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .custom-select {
    position: relative;

    .v-select__selections {
      padding-top: 0 !important;
    }

    .v-input__slot {
      height: 48px;
      min-height: auto;
      border: 1px solid #000 !important;
      border-radius: 0 !important;
      background-color: $light-gray !important;

      .v-input__append-inner {
        margin-top: 10px;
      }
    }

    .v-label {
      top: -30px;
      color: #000 !important;

      &--active {
        transform: none;
      }
    }

    .v-icon {
      color: #000 !important;
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