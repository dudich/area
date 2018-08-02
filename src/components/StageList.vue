<template>
    <v-layout row wrap>
      <v-flex md4 sm12 class="booking-stage" :class="{ active: isActiveRoute}">{{ bookingStages.details }}</v-flex>
      <v-flex md4 sm12 class="booking-stage" :class="{ active: isActiveRoute}">{{ bookingStages.selectPackage }}</v-flex>
      <v-flex md4 sm12 class="booking-stage" :class="{ active: isActiveRoute}">{{ bookingStages.pay }}</v-flex>
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
    },

    computed: {
      isActiveRoute() {
        return this.$route.path === '/'
      }
    }
  }
</script>


<style lang="scss" scoped>
  .booking-stage {
    margin-bottom: 16px;
    font-size: 20px;
    color: white;
    &.active {
      font-weight: bold;
    }
  }
</style>