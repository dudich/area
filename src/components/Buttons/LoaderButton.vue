<template>
  <v-btn
    class="btn no-text-transform get-rooms-btn"
    :loading="loading4"
    :disabled="loading4"
    dark
    round
    flat
    @click.native="loader = 'loading4'"
  >
    <slot></slot>
      <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
  </v-btn>
</template>

<script>
  export default {
    name: 'loader-button',

    data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false
      }
    },
    watch: {
      loader () {
        const l = this.loader;
        this[l] = !this[l];

        setTimeout(() => (this[l] = false), 3000);

        this.loader = null
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .get-rooms-btn {
    border: 1px solid $blue;
  }

  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
