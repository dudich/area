<template>
  <v-btn
    class="btn bg-blue no-text-transform"
    @click="changeCatering"
    dark
    round
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