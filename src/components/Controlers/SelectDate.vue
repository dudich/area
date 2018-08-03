<template>
  <date-picker
    v-model="date"
    :lang="lang"
    width="100%"
    range
    :shortcuts="shortcuts"
    :not-before="new Date()"></date-picker>
</template>

<script>
  import DatePicker from 'vue2-datepicker'

  export default {
    components: {DatePicker},
    data() {
      return {
        date: '',
        shortcuts: [
          {
            text: 'Today',
            onClick: () => {
              this.date = [new Date(), new Date()]
            }
          }
        ],
        lang: {
          days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
          placeholder: {
            date: 'Select Date',
            dateRange: 'Select Date Range'
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .mx-datepicker {
    .mx-input {
      height: 60px;
      border: 2px solid rgba(256, 256, 256, .8);
      color: #fff;
      background-color: transparent;

      &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #fff;
        opacity: 1; /* Firefox */
      }
      &::-ms-input-placeholder { /* Microsoft Edge */
        color: #fff;
      }
    }

    .mx-input-append {
      background-color: transparent;

      svg {
        display: none;
      }

      .mx-input-icon {
        color: #fff;
      }
    }
  }
</style>