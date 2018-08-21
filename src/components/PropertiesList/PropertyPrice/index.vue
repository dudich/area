<template>
  <table class="price text-xs-right">
    <tr class="price-property">
      <td class="text">Room Hire Cost</td>
      <td class="count">${{ property.price }}</td>
    </tr>
    <extra-price
      :price="property.extrasPrice"
      :propertyId="property.id"
    ></extra-price>
    <price-notification
      :price="property.extrasPrice"
      :notificationText="'You add extras, total price updated'"
    ></price-notification>
    <catering
      :catering="property.catering"
      :propertyId="property.id"
    ></catering>
    <price-notification
      :catering="property.catering"
      :notificationText="'We will contact tou to discuss details about catering options'"
    ></price-notification>
    <tr class="price-total">
      <td class="text text-green">Total</td>
      <td class="count text-green">${{ totalPrice(property) }}</td>
    </tr>
  </table>
</template>

<script>
  import Catering from './Catering'
  import ExtraPrice from './ExtraPrice'
  import PriceNotification from './PriceNotification'

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

    data() {
      return {

      }
    },

    components: {
      Catering,
      ExtraPrice,
      PriceNotification
    }
  }
</script>

<style lang="scss" scoped>
  .price {
    width: 100%;

    td {
      padding: 5px 10px;
      font-size: 18px;
      font-weight: 700;
      color: white;
    }
  }
</style>