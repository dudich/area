<template>
  <table class="extras-table">
    <tbody>
    <tr>
      <td></td>
      <td
        class="extras-name"
        v-for="extra in extras"
      >{{ extra.name }}</td>
    </tr>
    <tr>
      <td>Quantity</td>
      <td
        class="text-green"
        v-for="extra in extras"
      >{{ quantity(extra) }}</td>
    </tr>
    <tr>
      <td>Unit Price</td>
      <td
        class="text-green"
        v-for="extra in extras"
      >{{ unitePrice(extra) }}</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td
        class="text-green"
        v-for="extra in extras"
      >{{ cost(extra) }}</td>
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
      }
    },

    methods: {
      quantity(extra) {
        return extra.quantity > 0 ? extra.quantity : '-';
      },
      unitePrice(extra) {
        return extra.quantity > 0 ? `$ ${ extra.price.toFixed(2) }` : '-';
      },
      cost(extra) {
        return extra.quantity > 0 ? `$ ${ (extra.quantity * extra.price).toFixed(2) }` : '-';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .extras {
    &-name {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }

    &-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 40px;

      tr:not(:first-of-type) {
        border-top: 2px solid white;
      }

      td {
        width: 15%;
        padding: 10px;
        font-size: 18px;
        font-weight: 700;

        &:first-of-type {
          width: 8%;
          font-size: 14px;
          color: white;
        }
      }
    }
  }
</style>