<template>
  <v-container class="booking-stage-list" fluid>
    <v-layout row wrap>
      <v-flex xs4 class="booking-stage-list__item">{{ bookingStages.details }}</v-flex>
      <v-flex xs4 class="booking-stage-list__item">{{ bookingStages.selectPackage }}</v-flex>
      <v-flex xs4 class="booking-stage-list__item">{{ bookingStages.pay }}</v-flex>
    </v-layout>
  </v-container>
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
        },
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*.booking-stage-list {
    display: flex;
    justify-content: center;
    padding: 10px 20%;
    background-color: #00528b;

    &__item {
      margin: {
        right: 100px;
        left: 100px;
      }
      font-size: 20px;
      color: white;

      &.active {
        font-weight: 900;
      }
    }
  }*/
</style>