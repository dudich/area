<template>
  <table class="price text-xs-right">
    <tr class="price-property">
      <td class="text">Room Hire Cost</td>
      <td class="count">${{ property.price }}</td>
    </tr>
    <tr class="price-extras">
      <td class="text">Extras</td>
      <td class="count">${{ property.extrasPrice }}</td>
    </tr>
    <catering :catering="property.catering" :propertyId="property.id"></catering>
    <catering-notification :catering="property.catering"></catering-notification>
    <tr class="price-total">
      <td class="text text-green">Total</td>
      <td class="count text-green">${{ totalPrice(property) }}</td>
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

    methods: {
      totalPrice(property) {
        return (property.price + property.extrasPrice).toFixed(2)
      }
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
  }
</style>