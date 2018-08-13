<template>
  <div class="booking-stages">
    <v-container>
      <v-layout row wrap>
        <router-link class="back-link" to="/select-package" v-if="$route.path === `/hold/${ $route.params.id }`">Back</router-link>
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
          <h3 class="booking-stage" v-text="bookingStages.book" :class="{ active: $route.path === `/book/${ $route.params.id }`}"></h3>
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
          book: 'BookForm and Pay',
          hold: 'HoldForm Room'
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