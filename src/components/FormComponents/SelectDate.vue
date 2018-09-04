<template>
  <div class="datepicker-container">
    <label class="datepicker-label" for="datePicker" v-text="input.label"></label>
    <date-picker
      v-model="input.date"
      lang="en"
      width="100%"
      type="datetime"
      format="YYYY-MM-DD hh:mm a"
      :time-picker-options="{ start: '07:00', step: '00:30', end: '22:00' }"
      :not-before="notBefore"
      :placeholder="input.placeholder"
      :input-name="input.name"
      @change="updateValue"
      id="datePicker"
      confirm
    ></date-picker>
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker'
  import {UPDATE_FILTER_VALUE} from "../../store/actionTypes";

  export default {

    props: {
      input: {
        type: Object,
        required: true
      },
      notBefore: {
        type: Number,
        required: true
      }
    },

    methods: {
      updateValue() {
        this.$store.commit(UPDATE_FILTER_VALUE, {select: this.input.date, name: this.input.name})
      }
    },

    components: {DatePicker}
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

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

      &-popup {
        right: auto !important;
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
        color: #fff;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
      }
    }

    /*.mx-panel-date td.today {
      color: $blue;
    }

    .mx-calendar-content .cur-month {
      background-color: $blue;
    }

    .mx-calendar-content .cur-month.disabled {
      background-color: #f3f3f3 !important;
    }

    .mx-calendar-content .cur-month.actived {
      background-color: green !important;
    }

    .mx-calendar-content .cur-month.actived ~ .cur-month{
      background-color: transparent !important;
    }*/
  }

  .event-details {
    .mx-datepicker {

      .mx-input {
        height: 56px;
        border: 2px solid rgba(256, 256, 256, .8);
        background-color: transparent;
      }
    }

    .datepicker-container label {
      top: -28px;
      left: 14px;
    }
  }

  .select-package {
    .mx-datepicker {

      .mx-input {
        height: 50px;
        border: none;
        background-color: rgba(255, 255, 255, .1)
      }
    }

    .datepicker-container label {
      top: -20px;
      left: 20px;
    }
  }
</style>