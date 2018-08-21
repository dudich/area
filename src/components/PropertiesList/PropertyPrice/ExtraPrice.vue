<template>
  <tr class="price-extras">
    <td class="text">
      Extras
      <img src="../../../assets/icons/check-icon.png" alt="check-icon" v-if="price > 0" :class="{ opacity: extraAdd }">
    </td>
    <td class="count" v-text="price > 0 ? price : '-'"></td>
  </tr>
</template>

<script>
  export default {
    name: 'catering',

    props: {
      propertyId: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    },

    data() {
      return {
        extraAdd: false
      }
    },

    mounted() {
      EventBus.$on(`UPDATE_EXTRA_PRICE_${this.propertyId}`, () => setTimeout(() => this.extraAdd = true, 1000))
    }
  }
</script>

<style lang="scss" scoped>
  .price-extras {

    td {
      padding: 5px 10px;
      font-size: 18px;
      font-weight: 700;
      color: white;
    }

    .text {
      position: relative;
      text-align: right;


      img {
        position: absolute;
        left: 80px;
        width: 20px;
        height: 20px;
      }
    }

    .count {
      text-align: right;
    }
  }
</style>