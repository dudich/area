<template>
  <div class="booking-stages">
    <v-container>
      <v-layout row wrap align-center>
        <v-flex v-if="pathCondition" xs12 md2 lg1>
          <v-btn
            class="back-link no-text-transform"
            to="/select-package"
            flat
            round
            dark
          >Back
          </v-btn>
        </v-flex>
        <v-flex :class="[pathCondition ? 'xs12 sm4 md3 lg3' : 'xs12 sm4']">
          <h3 class="booking-stage"
              v-text="bookingStages.selectEvent"
              :class="{ active: $route.path === '/select-event'}"
          >
          </h3>
          <span class="booking-stage-number hidden-sm-and-up">1/3</span>
        </v-flex>
        <v-flex :class="[pathCondition ? 'xs12 sm4 md3 lg4' : 'xs12 sm4']">
          <h3 class="booking-stage"
              v-text="bookingStages.selectPackage"
              :class="{ active: $route.path === '/select-package'}"
          >
          </h3>
          <span class="booking-stage-number hidden-sm-and-up">2/3</span>
        </v-flex>
        <v-flex
          :class="[pathCondition ? 'xs12 sm4 lg4' : 'xs12 sm4']"
          v-if="$route.path === `/hold/${ $route.params.id }`"
        >
          <h3 class="booking-stage"
              v-text="bookingStages.hold"
              :class="{ active: $route.path === `/hold/${ $route.params.id }`}"
          >
          </h3>
          <span class="booking-stage-number hidden-sm-and-up">3/3</span>
        </v-flex>
        <v-flex
          :class="[pathCondition ? 'xs12 sm4 lg4' : 'xs12 sm4']"
          v-else
        >
          <h3 class="booking-stage"
              v-text="bookingStages.book"
              :class="{ active: $route.path === `/book/${ $route.params.id }`}"
          >
          </h3>
          <span class="booking-stage-number hidden-sm-and-up">3/3</span>
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
          book: 'Book + Confirm',
          hold: 'Hold Room'
        }
      }
    },

    computed: {
      pathCondition() {
        return this.$route.path === `/hold/${ this.$route.params.id }` || this.$route.path === `/book/${ this.$route.params.id }`
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

      &-number {
        display: none;
        margin-left: 10px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
      }

      &.active {
        display: inline-block;;
        font-weight: bold;
        color: $blue;

        & + .booking-stage-number {
          display: inline-block;
        }
      }

      @media screen and (min-width: $xs) {
        margin: {
          top: 16px;
          bottom: 16px;
        }
      }

      @media screen and (max-width: $xs - 1) {
        display: none;
      }
    }

    .back-link {
      padding: 20px 32px;
      border: 1px solid $blue;
      font-size: 18px;
    }
  }
</style>