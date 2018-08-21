<template>
  <tr v-if="catering || price > 0">
    <td class="price-notification text-notification"  v-text="notificationText" colspan="2"></td>
  </tr>
</template>

<script>
  export default {
    name: 'price-notification',

    props: {
      catering: {
        type: Boolean,
        default: false
      },
      price: {
        type: Number,
        default: 0
      },
      notificationText: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .price-notification {
    font-size: 11px;
  }
</style>