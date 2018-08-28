<template>
  <v-footer app>
    <span class="text-dark-blue mr-2">&copy; {{ new Date().getFullYear() }} AREA Events Wellington</span>
    <v-spacer></v-spacer>
    <img src="../../assets/footer-logo.png" alt="logo">
  </v-footer>
</template>

<script>
 export default {
   name: 'page-footer',
 }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .v-footer {
    position: relative !important;
    display: block;
    height: 70px !important;
    padding: 0 80px 0 24px;

    @media screen and (max-width: $sm) {
      padding: 0 60px 0 10px;
    }
  }
</style>