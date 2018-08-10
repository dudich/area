<template>
  <div class="booking-stages">
    <v-container>
      <v-layout row wrap>
        <v-flex md4 sm12>
          <h3 class="booking-stage" v-text="bookingStages.details" :class="{ active: $route.path === '/event-details'}"></h3>
        </v-flex>
        <v-flex md4 sm12>
          <h3 class="booking-stage" v-text="bookingStages.selectPackage" :class="{ active: $route.path === '/select-package'}"></h3>
        </v-flex>
        <v-flex md4 sm12 v-if="$route.path === `/hold/${ $route.params.id }`">
          <h3 class="booking-stage" v-text="bookingStages.hold" :class="{ active: $route.path === `/hold/${ $route.params.id }`}"></h3>
        </v-flex>
        <v-flex md4 sm12 v-else>
          <h3 class="booking-stage" v-text="bookingStages.pay" :class="{ active: $route.path === `/hold/${ $route.params.id }`}"></h3>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'stage-list',

    data() {
      return {
        bookingStages: {
          details: 'Event Details',
          selectPackage: 'Select Package',
          pay: 'Book and Pay',
          hold: 'Hold Room'
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '../styles/variables';

  .booking-stage {
    margin: {
      top: 16px;
      bottom: 16px;
    }
    font-size: 20px;
    font-weight: 400;
    color: white;

    &.active {
      font-weight: bold;
      color: $blue;
    }
  }
</style>