<template>
  <v-layout class="extras-header" align-center justify-center>
    <v-flex class="extras-header__container" xs12 sm7 offset-xs0 offset-sm5 align-center>
      <span class="extras-header__caption">Extras</span>
      <span class="extras-header__total-price">Total   ${{ total }}</span>
      <v-btn class="addExtrasBtn" dark round @click.native="closeModal">Add</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'extras-header',

    props: {
      total: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .extras-header {
    padding: 20px;
    border: 1px solid #fff;

    &__container {
      display: flex;
    }

    &__caption {
      margin-right: 60px;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }

    &__total-price {
      margin-right: 150px;
      font-weight: 700;
      color: #8cc63e;
    }

    .addExtrasBtn {
      margin-left: auto;
      background-color: #29AAE2!important;
      text-transform: none;
    }
  }
</style>