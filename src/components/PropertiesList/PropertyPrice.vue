<template>
  <table class="price">
    <tr class="price-property">
      <td class="text">Room Hire Cost-Half Day</td>
      <td class="count">${{ property.price }}</td>
    </tr>
    <tr class="price-extras">
      <td class="text">Extras</td>
      <td class="count">${{ property.extrasPrice }}</td>
    </tr>
    <tr class="price-total">
      <td class="text">Total</td>
      <td class="count">${{ totalPrice(property) }}</td>
    </tr>
  </table>
</template>

<script>
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
        return property.price + property.extrasPrice
      }
    },
  }
</script>

<style lang="scss" scoped>
  .price {
    margin-bottom: 15px;
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
    &-total td {
      color: greenyellow;
    }
  }
</style>