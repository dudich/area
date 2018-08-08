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
  import {OPEN_GALLERY_CAROUSEL} from "../store/actionTypes";

  export default {
    name: 'modal',

    data () {
      return {
        dialog: false
      }
    },

    mounted() {
      EventBus.$on(OPEN_GALLERY_CAROUSEL, () => this.dialog = true)
    }
  }
</script>

<style lang="scss">
  .v-dialog {
    border-radius: 50px;
  }
</style>