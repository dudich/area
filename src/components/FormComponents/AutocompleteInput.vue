<template>
  <div class="autocomplete-input">
    <v-autocomplete
      v-model="input.value"
      :items="input.items"
      :placeholder="input.placeholder"
    >
    </v-autocomplete>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'autocomplete-input',

    props: {
      input: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .autocomplete-input {
    position: relative;

    .v-autocomplete {
      margin-top: 0 !important;
    }

    .v-input__control {
      min-height: 48px !important;
    }

    .v-input__slot {
      padding: 0 12px;
      border: 1px solid #000;
      border-radius: 0 !important;
      background-color: $light-gray !important;
      box-shadow: none !important;
      &::before,
      &::after {
        content: none;
      }

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

    .v-input__append-inner {
      display: none;
    }

    i {
      position: absolute;
      top: 10px;
      left: -35px;
      font-size: 28px;
      color: #000;
    }
  }
</style>