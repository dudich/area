<template>
  <table class="summary-table">
    <tr>
      <td>Room Hire Cost-Hourly</td>
      <td v-text="`$${ price }`"></td>
    </tr>
    <tr>
      <td>Extras</td>
      <td v-text="`$${ extras }`"></td>
    </tr>
    <tr>
      <td>Catering</td>
      <td v-text="catering"></td>
    </tr>
    <tr>
      <td v-text="`Discount (${discountPercentage}%)`"></td>
      <td v-text="`$${ discountSum }`"></td>
    </tr>
    <tr class="total">
      <td>Total</td>
      <td v-text="`$${total}`"></td>
    </tr>
    <tr class="deposit">
      <td>Deposit</td>
      <td v-text="`$${total}`"></td>
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
        type: String,
        default: 'TBC'
      }
    },

    computed: {
      discountPercentage() {
        return 10
      },
      discountSum() {
        return (this.price + this.extras) * (this.discountPercentage / 100);
      },
      total() {
        return this.price + this.extras - this.discountSum;
      }
    }
  }
</script>

<style lang="scss">
  .summary-table {
    width: 100%;
    text-align: right;

    td {
      font-size: 16px;
      color: white;
    }

    td:first-of-type {
      padding-right: 10px;
    }

    td:last-of-type {
      color: #8cc63e;
    }

    .total,
    .deposit {
      font-weight: 700;
    }
  }
</style>