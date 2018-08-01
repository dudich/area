<template>
  <li class="extras-item" :key="extra.id">
    <p class="extras-name">{{ extra.name }}</p>
    <div class="extras-icon">
      <div class="icon-container" :class="{ active: selected === extra.id }" @click="handleOnSelect(extra.id)">
        <img :src="`icons/extras/extra-icon-${ extra.id }.png`" alt="icon">
      </div>
      <div class="extras-checkbox" @click="handleOnCheck(extra.id)">
          <i class="fas fa-check" v-if="checked.indexOf(extra.id) !== -1"></i>
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

    methods: {
      handleOnSelect(id) {
        this.$emit('EXTRA_SELECTED', id)
      },

      handleOnCheck(payload) {
        this.$emit('EXTRA_CHECKED', payload)
      }
    }
  }
</script>

<style lang="scss" scoped>
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
      background-color: white;
      cursor: pointer;

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border: 4px solid black;
        border-radius: 5px;
        &:hover,
        &.active {
          border-color: #7FBE42;
        }
      }

      img {
        width: 50px;
        height: 50px;
      }
    }

    &-checkbox {
      position: absolute;
      bottom: -14px;
      left: -14px;
      width: 30px;
      height: 25px;
      border: 1px solid black;
      border-radius: 4px;
      background-color: white;

      .fas {
        font-size: 30px;
        line-height: 25px;
        color: #7FBE42;
      }
    }
  }
</style>