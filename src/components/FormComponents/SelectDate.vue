<template>
  <div class="datepicker-container">
    <label class="datepicker-label" for="datePicker" v-text="input.label"></label>
    <date-picker
      v-model="input.date"
      lang="en"
      width="100%"
      type="datetime"
      format="YYYY-MM-DD hh:mm:ss a"
      :minute-step="10"
      :placeholder="input.placeholder"
      @change="updateValue"
      id="datePicker"></date-picker>
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker'
  import {UPDATE_FILTER_SELECT_VALUE} from "../../store/actionTypes";

  export default {

    props: {
      input: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        date: this.input.select,
      }
    },

    methods: {
      updateValue() {
        this.$store.commit(UPDATE_FILTER_SELECT_VALUE, {select: this.date, name: this.input.name})
      }
    },

    components: {DatePicker}
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
        height: 56px;
        border: 2px solid rgba(256, 256, 256, .8);
        background-color: transparent;
      }
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
  }
</style>