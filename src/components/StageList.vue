<template>
  <ul class="booking-stage-list">
    <li class="booking-stage-list__item">{{ bookingStages.details }}</li>
    <li class="booking-stage-list__item active">{{ bookingStages.selectPackage }}</li>
    <li class="booking-stage-list__item">{{ bookingStages.pay }}</li>
  </ul>
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
  .booking-stage-list {
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
  }
</style>