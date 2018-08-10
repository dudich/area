<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <slot></slot>
    </v-dialog>
  </div>
</template>

<script>
  import {
    OPEN_GALLERY_CAROUSEL,
    OPEN_CONFIRMATION_MODAL,
    CLOSE_CONFIRMATION_MODAL
  } from "../store/actionTypes";

  export default {
    name: 'modal',

    data () {
      return {
        dialog: false
      }
    },

    mounted() {
      EventBus.$on(OPEN_GALLERY_CAROUSEL, () => this.dialog = true);
      EventBus.$on(OPEN_CONFIRMATION_MODAL, () => this.dialog = true);
      EventBus.$on(CLOSE_CONFIRMATION_MODAL, () => this.dialog = false);
    }
  }
</script>

<style lang="scss">
  @import "../styles/variables";

  .v-dialog {
    border-radius: 50px;
    background-color: $dark-blue;
  }
</style>