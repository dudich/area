<template>
  <div class="footer-banner bg-light-green" v-if="!($route.path === `/contact`)">
    <p class="footer-banner__caption text-dark-blue">Contact the team to check availability at AREA for your next event or meeting</p>
    <v-btn class="btn bg-red btn-large" round dark to="/contact">Contact Area</v-btn>
  </div>
</template>

<script>
 export default {
   name: 'footer-banner'
 }
</script>

<style lang="scss">
  @import "../styles/variables";

  .footer-banner {
    display: flex;
    padding: 80px 30px;
    margin-top: 40px;
    justify-content: center;
    align-items: center;

    &__caption {
      margin-right: 10px;
      font-size: 25px;
      line-height: 35px;

      @media screen and (min-width: $sm + 1) {
        margin-bottom: 0;
      }
    }

    @media screen and (max-width: $sm) {
      padding: 30px 10px;
      flex-direction: column;
    }
  }
</style>