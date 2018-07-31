<template>
  <table class="extras-table">
    <tbody>
    <tr>
      <td>Quantity</td>
      <td v-for="extra in extras">{{ quantity(extra) }}</td>
    </tr>
    <tr>
      <td>Unit Price</td>
      <td v-for="extra in extras">{{ unitePrice(extra) }}</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td v-for="extra in extras">{{ cost(extra) }}</td>
    </tr>
    <tr class="extras-total">
      <td class="text" colspan="6">Total</td>
      <td class="count">${{ total }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      extras: {
        type: Array,
        required: true
      },
      checked: {
        type: Array,
        required: false
      },
      total: {
        type: Number,
        required: true
      }
    },

    methods: {
      quantity(extra) {
        return this.checked.indexOf(extra.id) !== -1 ? extra.quantity : '-';
      },
      unitePrice(extra) {
        return this.checked.indexOf(extra.id) !== -1 ? `$ ${ extra.price }` : '-';
      },
      cost(extra) {
        return this.checked.indexOf(extra.id) !== -1 ? `$ ${ extra.quantity * extra.price }` : '-';
      },

    }
  }
</script>

<style lang="scss" scoped>
  .extras {

    &-table {
      width: 100%;
      border-collapse: collapse;

      tr {
        border-top: 2px solid white;
      }

      td {
        width: 15%;
        padding: 10px;
        color: #7FBE42;
        font-weight: 700;

        &:first-of-type {
          width: 10%;
          color: white;
        }
      }
    }

    &-total {
      .text {
        text-align: right;
      }
    }
  }
</style>