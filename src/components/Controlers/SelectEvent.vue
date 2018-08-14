<template>
  <v-select
    class="select-control"
    v-model="select"
    :items="items"
    label="Select Event"
    outline
    append-icon="$vuetify.icons.dropdown"
  ></v-select>
</template>

<script>
  export default {
    data: () => ({
      select: 'Meeting',
      items: [
        'Breakfast/Lunch/Dinner',
        'Cocktail',
        'Conference',
        'Corporate Function',
        'Exhibition',
        'Group Accommodation',
        'Meeting',
        'Party',
        'Wedding',
        'Xmas'
      ]
    })
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
        height: 35px;
        min-height: auto;
        border: none!important;
        background-color: rgba(255, 255, 255, .1) !important;

        .v-input__append-inner {
          margin-top: 7px;
        }
      }
    }
  }
</style>