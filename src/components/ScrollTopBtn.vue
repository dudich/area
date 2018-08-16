<template>
  <v-fab-transition>
    <v-btn
      class="scroll-top-btn"
      v-show="!hidden"
      @click="$vuetify.goTo(target, options)"
      dark
      absolute
      fab
      fixed
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
  export default {
    name: 'scroll-top-btn',

    data () {
      return {
        selector: '#app',
        duration: 600,
        easing: 'easeInOutCubic',
      }
    },

    computed: {
      target () {
        return this.selector
      },
      options () {
        return {
          duration: this.duration,
          easing: this.easing
        }
      },
      hidden() {
        return this.offset < 350
      },
      offset() {
        return this.$store.getters.offsetTop
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/variables";

  .scroll-top-btn {
    right: 15px;
    bottom: 20px;
    width: 30px !important;
    height: 30px !important;
    background-color: rgba(0,0,0,0.25) !important;

    &:hover {
      background-color: $light-green !important;
    }
  }
</style>