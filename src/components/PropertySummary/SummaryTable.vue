<template>
  <table class="summary-table text-sm-right text-xs-left">
    <tr>
      <td>Room Hire Cost-Hourly</td>
      <td class="text-green" v-text="`$${ price }`"></td>
    </tr>
    <tr>
      <td>Extras</td>
      <td class="text-green" v-text="extras > 0 ? extras : '-'"></td>
    </tr>
    <tr>
      <td>Catering</td>
      <td class="text-green" v-text="catering ? 'TBC' : '-'"></td>
    </tr>
    <tr>
      <td v-text="`Discount (${discountPercentage}%)`"></td>
      <td class="text-green" v-text="`$${ discountSum }`"></td>
    </tr>
    <tr class="total">
      <td>Total</td>
      <td class="text-green" v-text="`$${total}`"></td>
    </tr>
    <tr class="deposit text-green">
      <td>Deposit</td>
      <td class="text-green" v-text="`$${total}`"></td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'summary-table',

    props: {
      price: {
        type: Number,
        required: true
      },
      extras: {
        type: Number,
        required: true
      },
      catering: {
        type: Boolean,
        required: true
      }
    },

    computed: {
      discountPercentage() {
        return 10
      },
      discountSum() {
        return ((this.price + this.extras) * (this.discountPercentage / 100)).toFixed(2);
      },
      total() {
        return (this.price + this.extras - this.discountSum).toFixed(2);
      }
    }
  }
</script>

<style lang="scss">
  .summary-table {
    width: 100%;

    td {
      font-size: 18px;
      color: white;
    }

    .total,
    .deposit {
      font-weight: 700;
    }
  }
</style>