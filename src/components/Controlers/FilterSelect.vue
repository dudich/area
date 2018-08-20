<template>
  <v-select
    class="select-control"
    v-model="state"
    :items="input.items"
    :label="input.label"
    :name="input.name"
    @change="updateValue"
    outline
    append-icon="$vuetify.icons.dropdown"
  ></v-select>
</template>

<script>
  import {UPDATE_FILTER_SELECT_VALUE} from "../../store/actionTypes";

  export default {
    name: 'filter-select',

    props: {
      input: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        state: this.input.select
      }
    },

    methods: {
      updateValue() {
        this.$store.commit(UPDATE_FILTER_SELECT_VALUE, {select: this.state, name: this.input.name})
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .event-details,
  .select-package {
    .select-control {
      .v-select__selections {
        padding-top: 0!important;
        color: #fff;
      }

      .v-label {
        top: -30px;
        color: #fff!important;

        &--active {
          transform: none;
        }
      }

      .v-icon {
        color: #fff!important;
      }
    }
  }

  .event-details {
    .select-control {
      .v-input__slot {
        border-color: rgba(255, 255, 255, .8)!important;
      }
    }
  }

  .select-package {
    .select-control {
      .v-input__slot {
        height: 50px;
        min-height: auto;
        border: none!important;
        background-color: rgba(255, 255, 255, .1) !important;

        .v-input__append-inner {
          margin-top: 14px;
        }
      }
    }
  }
</style>