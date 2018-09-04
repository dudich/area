<template>
  <v-btn
    class="btn no-text-transform add-catering-btn"
    @click="changeCatering"
    dark
    round
    flat
  >{{ catering ? text[1] : text[0] }}
  </v-btn>
</template>

<script>
  import {CHANGE_CATERING} from "../../store/actionTypes";

  export default {
    name: 'add-extra-button',

    props: {
      catering: {
        type: Boolean,
        required: true
      },
      text: {
        type: Array,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    },

    methods: {
      changeCatering() {
        this.$store.commit(CHANGE_CATERING, this.id);
        EventBus.$emit(`CHANGE_CATERING_${this.id}`);
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .add-catering-btn {
    @media screen and (min-width: $xs) {
      border: 1px solid $blue;
    }

    @media screen and (max-width: $xs - 1) {
      background-color: $blue;
    }
  }
</style>