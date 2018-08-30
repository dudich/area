<template>
  <div class="booking-stages">
    <v-container>
      <v-layout row wrap align-center>
        <v-flex xs12 md2 lg1>
          <v-btn
            class="back-link no-text-transform"
            to="/select-package"
            v-if="$route.path === `/hold/${ $route.params.id }` || $route.path === `/book/${ $route.params.id }`"
            flat
            round
            dark
          >Back
          </v-btn>
        </v-flex>
        <v-flex xs12 sm4 md3 lg3>
          <h3 class="booking-stage" v-text="bookingStages.selectEvent"
              :class="{ active: $route.path === '/select-event'}"></h3>
        </v-flex>
        <v-flex xs12 sm4 md3 lg4>
          <h3 class="booking-stage" v-text="bookingStages.selectPackage"
              :class="{ active: $route.path === '/select-package'}"></h3>
        </v-flex>
        <v-flex xs12 sm4 md4 lg4 v-if="$route.path === `/hold/${ $route.params.id }`">
          <h3 class="booking-stage" v-text="bookingStages.hold"
              :class="{ active: $route.path === `/hold/${ $route.params.id }`}"></h3>
        </v-flex>
        <v-flex xs12 sm4 lg4 v-else>
          <h3 class="booking-stage" v-text="bookingStages.book"
              :class="{ active: $route.path === `/book/${ $route.params.id }`}"></h3>
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
          selectEvent: 'Select Event',
          selectPackage: 'Select Package',
          book: 'Book and Confirm',
          hold: 'Hold Room'
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '../styles/variables';

  .booking-stages {

    .booking-stage {
      font-size: 25px;
      font-weight: 400;
      color: white;

      &.active {
        font-weight: bold;
        color: $blue;
      }

      @media screen and (min-width: $xs) {
        margin: {
          top: 16px;
          bottom: 16px;
        }
      }
    }

    .back-link {
      padding: 20px 32px;
      border: 1px solid $blue;
      font-size: 18px;
    }

    @media screen and (max-width: $xs - 1) {
      padding-bottom: 10px;
    }
  }
</style>