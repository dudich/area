<template>
  <tr v-if="catering">
    <td class="catering-notification"  v-text="notificationText" colspan="2"></td>
  </tr>
</template>

<script>
  export default {
    name: 'catering-notification',

    props: {
      catering: {
        type: Boolean,
        required: true
      }
    },

    data: () => ({
      notificationText: 'We will contact tou to discuss details about catering options'
    })
  }
</script>

<style scoped>
  .catering-notification {
    font-size: 11px;
    color: orange;
  }
</style>