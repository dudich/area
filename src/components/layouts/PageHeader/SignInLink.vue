<template>
  <v-list-tile class="corp-sign-in" @click="openSignIn">
    <i class="fas fa-lock"></i>
    Corporate Sign-In
  </v-list-tile>
</template>

<script>
  export default {
    name: 'sign-in-link',

    props: {
      openSignIn: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .corp-sign-in {
    border: 1px solid #fff;
    border-radius: 4px;
    cursor: pointer;

    i {
      margin-right: 10px;
      font-size: 20px;
    }
  }
</style>