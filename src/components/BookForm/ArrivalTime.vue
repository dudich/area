<template>
  <div class="book-select">
    <v-select
      v-model="select"
      :items="items"
      label="Arrival Time"
      outline
    ></v-select>
    <i class="fas fa-star-of-life"></i>
  </div>
</template>

<script>
  export default {
    name: 'arrival-time',

    data() {
      return {
        select: '',
        items: ['7:00am', '8:00am', '9:00am', '10:00am']
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .book-select {
    position: relative;

    .v-input {
      color: #000 !important;

      .v-label {
        top: -25px !important;
        color: #000 !important;

        &--active {
          transform: none;
        }
      }
    }

    .fa-star-of-life {
      position: absolute;
      top: 5px;
      left: -25px;
      font-size: 18px;
    }

    .v-select__selections {
      padding-top: 2px !important;
      color: $grey !important;

      &--active {
        transform: none;
      }
    }

    .v-input__slot {
      min-height: auto;
      height: 48px;
      background-color: $light-gray !important;
    }

    .v-input__append-inner {
      margin-top: 10px !important;

      .v-icon {
        color: #000 !important;
      }
    }
  }
</style>