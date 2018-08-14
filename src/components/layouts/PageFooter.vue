<template>
  <v-footer app>
    <span class="text-dark-blue">&copy; {{ new Date().getFullYear() }} AREA Events Wellington</span>
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
  .v-footer {
    display: block;
    height: 70px !important;
    padding: 0 80px 0 24px;
  }
</style>