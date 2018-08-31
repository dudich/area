<template>
  <v-layout class="extras-header" align-center justify-center>
    <v-flex class="extras-header__left text-xs-center" xs4 offset-xs4>
      <span class="extras-header__caption">Extras</span>
    </v-flex>
    <v-flex class="extras-header__right" xs4>
      <span class="extras-header__total-price text-green font-weight-bold">Total ${{ total }}</span>
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
      addExtras: {
        type: Function,
        required: true
      }
    },

    methods: {
      hideExtras() {
        EventBus.$emit(HIDE_EXTRAS)
      }
    }
  }
</script>

<style lang="scss">
  .extras-header {
    padding: 20px;

    &__right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .fas {
      font-size: 25px;
      color: #fff;
      cursor: pointer;
    }

    &__caption {
      font-size: 25px;
      color: #fff;
    }

    &__total-price {
      margin-right: 30px;
      font-size: 20px;
    }
  }
</style>