<template>
  <table class="price">
    <tr class="price-property">
      <td class="text">Room</td>
      <td class="count">${{ property.price }}</td>
    </tr>
    <tr class="price-extras">
      <td class="text">Extras</td>
      <td class="count">${{ property.extrasPrice }}</td>
    </tr>
    <catering :catering="catering" @ADD_CATERING="catering = true"></catering>
    <catering-notification :catering="catering"></catering-notification>
    <tr class="price-total text-green">
      <td class="text">Total</td>
      <td class="count">${{ totalPrice(property) }}</td>
    </tr>
  </table>
</template>

<script>
  import Catering from './Catering'
  import CateringNotification from './CateringNotification'

  export default {
    name: 'PropertyPrice',

    props: {
      property: {
        type: Object,
        required: true
      }
    },

    data: () => ({
      catering: false
    }),

    methods: {
      totalPrice: (property) => (property.price + property.extrasPrice).toFixed(2)
    },

    components: {
      Catering,
      CateringNotification
    }
  }
</script>

<style lang="scss" scoped>
  .price {
    width: 100%;

    td {
      padding: 5px 10px;
      font-size: 16px;
      font-weight: 700;
      color: white;
    }

    .text {
      text-align: right;
    }

    .count {
      text-align: right;
    }
  }
</style>