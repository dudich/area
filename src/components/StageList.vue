<template>
  <div class="booking-stages">
    <v-container>
      <v-layout row wrap>
        <v-flex sm4 xs12>
          <router-link to="/select-event">
            <h3 class="booking-stage" v-text="bookingStages.selectEvent" :class="{ active: $route.path === '/select-event'}"></h3>
          </router-link>
        </v-flex>
        <v-flex sm4 xs12>
          <router-link to="/select-package">
            <h3 class="booking-stage" v-text="bookingStages.selectPackage" :class="{ active: $route.path === '/select-package'}"></h3>
          </router-link>
        </v-flex>
        <v-flex sm4 xs12 v-if="$route.path === `/hold/${ $route.params.id }`">
          <h3 class="booking-stage" v-text="bookingStages.hold" :class="{ active: $route.path === `/hold/${ $route.params.id }`}"></h3>
        </v-flex>
        <v-flex sm4 xs12 v-else>
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
          selectEvent: 'Select Event',
          selectPackage: 'Select Package',
          book: 'Book and Pay',
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
  }
</style>