<template>
  <li class="extras-item" :key="extra.id">
    <p class="extras-name">{{ extra.name }}</p>
    <div class="extras-icon">
      <div class="extras-control extras-control-minus"
           v-if="extra.maxQuantity && extra.quantity > 0 && checked.indexOf(extra.id) !== -1"
           @click="decreaseExtraQuantity(extra.id)"
      >
        <i class="fas fa-minus text-light-green"></i>
      </div>
      <div class="extras-control extras-control-plus"
           v-if="extra.maxQuantity && extra.maxQuantity !== extra.quantity && checked.indexOf(extra.id) !== -1"
           @click="increaseExtraQuantity(extra.id)"
      >
        <i class="fas fa-plus text-light-green"></i>
      </div>
      <div class="icon-container" :class="{ active: selected === extra.id }" @click="handleOnSelect(extra.id)">
        <img :src="iconPath" alt="icon">
      </div>
      <div class="extras-checkbox" @click="handleOnCheck(extra.id)">
          <i class="fas fa-check text-light-green" v-if="checked.indexOf(extra.id) !== -1"></i>
      </div>
    </div>
    <span class="extras-price">${{ extra.price }}</span>
  </li>
</template>

<script>
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
      handleOnSelect(id) {
        this.$emit('EXTRA_SELECTED', id)
      },
      handleOnCheck(payload) {
        this.$emit('EXTRA_CHECKED', payload);
        /*if(this.checked.indexOf('1') !== -1) {
          return
        }
        if(this.checked.indexOf('1') !== -1) {
          this.$emit('REMOVE_ITEMS')
        }*/
      },
      increaseExtraQuantity(id) {
        this.$emit('INCREASE_EXTRA_QUANTITY', id);
      },
      decreaseExtraQuantity(id) {
        this.$emit('DECREASE_EXTRA_QUANTITY', id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";
  .extras {

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 35px;
    }

    &-name,
    &-price {
      max-width: 100px;
      margin-bottom: 5px;
      color: white;
      font-weight: 700;
    }

    &-icon {
      position: relative;
      margin-bottom: 10px;
      border-radius: 5px;
      cursor: pointer;

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border: 1px solid black;
        border-radius: 5px;
        &:hover,
        &.active {
          border-color: $green;
        }
      }

      img {
        width: 80%;
        height: 80%;
      }
    }

    &-checkbox {
      position: absolute;
      width: 30px;
      height: 25px;
      border: 1px solid $green;
      border-radius: 4px;
      background-color: white;
      bottom: -14px;
      left: -14px;

      .fas {
        font-size: 25px;
        line-height: 25px;
      }
    }

    &-control {
      position: absolute;
      width: 30px;
      height: 30px;
      border: 1px solid $green;
      border-radius: 50%;
      &-minus {
        top: -20px;
        left: -26px;
      }

      &-plus {
        top: -20px;
        right: -26px;
      }

      .fas {
        font-size: 15px;
        line-height: 30px;
      }
    }
  }
</style>