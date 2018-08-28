<template>
  <v-layout class="extras-header" align-center justify-center>
    <v-flex class="text-xs-left" xs2 sm5>
      <i class="fas fa-times" @click="hideExtras"></i>
    </v-flex>
    <v-flex class="extras-header__container" xs10 sm7 align-center>
      <span class="extras-header__caption">Extras</span>
      <span class="extras-header__total-price text-green">Total   ${{ total }}</span>
      <v-btn class="btn bg-blue no-text-transform" dark round @click="addExtras">Add</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import {HIDE_EXTRAS} from "../../store/actionTypes";

  export default {
    name: 'extras-header',

    props: {
      total: {
        type: String,
        required: true
      },
      propertyId: {
        type: String,
        required: true
      },
      addExtras: {
        type: Function,
        required: true
      }
    },

    methods: {
      hideExtras() {
        EventBus.$emit(HIDE_EXTRAS, this.propertyId)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .extras-header {
    padding: 20px;
    border: 1px solid #fff;

    .fas {
      font-size: 25px;
      color: #fff;
      cursor: pointer;
    }

    &__container {
      display: flex;
    }

    &__caption {
      margin-right: 80px;
      font-size: 25px;
      color: #fff;
    }

    &__total-price {
      margin-right: 150px;
      font-size: 25px;
    }

    .btn {
      margin-left: auto;
    }
  }
</style>