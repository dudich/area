<template>
  <tr>
    <td
      class="price-notification text-notification"
      colspan="2"
      >
    <slot></slot>
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'price-notification',

    data() {
      return {
        catering: false,
        extraAdd: false,
        disappear: false
      }
    },


  }
</script>

<style scoped>
  .price-notification {
    font-size: 11px;
  }
</style>