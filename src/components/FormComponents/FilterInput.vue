<template>
  <div class="input-capacity-container">
    <label class="capacityLabel" for="capacity" v-text="input.label"></label>
    <v-text-field
      class="input-capacity"
      v-model="input.value"
      :rules="capacityRules"
      id="capacity"
      @focus="onFocus"
      @change="updateValue"
    ></v-text-field>
  </div>
</template>

<script>
  import {UPDATE_FILTER_VALUE} from "../../store/actionTypes";

  export default {
    name: 'input-capacity',

    props: {
      input: {
        type: Object,
        required: true
      }
    },

    data: () => ({
      valid: false,
      capacityRules: [
        v => !!v || 'Capacity is required',
        v => v <= 100 || 'Too much',
        v => /^[ 0-9]+$/.test(v) || 'Time must be number',
      ]
    }),

    methods: {
      onFocus() {
        this.input.value = ''
      },
      updateValue() {
        this.$store.commit(UPDATE_FILTER_VALUE, {value: this.input.value, name: this.input.name})
      }
    }
  }
</script>

<style lang="scss">
  .event-details,
  .select-package {
    .input-capacity-container {
      position: relative;

      .capacityLabel {
        position: absolute;
        top: -30px;
        left: 5px;
        color: #fff;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
      }
      .input-capacity {
        display: flex;
        align-items: center;
        margin-top: 0;
        border-radius: 4px;

        .v-input__slot {
          padding: 0 12px;
          margin-bottom: 0;
          &::before,
          &::after {
            content: none;
          }

          input {
            color: #fff;
          }
        }

        .v-text-field__details {
          position: absolute;
          text-align: center;
        }
      }
    }
  }

  .event-details {
    .input-capacity-container {
      .input-capacity {
        height: 56px;
        border: 2px solid rgba(255, 255, 255, 0.8);

        .v-text-field__details {
          top: 50px;
        }
      }
    }
  }

  .select-package {
    .input-capacity-container {
      .input-capacity {
        height: 50px;
        background-color: rgba(255, 255, 255, .1);

        .v-text-field__details {
          top: 45px;
        }
      }
    }
  }
</style>