<template>
  <tr class="price-extras">
    <td class="text text-xs-left text-sm-right">
      Extras
    </td>
    <td class="count text-xs-right" v-text="price > 0 ? `$ ${price.toFixed(2)}` : '-'"></td>
  </tr>
</template>

<script>
  export default {
    name: 'catering',

    props: {
      price: {
        type: Number,
        required: true
      }
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

    .count {
      text-align: right;
    }
  }
</style>