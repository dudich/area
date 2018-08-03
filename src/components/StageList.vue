<template>
    <v-layout row wrap>
      <v-flex md4 sm12 class="booking-stage" :class="{ active: $route.path === '/event-details'}">{{ bookingStages.details }}</v-flex>
      <v-flex md4 sm12 class="booking-stage" :class="{ active: $route.path === '/select-package'}">{{ bookingStages.selectPackage }}</v-flex>
      <v-flex md4 sm12 class="booking-stage" :class="{ active: $route.path === '/book'}">{{ bookingStages.pay }}</v-flex>
    </v-layout>
</template>

<script>
  export default {
    name: 'stage-list',

    data() {
      return {
        bookingStages: {
          details: 'Event Details',
          selectPackage: 'Select Package',
          pay: 'Book and Pay'
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  .booking-stage {
    margin: {
      top: 16px;
      bottom: 16px;
    }
    font-size: 20px;
    color: white;
    &.active {
      font-weight: bold;
      color: #1976D2;
    }
  }
</style>