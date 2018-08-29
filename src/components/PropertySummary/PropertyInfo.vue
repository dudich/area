<template>
  <div class="property-info text-xs-left">
    <p class="property-name" v-text="propertyName"></p>
    <p class="hold-dates" v-text="dates"></p>
  </div>
</template>

<script>
  export default {
    name: 'property-info',

    props: {
      propertyName: {
        type: String,
        required: true
      },
      dates: {
        type: String,
        default: '99/99/9999 to 99/99/9999'
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .property-info {
    margin-bottom: 60px;

    p {
      font-size: 18px;
    }
  }
</style>