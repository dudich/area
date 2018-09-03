<template>
  <div class="extras-item" :key="extra.id">
    <p class="extras-name hidden-lg-and-up" v-text="extra.name"></p>
    <span class="extras-quantity hidden-lg-and-up" v-text="extra.quantity"></span>
    <div class="extras-icon">
      <div class="extras-control extras-control-minus"
           v-if="extra.quantity > 0"
           @click="decreaseExtraQuantity(extra.id)"
      >
        <i class="fas fa-minus text-light-green"></i>
      </div>
      <div class="extras-control extras-control-plus"
           v-if="extra.maxQuantity !== extra.quantity"
           @click="increaseExtraQuantity(extra.id)"
      >
        <i class="fas fa-plus text-light-green"></i>
      </div>
      <div class="icon-container" :class="{ active: selected === extra.id }" @click="handleOnSelect(extra.id)">
        <img :src="iconPath" alt="icon">
      </div>
    </div>
    <span class="extras-price hidden-lg-and-up" v-text="`$${extra.price}`"></span>
  </div>
</template>

<script>
  import {
    EXTRA_SELECTED,
    INCREASE_EXTRA_QUANTITY,
    DECREASE_EXTRA_QUANTITY
  } from "../../store/actionTypes";

  export default {
    name: 'extras-item',

    props: {
      extra: {
        type: Object,
        required: true
      },
      selected: {
        type: String,
        default: null
      },
      checked: {
        type: Array,
        required: false
      },
    },

    data() {
      return {
        iconPath: require(`../../assets/icons/extras/extra-icon-${ this.extra.id }.png`)
      }
    },

    methods: {
      handleOnSelect(payload) {
        this.$emit(EXTRA_SELECTED, payload)
      },
      increaseExtraQuantity(id) {
        this.$emit(INCREASE_EXTRA_QUANTITY, id)
      },
      decreaseExtraQuantity(id) {
        this.$emit(DECREASE_EXTRA_QUANTITY, id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";
  .extras {

    &-name,
    &-quantity,
    &-price {
      font-size: 18px;
      font-weight: bold;
      color: #fff;

      @media screen and (max-width: $xs - 1) {
        font-size: 14px;
      }
    }


    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 35px 0;

      @media screen and (max-width: $xs - 1 ) {
        width: 30%;
        margin: 0;
      }
    }

    &-icon {
      position: relative;
      margin-bottom: 10px;
      border-radius: 5px;

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;

        &:hover,
        &.active {
          border-color: $green;
        }

        @media screen and (max-width: $xs - 1 ) {
          width: 60px;
          height: 60px;
        }
      }

      img {
        width: 80%;
        height: 80%;
      }
    }

    &-control {
      position: absolute;
      width: 30px;
      height: 30px;
      border: 1px solid $green;
      border-radius: 50%;
      cursor: pointer;

      &-minus {
        top: -20px;
        left: -26px;

        @media screen and (max-width: $xs - 1 ) {
          top: -18px;
          left: -10px;
        }
      }

      &-plus {
        top: -20px;
        right: -26px;

        @media screen and (max-width: $xs - 1 ) {
          top: -18px;
          right: -10px;
        }
      }

      .fas {
        font-size: 15px;
        line-height: 30px;

        @media screen and (max-width: $xs - 1 ) {
          font-size: 13px;
          line-height: 20px;
        }
      }

      @media screen and (max-width: $xs - 1 ) {
        width: 20px;
        height: 20px;
      }
    }
  }
</style>