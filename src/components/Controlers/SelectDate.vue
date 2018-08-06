<template>
  <div class="datepicker-container">
    <label class="datepicker-label" for="datePicker">Select Date</label>
    <date-picker
      v-model="date"
      :lang="lang"
      width="100%"
      range
      :shortcuts="shortcuts"
      :not-before="new Date()"
      id="datePicker"></date-picker>
  </div>
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
            dateRange: 'Start Date ~ End Date'
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .event-details,
  .select-package {
    .mx-datepicker {
      .mx-input {
        color: #fff;

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

    .datepicker-container {
      position: relative;
      label {
        position: absolute;
        top: -20px;
        left: 20px;
        color: #fff;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
      }
    }
  }

  .event-details {
    .mx-datepicker {
      .mx-input {
        height: 60px;
        border: 2px solid rgba(256, 256, 256, .8);
        background-color: transparent;
      }
    }
  }

  .select-package {
    .mx-datepicker {
      .mx-input {
        border: none;
        background-color: rgba(255, 255, 255, .1)
      }
    }
  }
</style>