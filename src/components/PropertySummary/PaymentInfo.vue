<template>
  <div class="payment-info">
    <p class="payment-info__caption font-weight-bold">Payment Information</p>
    <p class="payment-info__text">
      payment info goes here /payment.info <br>
      goes here /payment.info goes here
    </p>
    <ul>
      <li v-for="item in items">
        <img src="" alt="CC logo">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'payment-info',

    data() {
      return {
        items: []
      }
    }
  }
</script>

<style lang="scss">
  .payment-info {
    text-align: left;

    .payment-info__caption {
      font-size: 16px;
    }
  }
</style>